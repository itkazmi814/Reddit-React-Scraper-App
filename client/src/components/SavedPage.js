import React, { Component } from "react";
import API from "../utils/API";
import Article from "./Article";

class SavedPage extends Component {
	state = {
		articles: []
	};

	componentDidMount = () => {
		API.getAllSavedArticles().then(response => {
			console.log(response.data);
			this.setState({ articles: response.data });
		});
	};

	render() {
		return (
			<div>
				{this.state.articles.map((article, i) => (
					<Article key={i} {...article} />
				))}
			</div>
		);
	}
}

export default SavedPage;
