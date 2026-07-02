import { login, registerUsr, logout } from "../api/authenticationApi";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const {setIsLogin} = useAuthContext();
	const handleLogin = async(email, password) => {
		await login(email, password);
		setIsLogin(true);
	}
	return {handleLogin};
}

export const useRegisterUsr = () => {
	const {setIsLogin} = useAuthContext();
	const handleRegisterUsr = async(userName, email, password) => {
		await registerUsr(userName,email,password);
		setIsLogin(true); 
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

