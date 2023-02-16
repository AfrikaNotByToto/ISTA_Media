import { Post, PostId } from './types';

type Action =
  | {
      type: 'INIT_POSTS';
      payload: Post[];
    }
  | {
      type: 'DEL_POST';
      payload: PostId;
    }
  | {
      type: 'UPDATE_POST';
      payload: Post;
    };
export default Action;
