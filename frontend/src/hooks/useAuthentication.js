import { login, registerUsr } from "../api/authenticationApi";

export const useLogin = () => {
	const handleLogin = async(email, password) => {
		try{
			await login(email, password);
		} catch(err) {
			console.log(err);
			throw err;
		}
	}
	return {handleLogin};
}

export const useRegisterUsr = () => {
	const handleRegisterUsr = async(userName, email, password) => {
		try {
			await registerUsr(userName,email,password);
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
	return {handleRegisterUsr}
}