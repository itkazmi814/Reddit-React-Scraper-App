const router = require("express").Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

router.route("/test").post((req, res) => {
	console.log("Test post route worked!");
});

router.route("/api/articles/scrape").post(articleController.scrapeArticles);

module.exports = router;
