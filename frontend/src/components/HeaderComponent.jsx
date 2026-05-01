import { Link } from "react-router-dom";

const HeaderComponent = () => {
	return (
		<div className="header">
			<Link to={"/"}>Home</Link>
			<Link to={"/postit/register"}>New PostIt</Link>
			<Link to={"/auth/register"}>Register</Link>
		</div>
	)
}

export default HeaderComponent;