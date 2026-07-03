const BASE_URL = "http://localhost:8080/postit/";

export const fetchAllPostIt = async (labelId) => {
	const response = await fetch(`${BASE_URL}${labelId}`, {
		method : "GET",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const fetchAllDonePostIt = async(labelId) => {
	const response = await fetch(`${BASE_URL}${labelId}/donePostIts`, {
		method : "GET",
		credentials: "include"
	})

	if(!response.ok) {
		throw new Error("Fetch all done PostIt failed");
	}
	const postItData = await response.json();
	
	return postItData;
}

export const fetchPostIt = async(postId, labelId) => {
	const response = await fetch(`${BASE_URL}${labelId}/${postId}`,{
		method : "GET",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const createPostIt = async(labelId, postItTitle, postItContents, postItCategory) => {
	const response = await fetch(`${BASE_URL}${labelId}`,{
		method : "POST",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({labelId, postItTitle, postItContents, postItCategory}),
	});

	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}

	return response.json();
}

export const updatePostIt = async(labelId, postId, postItTitle, postItContents, postItCategory) => {
	const numericPostId = Number(postId);
 	const response = await fetch(`${BASE_URL}${labelId}/${numericPostId}`,{
		method : "PUT",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({labelId, postItTitle, postItContents, postItCategory}),
	});

	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}

	return response.json();
}

export const updatePostItAsDone = async(labelId, postId) => {
  const numericPostId = Number(postId);
	const response = await fetch(`${BASE_URL}${labelId}/${numericPostId}/done`,{
		method : "PUT",
		credentials : "include",
		headers : {"Content-type" : "application/json"}
	});
	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}

	return response.json();
}; 

export const deletePostIt = async(labelId, postId) => {
	const numericPostId = Number(postId);
 	const response = await fetch(`${BASE_URL}${labelId}/${numericPostId}`,{
		method : "DELETE",
		credentials: "include"
	});

	if(!response.ok) {
		const errorData = await response.json();
		throw errorData;
	}

	return response.json();
}