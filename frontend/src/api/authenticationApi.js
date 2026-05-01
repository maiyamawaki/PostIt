const BASE_URL = "http://localhost:8080/api/auth";

export const login = async(email, password) => {
	const response = await fetch(`${BASE_URL}/login`, {
		method : "POST",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({email, password}),
	});

	const data = await response.json();

	if(!response.ok) {
		throw new Error(data.message || "Login function failed");
	}

	return data;
}

export const registerUsr = async(userName, email, password) => {
	const response = await fetch(`${BASE_URL}/registerUsr`, {
		method : "POST",
		headers	:	{"Content-type" : "application/json"},
		body : JSON.stringify({userName, email, password}),
	});

	const data = await response.json();

	if(!response.ok) {
		throw new Error(data.message || "Register user function failed");
	}

	return data;
}