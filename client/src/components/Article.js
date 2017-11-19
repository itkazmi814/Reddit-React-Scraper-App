import React, { Component } from "react";
import API from "../utils/API";

const Article = props => (
	<div class="article-card card col-12 my-3">
		<div class="card-body">
			<h4 class="article-title card-title">
				{" "}
				<a> {props.title} </a>
			</h4>
			<h6 class="card-subtitle mb-2 text-muted"> {props.link} </h6>
			<p class="card-text"> Article Text </p>
			<button
				type="button"
				class="d-inline-block save-article-btn btn btn-info mb-2"
			>
				<i class="fa fa-bookmark" aria-hidden="true" />
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

export default Article;
