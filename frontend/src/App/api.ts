import { Post, PostId } from '../features/Posts/Types/types';

export const loadPosts = async (): Promise<Post[]> => {
  const res = await fetch('http://localhost:4000/api/Posts');
  return res.json();
};

export const addPost = async (newPost: Post): Promise<Post> => {
  const res = await fetch('http://localhost:4000/api/Posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: newPost.img,
      title: newPost.title,
      description: newPost.description,
    }),
  });
  return res.json();
};

export const delPost = async (id: PostId): Promise<Post> => {
  const res = await fetch(`http://localhost:4000/api/Posts/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updatePost = async (Post: Post): Promise<Post> => {
  const res = await fetch(`http://localhost:4000/api/Posts/${Post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: Post.img,
      title: Post.title,
      description: Post.description,
    }),
  });
  return res.json();
};
