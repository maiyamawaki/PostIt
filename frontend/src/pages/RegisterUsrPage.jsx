import { useState } from "react";
import { useRegisterUsr } from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent" 

const RegisterUsrPage = () => {
	const {handleRegisterUsr} = useRegisterUsr();
	const navigate = useNavigate();

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setErr] = useState("");

	const handleRegisterUsrSubmit = async(e) => {
		e.preventDefault();

		try {
			await handleRegisterUsr(userName, email, password);
			navigate("/postit");
		} catch(err) {
			console.log(err);
			setErr(err.message);
		}
	}

	return (
		<div className="main">
			<HeaderComponent />
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div className="registerUsrPage">
				<h2>Register User Information</h2>
				<form onSubmit={handleRegisterUsrSubmit}>
					<div className="username">
						<label>Username : </label>
						<input 
								type="text"
								value={userName}
								onChange={(e)=>{setUserName(e.target.value)}}
						/>
					</div>
					<div className="email">
						<label>Email : </label>
						<input 
								type="email"
								value={email}
								onChange={(e)=>{setEmail(e.target.value)}}
						/>
					</div>
					<div className="password">
						<label>Password : </label>
						<input 
								type="password"
								value={password}
								onChange={(e)=>{setPassword(e.target.value)}}
						/>
					</div>
					<button type="submit">Register</button>
				</form>
			</div>
		</div>
	)
} 

export default RegisterUsrPage;