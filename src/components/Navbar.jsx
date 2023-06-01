import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContextProvider'
import { async } from '@firebase/util'


const Navbar = () => {

  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async () =>{
    try{
      await logOut()
      navigate('/login')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between w-full absolute px-4 py-2 z-[100]'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? <div>
        <Link to='/account'>
          <button className='mr-3'>Account</button>
        </Link>
        <button onClick={handleSubmit} className='bg-red-600 py-1 px-3 rounded-md cursor-pointer hover:bg-red-500 transition'>Log Out</button>
      </div> : <div>
        <Link to='/login'>
          <button className='mr-3'>Log In</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-red-600 py-1 px-3 rounded-md cursor-pointer hover:bg-red-500 transition'>Sign Up</button>
        </Link>
      </div>}
    </div>
  )
}

export default Navbar
