import React from 'react';
import "../../index.css";

export const Sidebar = () => {
  return (
    <div class="h-screen w-full">
        <div class="p-5">
            <ul class="p-0 m-0">
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                    <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                    <span class="text-xl">ホーム</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                    <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    <span class="text-xl">検索</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                    <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                    <span class="text-xl">通知</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                    <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
                    <span class="text-xl">メッセージ</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                    <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" /></svg>
                    <span class="text-xl">ブックマーク</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    <span class="text-xl">プロフィール</span>
                </li>
                <li class="rounded-full flex items-center mb-3 py-1.5 px-1 cursor-pointer shadow-lg hover:shadow-none hover:translate-y-1.5">
                <svg class="h-8 w-8 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                    <span class="text-xl">設定</span>
                </li>
            </ul>
            <hr class="my-5" />
            <ul class="p-0 m-0 list-none">
                <li class="flex items-center mb-4">
                    <img class="w-8 h-8 object-cover rounded-full mr-2.5" src="/assets/person/2.jpeg" />
                    <span>Shin Code</span>
                </li>
                <li class="flex items-center mb-4">
                    <img class="w-8 h-8 object-cover rounded-full mr-2.5" src="/assets/person/3.jpeg" />
                    <span>Shin Code</span>
                </li>
                <li class="flex items-center mb-4">
                    <img class="w-8 h-8 object-cover rounded-full mr-2.5" src="/assets/person/4.jpeg" />
                    <span>Shin Code</span>
                </li>
                <li class="flex items-center mb-4">
                    <img class="w-8 h-8 object-cover rounded-full mr-2.5" src="/assets/person/5.jpeg" />
                    <span>Shin Code</span>
                </li>
            </ul>
        </div>
    </div>
  );
}
