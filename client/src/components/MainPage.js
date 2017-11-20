import React, { Component } from "react";
import API from "../utils/API";
import Article from "./Article";
import Jumbotron from "./Jumbotron";

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
		console.log("Searching for topic: ", this.state.search.topic);
		API.searchForArticles(this.state.search.topic).then(response => {
			this.setState({ articles: response.data });
		});
	};

	render() {
		return (
			<div>
				<Jumbotron handleScrapeArticles={this.handleScrapeArticles} />
				<form class="col-6">
					<div class="form-group d-inline-block">
						<label for="exampleInputEmail1">Topic</label>
						<input
							value={this.state.search.topic}
							onChange={this.handleInputChange}
							name="topic"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter topic"
						/>
					</div>
					<div class="form-group d-inline-block">
						<label for="exampleInputPassword1">Subreddit</label>
						<input
							value={this.state.search.subreddit}
							onChange={this.handleInputChange}
							name="subreddit"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Enter subreddit"
						/>
					</div>
					<button class="btn btn-primary" onClick={this.handleSearchSubmit}>
						Search
					</button>
				</form>

				{this.state.articles.map((article, i) => (
					<Article key={i} {...article} />
				))}
			</div>
		);
	}
}

export default MainPage;
