const BASE_URL = "http://localhost:8080/api/auth";

export const login = async(email, password) => {
	console.log("test1");
	const response = await fetch(`${BASE_URL}/login`, {
		method : "POST",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({email, password}),
	});

	console.log("test" + response);
	console.log("test2");
	const data = await response.json();

	if(!response.ok) {
		throw new Error(data.message || "Login function failed");
	}

	return data;
} 