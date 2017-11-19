import React, { Component } from "react";
import API from "../utils/API";

class MainContent extends Component {
	state = {
		search: {
			topic: "",
			subreddit: ""
		}
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ search: { ...this.state.search, [name]: value } });
	};

	handleSearchSubmit = event => {
		event.preventDefault();
		console.log("Searching for topic: ", this.state.search.topic);
		API.searchForArticles(this.state.search.topic);
	};

	render() {
		return (
			<div>
				<div>Hello world this is the MainContent section1!! </div>
				<form class="col-6">
					<div class="form-group">
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
					<div class="form-group">
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
			</div>
		);
	}
}

export default MainContent;
