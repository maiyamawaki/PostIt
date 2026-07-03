import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useAuthentication";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
	const {labelId} = useParams();
	const {isLogin, loading} = useAuthContext();
	const { handleLogout } = useLogout();
	const navigate = useNavigate();

	const onLogout = async() => {
		try {
			await handleLogout();
			navigate("/");	
		}	catch(err) {
			console.log(err);
		}
	}

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
			<Link to={"/postit/{labelId}"}>Home</Link>
			}
			{isLogin &&
			<Link to={"/postit/{labelId}/register"}>New PostIt</Link>
			}
			{isLogin &&
			<Link to={"/category"}>Category</Link>
			}
			{isLogin &&
			<Link to={"/postit/:labelId/donePostIts"}>Done</Link>
			}
			{isLogin &&
			<button to={"/auth/logout"} onClick={onLogout}>Logout</button>
			}
		</div>
	)
}

export default HeaderComponent;