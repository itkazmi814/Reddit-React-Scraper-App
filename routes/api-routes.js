const router = require("express").Router();
// const articleController = require("../controllers/articleController");
// const commentController = require("../controllers/commentController");
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

/* Begin article CRUD functions */

scrapeArticles = (req, res) => {
	//gets the html body of the request
	axios
		.get("https://www.reddit.com/r/popular/")
		.then(response => {
			//load response into cheerio
			var $ = cheerio.load(response.data);
			//grab the specific data we are looking for
			$("#siteTable p.title").each((i, element) => {
				var article = {};
				article.title = $(element)
					.children("a")
					.text();

				article.link = $(element)
					.children("a")
					.attr("href");

				db.Article.create(article);
			});
		})
		.then(() => res.json(false))
		.catch(err => console.log(err));
};

getAllArticles = (req, res) => {
	db.Article
		.find({})
		.populate("comments")
		.sort({ _id: -1 })
		.then(allArticles => {
			res.json(allArticles);
		});
};

getAllSavedArticles = (req, res) => {
	db.Article
		.find({ isSaved: true })
		.populate("comments")
		.sort({ _id: -1 })
		.then(allSaved => {
			res.json(allSaved);
		});
};

searchForArticles = (req, res) => {
	db.Article
		.find({ title: { $regex: `.*${req.params.topic}.*`, $options: "i" } })
		.populate("comments")
		.sort({ _id: -1 })
		.then(searchResults => {
			res.json(searchResults);
		});
};

saveArticle = (req, res) => {
	db.Article
		.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: { isSaved: true } },
			{ new: true }
		)
		.then(savedArticle => {
			res.json(savedArticle);
		});
};

unsaveArticle = (req, res) => {
	db.Article
		.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: { isSaved: false } },
			{ new: true }
		)
		.then(data => {
			res.json(data);
		});
};

/* End article CRUD functions */

/* Begin comments CRUD functions */
getComments = (req, res) => {
	db.Article
		.findOne({
			_id: req.params.id
		})
		.populate("comments")
		.then(fullArticleInfo => {
			res.json(fullArticleInfo);
		});
};

addComment = (req, res) => {
	db.Comments
		.create({ body: req.body.body })
		.then(newComment => {
			return db.Article
				.findOneAndUpdate(
					{ _id: req.params.id },
					{ $push: { comments: newComment._id } },
					{ new: true }
				)
				.populate("comments")
				.sort({ _id: -1 });
		})
		.then(data => {
			res.json(data);
		});
};

deleteComment = (req, res) => {
	db.Comments.remove({ _id: req.params.id }).then(() => {
		db.Article
			.update(
				{ comments: req.params.id },
				//removes a specific index of the comments array where id matches
				{ $pullAll: { comments: [{ _id: req.params.id }] } }
			)
			.then(data => {
				res.json(data);
			});
	});
};

/* End comments CRUD functions */

module.exports = app => {
	/* Article routes */
	//GET - Scrape Reddit and store articles to db
	app.post("/api/articles/scrape", (req, res) => {
		scrapeArticles(req, res);
	});

	//GET - get all articles from db
	app.get("/api/articles", (req, res) => {
		getAllArticles(req, res);
	});

	//GET - get all saved articles from db
	app.get("/api/articles/saved", (req, res) => getAllSavedArticles(req, res));

	//GET - get all articles with specific parameters from db
	app.get("/api/articles/search/topic/:topic", (req, res) => {
		searchForArticles(req, res);
	});

	//POST - save a specific article
	app.post("/api/articles/:id/save", (req, res) => saveArticle(req, res));

	//UPDATE - unsave a specific article
	app.post("/api/articles/:id/unsave", (req, res) => unsaveArticle(req, res));

	/* Comment routes */
	//GET - display comments for a specific article
	app.get("/api/article/:id", (req, res) => getComments(req, res));

	//POST - Create a new comment and add (update) it to an article
	app.post("/api/articles/:id/comments/add", (req, res) =>
		addComment(req, res)
	);

	//POST - delete a comment and remove (update) it from all articles (only can be in one)
	app.post("/api/articles/comments/:id/delete", (req, res) =>
		deleteComment(req, res)
	);
};
