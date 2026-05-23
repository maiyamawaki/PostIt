const BASE_URL = "http://localhost:8080/api/auth";

export const login = async(email, password) => {
	const response = await fetch(`${BASE_URL}/login`, {
		method : "POST",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({email, password}),
		credentials: "include"
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
		credentials: "include",
		headers	:	{"Content-type" : "application/json"},
		body : JSON.stringify({userName, email, password}),
	});

	const data = await response.json();

	if(!response.ok) {
		throw new Error(data.message || "Register user function failed");
	}

	return data;
}

export const isLoggedIn = async() => {
	const response = await fetch(`${BASE_URL}/getUser`, {
		method : "GET",
		credentials: "include",
	});
	if(response.ok) {
		return true;
	} else {
		return false;
	}
}

export const logout = async() => {
	const response = await fetch(`${BASE_URL}/logout`,{
		method : "POST",
		credentials: "include",
	});
	if(!response.ok) {
		throw new Error("Logout function failed");
	} 
}