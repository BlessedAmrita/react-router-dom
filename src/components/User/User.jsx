// import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function User() {
    const { userid }=useParams()
  return (
    <>
        <div className='text-5xl bg-orange-700 text-white text-center p-10'>User {userid}</div>
        <div className=' p-5 bg-slate-300 text-gray-700 text-2xl text-center'>This section is for practicing taking parameters and using the <span className=' text-orange-700'><Link to="https://reactrouter.com/en/main/hooks/use-params">useParams</Link></span> hook</div>
    </>
  )
}

export default User