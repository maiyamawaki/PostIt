const BASE_URL = "http://localhost:8080/postit";

export const fetchAllPostIt = async () => {
	const response = await fetch(`${BASE_URL}`, {
		method : "GET",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const fetchAllDonePostIt = async() => {
	const response = await fetch(`${BASE_URL}/done`, {
		method : "GET",
		cretedentials: "include"
	})

	if(!response.ok) {
		throw new Error("Fetch all done PostIt failed");
	}
	
	const postItData = await response.json();
	
	return postItData;
}

export const fetchPostIt = async(postId) => {
	const response = await fetch(`${BASE_URL}/${postId}`,{
		method : "GET",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const createPostIt = async(postItTitle, postItContents) => {
	const response = await fetch(BASE_URL,{
		method : "POST",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({postItTitle, postItContents}),
	});

	if(!response.ok) {
		throw new Error("Create PostIt function failed");
	}

	return response.json();
}

export const updatePostIt = async(postId, postItTitle, postItContents) => {
	const numericPostId = Number(postId);
 	const response = await fetch(`${BASE_URL}/${numericPostId}`,{
		method : "PUT",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({postItTitle, postItContents}),
	});

	if(!response.ok) {
		throw new Error("Update PostIt function failed");
	}

	return response.json();
}

export const updatePostItAsDone = async(postId) => {
  const numericPostId = Number(postId);
	const response = await fetch(`${BASE_URL}/${numericPostId}/done`,{
		method : "PUT",
		credentials : "include",
		headers : {"Content-type" : "application/json"}
	});
	if(!response.ok) {
		throw new Error("Update PostIt as done function failed");
	}

	return response.json();
}; 

export const deletePostIt = async(postId) => {
	const numericPostId = Number(postId);
	console.log("numericPostId : " + numericPostId);	
 	const response = await fetch(`${BASE_URL}/${numericPostId}`,{
		method : "DELETE",
		credentials: "include"
	});

	if(!response.ok) {
		throw new Error("Delete PostIt function failed");
	}

	return response.json();
}