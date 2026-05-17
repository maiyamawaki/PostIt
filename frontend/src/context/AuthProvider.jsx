import {useEffect, useState} from "react";
import { isLoggedIn } from "../api/authenticationApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
	const [isLogin, setIsLogin] = useState(false);
	const [loading, setLoading]	 = useState(true);

	useEffect(() => {
		const fetchLoginStatus = async() => {
			try {
				const result = await isLoggedIn();
				setIsLogin(result);
			} catch (err) {
				console.log(err);
				setIsLogin(false);
			} finally {
				setLoading(false);
			}
		};
		fetchLoginStatus();
	},[]);
	
	return (
		<AuthContext.Provider value={{isLogin, setIsLogin, loading}}>
			{children}
		</AuthContext.Provider>
	);
};
