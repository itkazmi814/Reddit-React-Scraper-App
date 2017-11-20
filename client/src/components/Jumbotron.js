import React from "react";

const Jumbotron = props => (
	<div class="jumbotron jumbotron-fluid">
		<div class="container mx-auto ">
			<h1 class="display-3">Let's Talk Reddit</h1>
			<p class="lead">Reddit. Just friends. Search, Talk, Save.</p>
			<span>
				{" "}
				<button
					onClick={props.handleScrapeArticles}
					class="btn btn-success d-inline-block"
				>
					<i class="fa fa-plus mr-2" aria-hidden="true" /> Get more articles!
				</button>{" "}
				<span> or </span>
				<button class="btn btn-primary">Search</button>
				<span> below. </span>
			</span>
		</div>
	</div>
);

export default Jumbotron;
