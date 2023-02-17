import { Post, PostId } from '../Components/Posts/Types/types';

export const loadPosts = async (): Promise<Post[]> => {
  const res = await fetch('http://localhost:4000/api/posts');
  const data = await res.json();
  return data;
};

export const addPost = async (newPost: Post): Promise<Post> => {
  const res = await fetch('http://localhost:4000/api/posts', {
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

export const delPost = async (id: PostId): Promise<PostId> => {
  const res = await fetch(`http://localhost:4000/api/posts/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

// export const updatePost = async (Post: Post): Promise<Post> => {
//   const res = await fetch(`http://localhost:4000/api/Posts/${Post.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       img: Post.img,
//       title: Post.title,
//       description: Post.description,
//     }),
//   });
//   return res.json();
// };
