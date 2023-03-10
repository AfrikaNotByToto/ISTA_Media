import React from 'react';

import PostCard from './PostCard';
import { Post } from './Types/types';

export default function TryPost({ state }: { state: Post[] }): JSX.Element {
    return (
        <center>
            <div style={{ marginLeft: '5rem', marginRight: '5rem', marginTop: '20rem' }}>
                <div className="carousel carousel-center w-full p-4 space-x-4 bg-black rounded-box">
                    {state.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

        </center>

    );
}
