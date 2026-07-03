import { useState } from "react";
import { useCreatePostIt } from "../hooks/usePostIt";
import { useCategory } from "../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent" 

const RegisterPostIt = () => {
	const {labelId} = useParams();
	const {handleCreate} = useCreatePostIt();
	const navigate = useNavigate();
	const {category} = useCategory();

	 const [postItTitle,setPostItTitle] = useState("");
	 const [postItContents,setPostItContents] = useState("");
	 const [postItCategory,setPostItCategory] = useState("");
	 const [error,setError] = useState({});

	 const handleRegisterSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleCreate(labelId, postItTitle, postItContents, postItCategory);
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
			<div className="registerPostIt">
				<h2>NEW POSTIT</h2>
				{error.postItTitle && <p>{error.postItTitle}</p>}
				{error.postItContents && <p>{error.postItContents}</p>}
				{error.postItCategory && <p>{error.postItCategory}</p>}
				<form onSubmit={handleRegisterSubmit}>
					<div className="postItTitle">
						<label>TITLE : </label>
						<input
							type="text"
							value={postItTitle}
							onChange={(e) => setPostItTitle(e.target.value)}
						/>
					</div>
					<div className="postItContents">
						<label>CONTENTS : </label>
						<textarea
							value={postItContents}
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
					<button type="submit">Create PostIt</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPostIt;