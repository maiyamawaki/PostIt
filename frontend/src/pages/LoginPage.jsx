import { useState } from "react";
import { useLogin } from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent" 

const LoginPage = () => {
	const {handleLogin} = useLogin();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setErr] = useState("");

	const handleLoginSubmit = async(e) => {
		e.preventDefault();

		try {
			setErr("");
			await handleLogin(email, password);
			setErr({});
			navigate("/postit");
		} catch(err) {
			setErr(err);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			<div className="loginPage">
				<h2>LOGIN</h2>
				<form onSubmit={handleLoginSubmit}>
					<div className="email">
						{error.email && <p style={{ color: "red" }}>{error.email}</p>}
						<label>EMAIL : </label>
						<input 
								type="email"
								value={email}
								onChange={(e)=>setEmail(e.target.value)}
						/>
					</div>
					<div className="password">
						{error.password && <p style={{ color: "red" }}>{error.password}</p>}
						<label>PASSWORD : </label>
						<input 
								type="password"
								value={password}
								onChange={(e)=>setPassword(e.target.value)}
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	)
}

export default LoginPage;