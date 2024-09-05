// app/page.tsx
import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService'; // Importing from postService

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts when the component is mounted
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts(); // Fetch posts from API
      setPosts(data);
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
