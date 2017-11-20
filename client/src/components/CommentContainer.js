import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentContainer = props => (
	<div>
		{props.comments.length > 0
			? props.comments.map((comment, i) => <Comment key={i} {...comment} />)
			: false}
		<CommentForm
			handleCommentCreation={props.handleCommentCreation}
			handleInputChange={props.handleInputChange}
		/>
	</div>
);

export default CommentContainer;
