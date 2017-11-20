import React from "react";

const CommentForm = props => (
	<div class="comment-form-card card-body ">
		<form>
			<div class="form-group">
				<input
					value={props.value}
					name="body"
					onChange={props.handleInputChange}
					class="form-control"
					rows="3"
					placeholder="Say something!"
				/>
				<div onClick={props.handleCommentCreation} class="btn btn-warning mt-2">
					{" "}
					<i class="fa fa-check" aria-hidden="true" /> Submit{" "}
				</div>
			</div>
		</form>
	</div>
);

export default CommentForm;
