import { useState } from "react";
import { deleteCategory } from "../api/categoryApi";
import { useCategory, useCreateCategory } from "../hooks/useCategory";
import HeaderComponent from "../components/HeaderComponent";
import CategoryComponent from "../components/CategoryComponent";

const CategoryPage = () => {
	const {category, refetch} = useCategory();
	const {handleCreate} = useCreateCategory();
	const [categoryName, setCategoryName] = useState("");

	const handleRegisterSubmit = async(e) => {
		e.preventDefault();
		try {
			await handleCreate(categoryName);
			setCategoryName("");
			refetch();
		} catch (error) {
			console.error("Error creating category:", error);
		}
	}

	const handleDelete = async(categoryId) => {
		try {
			await deleteCategory(categoryId);
			refetch();
		} catch (error) {
			console.error("Error deleting category:", error);
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
					<button type="submit">Create Category</button>
				</div>	
			</form>

			<div>
				{category.map((cate) => {
					return <CategoryComponent	
						key={cate.categoryId}
						category={cate}
						onDelete={()=>handleDelete(cate.categoryId)}
					/>
				})}
			</div>
		</div>
	)
}

export default CategoryPage;