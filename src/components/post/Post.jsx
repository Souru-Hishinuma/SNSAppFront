import React, { useState } from 'react';
import "../../index.css";
import { User, Users } from '../../dummyData';

export const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
  return (
    <div class="w-full shadow-lg rounded-md my-8">
        <div class="p-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img class="w-8 h-8 rounded-full object-cover" src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt="" />
                    <span class="text-base font-bold mx-3">
                    {Users.filter((user) => user.id === post.id)[0].username}
                    </span>
                    <span class="text-xs">{post.date}</span>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </div>
            </div>
            <div class="my-5">
                <span>{post.desc}</span>
                <img class="mt-5 w-full object-contain max-h-96" src={post.photo} alt="" />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img class="w-6 h-6 cursor-pointer mr-1" src="./assets/heart.png" alt="" onClick={() => handleLike()} />
                    <span class="text-base">{like}人がいいねを押しました。</span>
                </div>
                <div>
                    <span class="cursor-pointer mr-1 text-base border-solid border-black border-b">{post.comment}:コメント</span>
                </div>
            </div>
        </div>
    </div>
  )
}
