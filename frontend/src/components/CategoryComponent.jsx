import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({category, onDelete}) => {

	const updDate = category.updTime.substring(0, 10).replace("T","");
	const updTime = category.updTime.substring(11, 16);

	return (
		<div className="category">
			<p>categoryName : {category.categoryName}	</p>  
			<p>updTime : {updDate} {updTime}</p>
			<div>
				<button onClick={onDelete}>Delete</button>
			</div>
		</div>
	)
}

export default CategoryComponent;