// services/postService.ts
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch all posts (READ)
export const fetchPosts = async () => {
  const response = await fetch(API_URL); // Fetches data from the API
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json(); // Convert response to JSON
};

// Fetch a single post by ID (READ)
export const fetchPostById = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

// Create a new post (CREATE)
export const createPost = async (postData: { title: string; body: string; userId: number }) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
};

// Update a post (UPDATE)
export const updatePost = async (id: number, updatedData: { title?: string; body?: string }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return response.json();
};

// Delete a post (DELETE)
export const deletePost = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return response.json();
};
