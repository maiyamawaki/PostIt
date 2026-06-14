const BASE_URL = "http://localhost:8080/category";

export const fetchAllCategory = async() => {
	const response = await fetch(`${BASE_URL}`, {
		method : "GET",
		credentials	: "include"
	});

	if(!response.ok) {
		throw new Error("Fetch all category failed");
	}

	const categoryData = await response.json();
	
	return categoryData;
}

export const createCategory = async(categoryName) => {
	const response = await fetch(BASE_URL,{
		method : "POST",
		credentials: "include",
		headers : {"Content-type" : "application/json"},
		body : JSON.stringify({categoryName}),
	})

	if(!response.ok) {
		throw new Error("Create category function failed");
	}

	return response.json();
}