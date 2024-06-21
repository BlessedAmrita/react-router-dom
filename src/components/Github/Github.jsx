// import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 const data=useLoaderData()
  return (
    <>
       <div className=' flex justify-center items-center gap-20 my-10'>
       {data.avatar_url && <img className='w-[200px] h-[200px] rounded-[50%]' src={data.avatar_url} alt="github_profile_picture" />}
       <div className=" flex flex-col gap-2 text-xl text-gray-700 font-semibold">
        {data.login && <div className="">Login Id: {data.login}</div>}
        {data.bio && <div className="">Bio: {data.bio}</div>}
        {data.followers && <div className="">Followers: {data.followers}</div>}
        {data.following && <div className="">Following: {data.following}</div>}
        {data.public_repos && <div className="">Public Repos: {data.public_repos}</div>}
       </div>
       </div>
    </>
  )
}

export default Github