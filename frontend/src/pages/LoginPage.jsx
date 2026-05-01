import { useState } from "react";
import { useLogin } from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";

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
			navigate("/postit");
		} catch(err) {
			console.log(err);
			setErr(err.message);
		}
	}

	return (
		<div className="main">
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div className="loginPage">
				<h2>LOGIN</h2>
				<form onSubmit={handleLoginSubmit}>
					<div className="email">
						<label>EMAIL : </label>
						<input 
								type="email"
								value={email}
								onChange={(e)=>setEmail(e.target.value)}
						/>
					</div>
					<div className="password">
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