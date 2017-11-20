import React, { Component } from "react";
import API from "../utils/API";
import ArticleContainer from "./ArticleContainer";

class SavedPage extends Component {
	state = {
		articles: []
	};

	componentDidMount = () => {
		API.getAllSavedArticles().then(response => {
			this.setState({ articles: response.data });
		});
	};

	render() {
		return <ArticleContainer articles={this.state.articles} />;
	}
}

export default SavedPage;
