import { useState } from "react";
import { useCreatePostIt } from "../hooks/usePostIt";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent" 

const RegisterPostIt = () => {
	const {handleCreate} = useCreatePostIt();
	const navigate = useNavigate();

	 const [postItTitle,setPostItTitle] = useState("");
	 const [postItContents,setPostItContents] = useState("");

	 const handleRegisterSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleCreate(postItTitle, postItContents);
			setPostItTitle("");
			setPostItContents("");
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
					<button type="submit">Create PostIt</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPostIt;