import { useState } from "react";
import {updatePostItLabel} from "../api/postItLabelApi"
import { usePostItLabel } from "../hooks/usePostItLabel"; 
import PostItLabelComponent from "../components/PostItLabelComponent";
import { useCreatePostItLabel } from "../hooks/usePostItLabel";

const AllPostItLabelPage = () => {
	const {postItLabels, refetch} = usePostItLabel();
	const { handleCreate } = useCreatePostItLabel();
	const [error, setError] = useState({});
	const [labelName, setLabelName] = useState("");
	const [todoDate, setTodoDate] = useState("");


	const handleRegisterSubmit = async(e) => {
		e.preventDefault();

		try {
			await handleCreate(labelName, todoDate, false);
			setLabelName("");
			setTodoDate("");
			setError({});
			refetch();
		} catch (error) {
			setError(error);
		}
	}

	const handleUpdatePostItLabelAsDone =async(labelId) => {
		try{
			await updatePostItLabel(labelId);
			refetch();
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<div className="main">
			<h1>postit label</h1>
			<form onSubmit={handleRegisterSubmit}>
				{error.labelName && <p>{error.labelName}</p>}
				<label>ADD</label>
				<input
					type="text"
					value={labelName}
					onChange={(e) => setLabelName(e.target.value)}
				/>
				<input 
					type="date"
					value={todoDate}
					onChange={(e) => setTodoDate(e.target.value)}
				/>
				<button type="submit">Create Label</button>
			</form>
			<div className="postItLabelContainer">
				{postItLabels.map((label) => {
					return <PostItLabelComponent 
						key={label.labelId} 
						label={label}
						onDone={()=>handleUpdatePostItLabelAsDone(label.labelId)}
						/>
				})}
			</div>
		</div>
	)
}

export default AllPostItLabelPage;