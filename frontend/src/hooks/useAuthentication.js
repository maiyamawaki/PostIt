import { login } from "../api/loginApi";

export const useLogin = () => {
	const handleLogin = async(email, password) => {
		try{
			console.log("test200");
			await login(email, password);
		} catch(err) {
			console.log(err);
			throw err;
		}
	}
	return {handleLogin};
}