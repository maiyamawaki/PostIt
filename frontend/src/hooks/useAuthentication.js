import { login, registerUsr, logout } from "../api/authenticationApi";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const {setIsLogin} = useAuthContext();
	const handleLogin = async(email, password) => {
		try{
			await login(email, password);
			setIsLogin(true);
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

export const useLogout = () => {
	const {setIsLogin} = useAuthContext();
	const handleLogout = async() => {
		try {
			await logout();
			setIsLogin(false);
		} catch(err) {
			console.log(err);
			throw err;
		}
	}
	return {handleLogout};
}

