import axios from "axios";

export default {
  scrapeArticles: () => {
    return axios.post("/api/articles/scrape");
  },

  getAllArticles: () => {
    return axios.get("/api/articles");
  },

  getAllSavedArticles: () => {
    return axios.get("/api/articles/saved");
  },

  searchForArticles: topicQuery => {
    return axios.get(`/api/articles/search/topic/${topicQuery}`);
  },

  saveArticle: articleId => {
    return axios.post(`/api/articles/${articleId}/save`);
  },

  unsaveArticle: articleId => {
    return axios.post(`/api/articles/${articleId}/unsave`);
  },

  addComment: (articleId, newComment) => {
    return axios.post(`/api/articles/${articleId}/comments/add`, {
      body: newComment
    });
  },

  deleteComment: commentId => {
    return axios.post(`/api/articles/comments/${commentId}/delete`);
  },

  getComments: articleId => {
    return axios.get(`/api/articles/${articleId}`);
  }
};
