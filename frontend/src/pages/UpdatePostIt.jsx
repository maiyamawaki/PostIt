import { useNavigate, useParams } from "react-router-dom";
import {useUpdatePostIt, useGetPostIt} from "../hooks/usePostIt";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent" 

const UpdatePostIt = () => {
	const navigate = useNavigate();
	const {postId} = useParams();
	const {handleUpdate} = useUpdatePostIt(postId);
	const {post} = useGetPostIt(postId);

	const [postItTitle, setPostItTitle] = useState("");
	const [postItContents, setPostItContents] = useState("");

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleUpdate(postItTitle, postItContents);
			setPostItTitle("");
			setPostItContents("");
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			<div className="updatePostIt">
				<h2>UPDATE POSTIT</h2>
				<form onSubmit={handleSubmit}>
					<div className="postItTitle">
						<label>TITLE : </label>
						<input
							type="text"
							placeholder={post?.postItTitle}
							value={postItTitle}
							onChange={(e) => setPostItTitle(e.target.value)}
						/>
					</div>
					<div className="postItContents">
						<label>CONTENTS : </label>
						<textarea
							value={postItContents}
							placeholder={post?.postItContents}
							onChange={(e) => setPostItContents(e.target.value)}
						/>
					</div>
					<button type="submit">Update PostIt</button>
				</form>
			</div>
		</div>
	)

}

export default UpdatePostIt;