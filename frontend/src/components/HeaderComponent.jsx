import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const HeaderComponent = () => {
	const {isLogin, loading} = useAuthContext();
	
	if(loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="header">
			{!isLogin &&
			<Link to={"/"}>Login</Link>
			}
			{!isLogin && 
			<Link to={"/auth/register"}>Register</Link>
			}
			{isLogin &&
			<Link to={"/postit/register"}>New PostIt</Link>
			}
		</div>
	)
}

export default HeaderComponent;