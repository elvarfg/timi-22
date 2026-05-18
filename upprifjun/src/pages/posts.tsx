import { useEffect, useState } from "react";
import type { Post } from "./types";
import Card from "../components/Card/Card";
import "../index.css";
import { Link } from "react-router";

export default function PostsPage() {
  // Margir postar a einni sidu
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [page] = useState(1);
  const pageSize = 6;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`,
        );
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        setError("Villa kom upp við að sækja postana");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  function setPage(arg0: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && (
        <div>
          <p>Sæki pósta...</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && (
        <div className="cardGrid">
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Card title={post.title} text={post.body} />
            </Link>
          ))}
        </div>
      )}

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Back
        </button>
        <button disabled={posts.length < 6} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
