import React, { Component } from "react";
import API from "../utils/API";

class Article extends Component {
	state = {
		isSaved: "",
		comments: ""
	};

	componentDidMount = () => {
		this.setState({
			isSaved: this.props.isSaved.toString(),
			comments: this.props.comments
		});
	};

	handleSaveChange = () => {
		if (this.state.isSaved === "true") {
			API.unsaveArticle(this.props._id).then(() =>
				this.setState({ isSaved: "false" })
			);
		} else {
			API.saveArticle(this.props._id).then(() =>
				this.setState({ isSaved: "true" })
			);
		}
	};

	render() {
		return (
			<div class="article-card card col-12 my-3">
				<div class="card-body">
					<h4 class="article-title card-title">
						{" "}
						<a> {this.props.title} </a>
					</h4>
					<h6 class="card-subtitle mb-2 text-muted"> {this.props.link} </h6>
					<button
						onClick={this.handleSaveChange}
						type="button"
						class="d-inline-block save-article-btn btn btn-info mb-2"
					>
						{this.state.isSaved === "true" ? (
							<i class="fa fa-bookmark" aria-hidden="true" />
						) : (
							<i class="fa fa-bookmark-o" aria-hidden="true" />
						)}
					</button>
					<button
						type="button"
						class="d-inline-block view-comments-btn btn btn-warning mb-2"
					>
						<i class="fa fa-pencil" aria-hidden="true" /> | 0
					</button>
				</div>
			</div>
		);
	}
}

export default Article;
