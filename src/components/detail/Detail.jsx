import React from 'react'
import { MainPosts } from '../mainPosts/MainPosts'

export const Detail = () => {
  return (
    <div class="w-10/12">
        <div class="h-80 relative">
            <img class="w-full h-64 object-cover" src="assets/post/3.jpeg" alt="" />
            <img class="absolute left-0 w-40 h-40 rounded-full m-auto top-40 right-0 object-cover" src="assets/person/2.jpeg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center">
            <h4 class="text-2xl font-bold">Shin Code</h4>
            <span>Udemy講師をしています</span>
        </div>
    </div>
  )
}
