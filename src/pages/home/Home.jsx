import React from 'react';
import "../../index.css";
import { Topbar } from '../../components/topbar/Topbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { MainPosts } from '../../components/mainPosts/MainPosts';

export const Home = () => {
  return (
    <>
    <Topbar />
    <div class="flex w-full bg-slate-100">
      <Sidebar />
      {/* <MainPosts />
      <Rightbar /> */}
    </div>
    </>
  )
}
