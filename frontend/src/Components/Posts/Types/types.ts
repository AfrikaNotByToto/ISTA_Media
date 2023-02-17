export type Post = {
  id: number;
  img: string;
  title: string;
  description: string;
  userId: number;
};
export type State = {
  posts: Post[];
  error: undefined | string;
};
export type PostId = Post['id'];
