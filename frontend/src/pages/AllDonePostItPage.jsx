import {useAllDonePostIt} from "../hooks/usePostIt";
import HeaderComponent from "../components/HeaderComponent";
import PostItComponent from "../components/PostItComponent";

const AllDonePostItPage = () => {
	const {postIts, error} = useAllDonePostIt();

	if(error) {
		return (<p>Algo esta mal</p>);
	}

	return (
		<div className="main">
			<HeaderComponent />
			<h1>Done PostIt</h1>
			<div className="postItContainer">
				{postIts.map((post) => {
					return <PostItComponent 
						key={post.postId} 
						post={post}
						/>
				})}
			</div>
		</div>
	)
}

export default AllDonePostItPage;