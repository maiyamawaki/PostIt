const BASE_URL = "http://localhost:8080/postit";

export const fetchPostIt = async () => {
	const response = await fetch(`${BASE_URL}`);

	if(!response.ok) {
		throw new Error("PostItApi failed");
	}

	const postItData = await response.json();

	return postItData;
}

export const createPostIt = async(postItTitle, postItContents) => {
	const response = await fetch(`${BASE_URL}/`,{
		method : "POST",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({postItTitle, postItContents}),
	});

	if(!response.ok) {
		throw new Error("Create PostIt function failed");
	}

	return response.json();
}