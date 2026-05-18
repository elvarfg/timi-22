import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Post } from "./types";

export default function PostPage() {
  // Einn postur a sidu

  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | []>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );
        const postData = await postResponse.json();
        setPost(postData);
      } catch (error) {
        console.error("Villa kom upp við að sækja postinn");
      } finally {
        // her er setLoading i fales eins og i posts
      }
    };

    const fetchComments = async () => {
      try {
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        const commentData = await commentsResponse.json();
        setComments(commentData);
      } catch (error) {
        console.error("Villa kom upp við að sækja comment");
      } finally {
        // her er setLoading i fales eins og i posts
      }
    };

    fetchPost();
    fetchComments();
  }, [postId]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
      {comments && (
        <div className="commentsContainer">
          {comments.map((comment) => (
            <div className="commentCard">
              <h5>{comment.name}</h5>
              <p style={{ fontSize: "8px" }}>{comment.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
