const BASE_URL = "http://localhost:8080/usr";

export const createUsr = async(userName, email, password) => {
	const response = await fetch(BASE_URL, {
		method : "POST",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({userName, email, password}),
	});

	if(!response.ok) {
		throw new Error("Create user function failed");
	}

	return response.json();
}

export const updateUsr = async(userId, userName, email, password) => {
	const numericUserId = Number(userId);
	const response = await fetch(`${BASE_URL}/${numericUserId}`, {
		method : "PUT",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({userName, email, password}),
	});

	if(!response.ok) {
		throw new Error("Update user function failed");
	}

	return response.json();
}

