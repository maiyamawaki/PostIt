const BASE_URL = "http://localhost:8080/postit";

export const fetchAllPostIt = async () => {
	const response = await fetch(`${BASE_URL}`);
	console.log("aquiiii");
	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const fetchPostIt = async(postId) => {
	const response = await fetch(`${BASE_URL}/${postId}`);

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const createPostIt = async(postItTitle, postItContents) => {
	const response = await fetch(BASE_URL,{
		method : "POST",
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
	console.log("numericPostId : " + typeof	numericPostId);	
 	const response = await fetch(`${BASE_URL}/${numericPostId}`,{
		method : "PUT",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({postItTitle, postItContents}),
	});

	if(!response.ok) {
		throw new Error("Update PostIt function failed");
	}

	return response.json();
}

export const deletePostIt = async(postId) => {
	const numericPostId = Number(postId);
	console.log("numericPostId : " + numericPostId);	
 	const response = await fetch(`${BASE_URL}/${numericPostId}`,{
		method : "DELETE",
	});

	if(!response.ok) {
		throw new Error("Delete PostIt function failed");
	}

	return response.json();
}