import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "./Jumbotron";
import Search from "./Search";
import ArticleContainer from "./ArticleContainer";

class MainPage extends Component {
	state = {
		search: {
			topic: "",
			subreddit: ""
		},

		articles: []
	};

	componentDidMount = () => {
		API.getAllArticles().then(response => {
			this.setState({ articles: response.data });
		});
	};

	handleScrapeArticles = () => {
		API.scrapeArticles().then(() => {
			this.componentDidMount();
		});
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ search: { ...this.state.search, [name]: value } });
	};

	handleSearchSubmit = event => {
		event.preventDefault();
		API.searchForArticles(this.state.search.topic).then(response => {
			this.setState({ articles: response.data });
		});
	};

	render() {
		return (
			<div>
				<Jumbotron handleScrapeArticles={this.handleScrapeArticles} />
				<Search
					search={this.state.search}
					handleInputChange={this.handleInputChange}
					handleSearchSubmit={this.handleSearchSubmit}
				/>
				<ArticleContainer articles={this.state.articles} />
			</div>
		);
	}
}

export default MainPage;
