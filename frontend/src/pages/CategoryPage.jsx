import { useState } from "react";
import { useCategory, useCreateCategory } from "../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import CategoryComponent from "../components/CategoryComponent";

const CategoryPage = () => {
	const {category} = useCategory();
	const {handleCreate} = useCreateCategory();
	const navigate = useNavigate();
	const [categoryName, setCategoryName] = useState("");

	console.log("test : " + category);

	const handleRegisterSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleCreate(categoryName);
			setCategoryName("");
			navigate("/category");
		} catch (error) {
			console.error("Error creating category:", error);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			<h1>Category</h1>
			<form onSubmit = {handleRegisterSubmit}>
				<div className="categoryName">
					<label>CATEGORY NAME : </label>
					<input
						type="text"
						value={categoryName}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
				</div>
				<button type="submit">Create Category</button>
			</form>
			<div>
				{category.map((cate) => {
					return <CategoryComponent	
						key={cate.categoryId}
					/>
				})}
			</div>
		</div>
	)
}

export default CategoryPage;