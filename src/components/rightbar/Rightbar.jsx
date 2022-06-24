import React from 'react';
import "../../index.css";
import { Users } from '../../dummyData';

export const Rightbar = () => {
  return (
    <div class="w-4/12">
        <div class="pt-5 px-5">
            <div class="flex items-center">
                <img class="w-8 h-8 mr-1" src="assets/star.png" alt="" />
                <span class="text-md">
                    <b class="font-bold">フォロワー限定</b>イベント開催中
                </span>
            </div>
            <img class="w-full rounded-md my-6" src="assets/ad.jpeg" alt="" />
            <h4 class="mb-5">オンラインの友達</h4>
            <ul class="p-0 m-0 list-none">
                {Users.map((user) => (
                    <li class="flex items-center mb-4">
                    <div class="mr-2 relative">
                        <img class="w-10 h-10 object-cover rounded-full" src={user.profilePicture} alt="" />
                        <span class="absolute bg-green-500 w-3 h-3 rounded-full -top-0.5 left-0 border-white border-solid border"></span>
                    </div>
                    <span class="font-bold">{user.username}</span>
                </li>
                ))}
            </ul>
            <p class="text-lg font-bold">プロモーション広告</p>
            <img class="w-4/5 rounded-md my-3" src="assets/promotion/promotion1.jpeg" alt="" />
            <p class="text-sm text-slate-700">ショッピング</p>
            <img class="w-4/5 rounded-md my-3" src="assets/promotion/promotion2.jpeg" alt="" />
            <p class="text-sm text-slate-700">カーショップ</p>
            <img class="w-4/5 rounded-md my-3" src="assets/promotion/promotion3.jpeg" alt="" />
            <p class="text-sm text-slate-700">Shin Code株式会社</p>
        </div>
    </div>
  );
}
