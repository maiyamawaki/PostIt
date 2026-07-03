import {useState, useEffect} from 'react';
import { fetchAllPostItLabel, createPostItLabel } from '../api/postItLabelApi';

export const usePostItLabel = () => {
	const [postItLabels, setPostItLabels] = useState([]);
	const [error, setError] = useState(null);

	const getPostItLabel = async () => {
		try {
			const postItLabelData = await fetchAllPostItLabel();
			setPostItLabels(postItLabelData);
		} catch (err) { 
			setError(err);
		} finally {
			console.log("success");
		}
	}

	useEffect(() => {
		getPostItLabel();
	}, []);

	return { postItLabels, error, refetch: getPostItLabel};
}

export const useCreatePostItLabel = () => {
	const handleCreate = async (labelName, todoDate, done) => {
		await createPostItLabel(labelName, todoDate, done);
	}

	return { handleCreate };	
}