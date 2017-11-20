import React from "react";
import Article from "./Article";

const ArticleContainer = props => (
	<div>
		{props.articles.map((article, i) => <Article key={i} {...article} />)}
	</div>
);

export default ArticleContainer;
