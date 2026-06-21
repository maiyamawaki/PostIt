import { useState } from "react";
import { useCreatePostIt } from "../hooks/usePostIt";
import { useCategory } from "../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent" 

const RegisterPostIt = () => {
	const {handleCreate} = useCreatePostIt();
	const navigate = useNavigate();
	const {category} = useCategory();

	 const [postItTitle,setPostItTitle] = useState("");
	 const [postItContents,setPostItContents] = useState("");
	 const [postItCategory,setPostItCategory] = useState("Personal");

	 const handleRegisterSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleCreate(postItTitle, postItContents, postItCategory);
			setPostItTitle("");
			setPostItContents("");
			setPostItCategory("");
			navigate("/postit");
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			<div className="registerPostIt">
				<h2>NEW POSTIT</h2>
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