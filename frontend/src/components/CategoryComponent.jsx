import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({category}) => {

	const updDate = category.updTime.substring(0, 10).replace("T","");
	const updTime = category.updTime.substring(11, 16);

	return (
		<div className="category">
			<label>categoryName : {category.categoryName}	</label>
			<label>updTime : {updDate} {updTime}</label>
			<div className="categoryButtons">
		
			</div>
		</div>
	)
}

export default CategoryComponent;