import { useNavigate, useParams } from "react-router-dom";
import {useUpdatePostIt, useGetPostIt} from "../hooks/usePostIt";
import { useCategory } from "../hooks/useCategory";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent" 

const UpdatePostIt = () => {
	const navigate = useNavigate();
	const {postId} = useParams();
	const {handleUpdate} = useUpdatePostIt(postId);
	const {post} = useGetPostIt(postId);
	const {category} = useCategory();

	const [postItTitle, setPostItTitle] = useState("");
	const [postItContents, setPostItContents] = useState("");
	const [postItCategory, setPostItCategory] = useState("");
	const [error, setError] = useState({});
	
	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleUpdate(postItTitle, postItContents, postItCategory);
			setPostItTitle("");
			setPostItContents("");
			setPostItCategory("");
			setError({});
			navigate("/postit");
		} catch (err) {
			setError(err);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			<div className="updatePostIt">
				<h2>UPDATE POSTIT</h2>
				<form onSubmit={handleSubmit}>
					<div className="postItTitle">
						{error.postItTitle && <p>{error.postItTitle}</p>}
						<label>TITLE : </label>
						<input
							type="text"
							placeholder={post?.postItTitle}
							value={postItTitle}
							onChange={(e) => setPostItTitle(e.target.value)}
						/>
					</div>
					<div className="postItContents">
						{error.postItContents && <p>{error.postItContents}</p>}
						<label>CONTENTS : </label>
						<textarea
							value={postItContents}
							placeholder={post?.postItContents}
							onChange={(e) => setPostItContents(e.target.value)}
						/>
					</div>
					<div className="postItCategory">
						<label>CATEGORY : </label>
						<select
							value={postItCategory}
							onChange={(e) => setPostItCategory(e.target.value)}
						>
							{category.map((cate)=> {
								return <option 
								key = {cate.categoryId} 
								value={cate.categoryName}>{cate.categoryName}</option>
							})}
						</select>
					</div>
					<button type="submit">Update PostIt</button>
				</form>
			</div>
		</div>
	)

}

export default UpdatePostIt;