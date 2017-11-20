import React, { Component } from "react";
import API from "../utils/API";
import CommentContainer from "./CommentContainer";

class Article extends Component {
	state = {
		isSaved: "",
		comments: [],
		newComment: ""
	};

	componentDidMount = () => {
		console.log(this.props.isSaved, this.props.comments);
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

	handleInputChange = event => {
		const { value } = event.target;
		this.setState({ newComment: value });
	};

	handleCommentCreation = event => {
		event.preventDefault();
		console.log("Start create new comment", this.state.newComment);
		API.addComment(this.props._id, this.state.newComment)
			.then(response => {
				this.setState({
					comments: response.data.comments,
					newComment: ""
				});
			})
			.then(() => console.log("newComment is now: ", this.state.newComment));
	};

	handleCommentDeletion = event => {
		console.log("Now deleting comment");
		console.log(event.target);
		console.log(event.target.id);
		API.deleteComment(event.target.id)
			.then(() => {
				console.log("comment deleted");
				return API.getComments(this.props._id);
			})
			.then(response => this.setState({ comments: response.data.comments }));
	};

	render() {
		return (
			<div>
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
							class="d-inline-block save-article-btn btn btn-info mr-2 mb-2"
						>
							{this.state.isSaved === "true" ? (
								<i class="fa fa-bookmark" aria-hidden="true" />
							) : (
								<i class="fa fa-bookmark-o" aria-hidden="true" />
							)}
						</button>
						<button
							type="button"
							data-toggle="collapse"
							data-target={`#${this.props._id}`}
							aria-controls={this.props._id}
							aria-expanded="false"
							class="d-inline-block view-comments-btn btn btn-warning mr-2 mb-2"
						>
							{this.state.comments.length === 0 ? (
								<span>
									<i class="fa fa-pencil" aria-hidden="true" /> <span>| 0</span>{" "}
								</span>
							) : (
								<span>
									<i class="fa fa-comments-o" aria-hidden="true" />{" "}
									<span>| {this.state.comments.length} </span>{" "}
								</span>
							)}
						</button>
					</div>
					<div id={this.props._id} class="collapse">
						<CommentContainer
							articleId={this.props._id}
							comments={this.state.comments}
							newComment={this.state.newComment}
							handleCommentCreation={this.handleCommentCreation}
							handleCommentDeletion={this.handleCommentDeletion}
							handleInputChange={this.handleInputChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Article;
