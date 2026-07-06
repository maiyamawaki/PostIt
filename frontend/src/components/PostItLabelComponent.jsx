import React from "react";
import { Link } from "react-router-dom";

const PostItLabelComponent = ({label, onDone}) => {

	const todoDate = label.todoDate.substring(0, 10).replace("T","");

	return (
		<div className={label.done ? "postItLabelDone" : "postItLabel"}>
			<div className="postItLabelContent">
				<h3>{label.labelName}</h3>
				<label>todoDate : {todoDate}</label>
			</div>
			<div className="postItLabelButtons">
				<Link to={`/postit/${label.labelId}`}>View</Link>
				{!label.done &&
				<button onClick={onDone}>Done</button>
				}
			</div>
		</div>
	)
}

export default PostItLabelComponent;