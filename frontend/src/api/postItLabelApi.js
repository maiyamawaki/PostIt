const BASE_URL = "http://localhost:8080/label";

export const fetchAllPostItLabel = async () => {
	const response = await fetch(`${BASE_URL}`, {
		method : "GET",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("PostItLabelApi failed");
	}

	const postItLabelData = await response.json();

	return postItLabelData;
}

export const createPostItLabel = async(labelName, todoDate, done) => {
	const response = await fetch(BASE_URL,{
		method : "POST",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({labelName, todoDate, done}),
	})

	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}

	return response.json();
}

export const updatePostItLabel = async (lableId) => {
	const response = await fetch(`${BASE_URL}/${lableId}`, {
		method: "POST",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
	});
	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}
	return response.json();
}

export const deletePostIt = async (labelId) => {
	const response = await fetch(`${BASE_URL}/${labelId}`, {
		method : "DELETE",
		credentials : "include",
		headers : {"Content-type" : "application/json"},	
	});
	if(!response.ok) {
		const errorData = await response.json();
		return errorData;
	}
	return response.json();
}