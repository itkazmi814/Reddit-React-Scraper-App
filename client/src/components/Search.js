import React from "react";

const Search = props => (
	<form class="col-6">
		<div class="form-group d-inline-block">
			<label for="exampleInputEmail1">Topic</label>
			<input
				value={props.search.topic}
				onChange={props.handleInputChange}
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
				value={props.search.subreddit}
				onChange={props.handleInputChange}
				name="subreddit"
				class="form-control"
				id="exampleInputPassword1"
				placeholder="Enter subreddit"
			/>
		</div>
		<button
			class="btn btn-primary d-inline-block"
			onClick={props.handleSearchSubmit}
		>
			Search
		</button>
	</form>
);

export default Search;
