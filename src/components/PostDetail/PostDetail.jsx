import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const {id, title, body} = post;

  return (
    <div>
      <h3>Post detail of id: {id}</h3>
      <b>{title}</b>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;