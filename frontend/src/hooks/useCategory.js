import {useState, useEffect} from 'react';
import {fetchAllCategory, createCategory, deleteCategory} from '../api/categoryApi';

export const useCategory = () => {
	const [category, setCategory] = useState([]);
	const [error, setError] = useState(null);

	const getCategory = async() => {
		try{
			const categoryData = await fetchAllCategory();
			setCategory(categoryData);
		} catch(err) {
			setError(err);
		} finally {
			console.log("success");
		}
	}
	useEffect(() => {
		getCategory();
	},[]);

	return {category, error, imp : getCategory};
}

export const useCreateCategory = () => {
	const handleCreate = async(categoryName) => {
		try {
			await createCategory(categoryName);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleCreate};
}