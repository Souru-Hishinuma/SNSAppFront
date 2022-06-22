import React from 'react';
import "../../index.css";

export const Topbar = () => {
  return (
    <div class="bg-slate-500 h-14 w-full flex items-center sticky top-0 z-100">
        <div class="w-3/12">
            <span class="text-lg text-white font-bold ml-5">Real SNS</span>
        </div>
        <div class="w-5/12">
            <div class="w-full h-8 bg-white rounded-full flex align-center">
                <svg class="h-5 w-5 ml-3 mr-1 mt-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                <input class="divide-none outline-none" type="text" placeholder="探し物は何ですか？" />
            </div>
        </div>
        <div class="w-4/12 flex items-center justify-around text-white">
            <div class="flex">
                <div class="mr-4 cursor-pointer relative mt-1">
                    <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
                    <span class="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 flex items-center justify-center rounded-full text-sm">1</span>
                </div>
                <div class="mr-4 cursor-pointer relative mt-1">
                    <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                    <span class="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 flex items-center justify-center rounded-full text-sm">2</span>
                </div>
                <img src="/assets/person/1.jpeg" class="w-8 h-8 rounded-full cursor-pointer object-cover mt-1" />
            </div>
        </div>
    </div>
  );
}
