import React from "react";

const Search = props => (
	<form class="col-6">
		<div class="form-group d-inline-block mr-2">
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
		<button
			class="btn btn-primary d-inline-block"
			onClick={props.handleSearchSubmit}
		>
			Search
		</button>
	</form>
);

export default Search;
