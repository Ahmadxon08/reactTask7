/* eslint-disable react/no-unescaped-entities */
import "./Comment.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/comments`
        );
        const data = await res.json();
        console.log(data);
        setComments(data);
      } catch (error) {
        console.log("Hatolik bor!!!", error);
      }
    };
    fetchComments();
  }, [id]);

  return (
    <div className="comment">
      <div className="container">
        <div className="comment_head">
          <Link to={"/"}>
            <button>go back</button>
          </Link>
          <h1>Comments</h1>
        </div>
        <div className="comment_content">
          {comments.map((comment) => {
            if (comment.postId == id) {
              return (
                <div className="card" key={comment.id}>
                  <div className="card_head">
                    <span>{comment.id}th user's comment</span>
            
                    <h1>{comment.email}</h1>
                  </div>
                  <div className="card_body">
                  <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                  </div>
                </div>
              );
            } 
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
