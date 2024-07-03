'use client'
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    if (username && post) {
      setPosts([...posts, { id: Date.now(), username, post }]);
      setUsername('');
      setPost('');
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">Add a Post</h1>
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleAddPost}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Post
        </button>
      </div>
      <div className="mt-4 w-full max-w-md">
        {posts.map(({ id, username, post }) => (
          <div key={id} className="bg-white p-4 rounded shadow-md mb-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{username}</p>
                <p>{post}</p>
              </div>
              <button
                onClick={() => handleDeletePost(id)}
                className="text-red-600 border-2 border-solid rounded border-red-600 p-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}