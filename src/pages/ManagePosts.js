import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ManagePosts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    imageUrl: '',
    author: '',
    date: new Date().toISOString(),
    id: id || ''
  });

  useEffect(() => {
    if (id) {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      const existingPost = savedPosts.find(p => p.id === id);
      if (existingPost) setFormData(existingPost);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...formData,
      id: id || Date.now().toString(),
      date: new Date().toISOString()
    };
    
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = id 
      ? savedPosts.map(p => p.id === id ? newPost : p)
      : [...savedPosts, newPost];
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate(id ? `/post/${id}` : '/manage');
    setFormData({ title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post Title"
        value={formData.title}
        onChange={e => setFormData({...formData, title: e.target.value})}
        required
      />
      <textarea
        placeholder="Post Content"
        value={formData.content}
        onChange={e => setFormData({...formData, content: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Author Name"
        value={formData.author}
        onChange={e => setFormData({...formData, author: e.target.value})}
        required
      />
      <button type="submit">{id ? 'Update Post' : 'Create Post'}</button>
    </form>
  );
}

export default ManagePosts; 