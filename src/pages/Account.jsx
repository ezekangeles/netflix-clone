import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <div>
      <div className='w-full h-[400px]'>
        <img className='w-full h-[400px] object-cover absolute'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/d583cb90-3cfe-4469-a6ef-6d9e13c31f77/PH-en-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='w-full h-[450px] bg-black/50 absolute top-0 left-0'>
          <h1 className='absolute top-[20%] left-5 font-bold text-3xl md:text-5xl'>My List</h1>
        </div>
      </div>
      <SavedMovies />
    </div>
  )
}

export default Account
