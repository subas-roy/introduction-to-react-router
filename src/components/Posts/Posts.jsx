import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  // style
  const postsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px'
  }

  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div style={postsStyle}>
        {
          posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;