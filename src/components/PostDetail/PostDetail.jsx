import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const {id, title, body} = post;

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(`/posts`)
    // or
    // navigate(-1)
  }

  return (
    <div>
      <h3>Post detail of id: {id}</h3>
      <b>{title}</b>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetail;