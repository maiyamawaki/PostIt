import {useState, useEffect} from 'react';
import {fetchAllCategory, createCategory} from '../api/categoryApi';

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

	return {category, error, refetch : getCategory};
}

export const useCreateCategory = () => {
	const handleCreate = async(categoryName) => {
		await createCategory(categoryName);
	}
	return {handleCreate};
}