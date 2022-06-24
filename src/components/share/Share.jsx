import React from 'react';
import "../../index.css";

export const Share = () => {
  return (
    <div class="w-full h-40 p-5 shadow-lg rounded-lg">
        <div class="p-2.5">
            <div class="flex items-center">
                <img class="w-12 h-12 rounded-full object-cover mr-2.5" src="/assets/person/1.jpeg" alt="" />
                <input class="border-none w-full focus:outline-none" type="text" placeholder='今何してる？' />
            </div>
            <hr class="m-5" />
            <div class="flex items-center justify-between cursor-pointer">
                <div class="flex ml-5">
                    <div class="flex items-center mr-4">
                        <svg class="h-6 w-6 mr-1 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                        <span class="text-sm font-bold">写真</span>
                    </div>
                    <div class="flex items-center mr-4">
                        <svg class="h-6 w-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="8" y1="4" x2="8" y2="20" />  <line x1="16" y1="4" x2="16" y2="20" />  <line x1="4" y1="8" x2="8" y2="8" />  <line x1="4" y1="16" x2="8" y2="16" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="16" y1="8" x2="20" y2="8" />  <line x1="16" y1="16" x2="20" y2="16" /></svg>
                        <span class="text-sm font-bold">GIF</span>
                    </div>
                    <div class="flex items-center mr-4">
                        <svg class="h-6 w-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 16a10 10 0 0 1 6 -1.5" /></svg>
                        <span class="text-sm font-bold">気持ち</span>
                    </div>
                    <div class="flex items-center mr-4">
                    <svg class="h-6 w-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="19" x2="20" y2="19" />  <polyline points="4 15 8 9 12 11 16 6 20 10" /></svg>
                        <span class="text-sm font-bold">投票</span>
                    </div>
                </div>
                <button class="border-none py-1 px-4 bg-slate-500 rounded-md text-white cursor-pointer mr-5">投稿</button>
            </div>
        </div>
    </div>
  )
}
