import { Link } from "react-router-dom";

const Post = ({post}) => {
  const {id, title, body} = post;

  // style
  const postStyle = {
    border: '2px solid blue',
    borderRadius: '10px'
  }

  return (
    <div style={postStyle}>
      <h3>({id}) {title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`}><button>Show Detail</button></Link>
    </div>
  );
};

export default Post;