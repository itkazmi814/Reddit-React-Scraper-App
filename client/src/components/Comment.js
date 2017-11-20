import React from "react";

const Comment = props => (
	<div class="card-body p-2">
		<div
			onClick={props.handleCommentDeletion}
			class="d-inline-block delete-comment-btn btn btn-alert"
		>
			<b id={props._id}>X</b>
		</div>
		<div class="d-inline-block">
			<p> {props.body} </p>
			<h6 class="card-subtitle text-muted ">{}</h6>
		</div>
	</div>
);

export default Comment;
