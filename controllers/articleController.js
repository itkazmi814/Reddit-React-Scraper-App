const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
// Defining methods for the controller
module.exports = {
  /* GET - Scrape Reddit */
  scrapeArticles: (req, res) => {
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
      .then(() => {
        console.log("Done scraping articles");
        res.json(false);
      })
      .catch(err => console.log(err));
  }
};

/* GET - get all articles from Mongo */

/* POST - save an article */

/* UPDATE - unsave an article */
