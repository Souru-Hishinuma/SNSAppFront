import React from 'react';
import "../../index.css";
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import { Posts } from '../../dummyData';

export const MainPosts = () => {
  return (
    <div class="w-6/12">
        <div>
            <Share />
            {Posts.map((post) =>(
                <Post post={post} key={post.id} />
            ))}
        </div>
    </div>
  )
}
