import React from "react";
import Comment from "./Comment";

const CommentContainer = props => (
	<div>
		{props.comments
			? props.comments.map((comment, i) => (
					<Comment key={i} {...comment} />
				))
			: false}
	</div>
);

export default CommentContainer;
