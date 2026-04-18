import { Link } from "react-router-dom";

const HeaderComponent = () => {
	return (
		<div className="header">
			<Link to={"/"}>Home</Link>
			<Link to={"/postit/new"}>New PostIt</Link>
		</div>
	)
}

export default HeaderComponent;