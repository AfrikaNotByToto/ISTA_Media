import { Post, PostId } from '../Components/Posts/Types/types';
import { Request } from '../Components/Requests/Types/types';
import { CheckList } from '../Components/Modal/Types/types';
import { NewMessage } from '../Components/Footer/Types/types';
import { OneNews, NewsId } from '../Components/News/Types/types';
import { Emailform } from '../Components/CallBackFom/Types/types';

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

export const updatePost = async (post: Post): Promise<Post> => {
  const res = await fetch(`http://localhost:4000/api/Posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: post.img,
      title: post.title,
      description: post.description,
    }),
  });
  return res.json();
};

export const loadReq = async (): Promise<Request[]> => {
  const res = await fetch('http://localhost:4000/api/requests');
  const data = await res.json();
  return data;
};

export const addReq = async (newReq: Request): Promise<Request> => {
  const res = await fetch('http://localhost:4000/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newReq.name,
      email: newReq.email,
      phone: newReq.phone,
      data: newReq.data,
      comment: newReq.comment,
    }),
  });
  return res.json();
};

export const loadNews = async (): Promise<OneNews[]> => {
  const res = await fetch('http://localhost:4000/api/news');
  const data = await res.json();
  return data;
};

export const addNews = async (newNews: OneNews): Promise<OneNews> => {
  const res = await fetch('http://localhost:4000/api/news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: newNews.img,
      title: newNews.title,
      description: newNews.description,
      url: newNews.url,
    }),
  });
  return res.json();
};

export const delNews = async (id: NewsId): Promise<NewsId> => {
  const res = await fetch(`http://localhost:4000/api/news/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updateNews = async (oneNews: OneNews): Promise<OneNews> => {
  const res = await fetch(`http://localhost:4000/api/news/${oneNews.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: oneNews.img,
      title: oneNews.title,
      description: oneNews.description,
      url: oneNews.url,
    }),
  });
  return res.json();
};

export const sendEmailList = async (checkList: CheckList): Promise<CheckList> => {
  const res = await fetch('http://localhost:4000/api/mail', {
    method: 'post',
     headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: checkList.name,
      mail: checkList.mail
        }),
  });
  return res.json();
};

export const addEmailList = async (newEmail: Emailform): Promise<Emailform> => {
  const res = await fetch('http://localhost:4000/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: newEmail.id,
      email: newEmail.email,
    }),
  });
  return res.json();
};

export const sendMessageTelegram = async (newMessage: NewMessage): Promise<NewMessage> => {
  const res = await fetch('http://localhost:4000/api/telegram', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: newMessage.msg,
    }),
  });
  return res.json();
};
