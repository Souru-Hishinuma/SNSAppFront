import React from 'react'
import { Detail } from '../../components/detail/Detail'
import { MainPosts } from '../../components/mainPosts/MainPosts'
import { Rightbar } from '../../components/rightbar/Rightbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbar } from '../../components/topbar/Topbar'

export const Profile = () => {
  return (
    <>
    <Topbar />
    <div class="flex w-full bg-slate-100">
      <Sidebar />
      <Detail />
    </div>
    </>
  )
}
