import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Post.scss";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log("Hatolik yuzaga keldi:", error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div className="post">
      <div className="container">
        <div className="post_head">
          <Link to={"/"}>
            <a href="">go back</a>
          </Link>
          <h1>Posts</h1>
        </div>
        <ul>
          {posts.map((post) => {
            if (post?.userId == id) {
              return (
                <div className="post_card" key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                 <Link to={`/comment/${post.id}`}> <a href="">Comment</a></Link>
                </div>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Post;
