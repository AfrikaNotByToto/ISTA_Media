export type Post = {
  id: number;
  img: string;
  title: string;
  description: string;
  userId: number;
};
export type State = {
  posts: Post[];
};
export type PostId = Post['id'];
