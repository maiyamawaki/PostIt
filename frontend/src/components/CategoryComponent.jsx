import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({category, onDelete}) => {

	return (
		<div className="category">
			<p>{category.categoryName}</p>  
			<button onClick={onDelete}>Delete</button>
		</div>
	)
}

export default CategoryComponent;