import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const {id, title, body} = post;

  const navigate = useNavigate();

  // style
  const postStyle = {
    border: '2px solid blue',
    borderRadius: '10px'
  }

  const handleShowMore = () => {
    navigate(`/post/${id}`)
  }

  return (
    <div style={postStyle}>
      <h3>({id}) {title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`}><button>Show Detail</button></Link>
      <button onClick={handleShowMore}>Show More</button>
    </div>
  );
};

export default Post;