import React, { useEffect, useState } from 'react'
import axios from 'axios'

import API from '../API/API'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() =>{
        axios.get(API.popular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    // console.log(movie)

    const tranquete = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str
        }
    }
    
  return (
    <div className='w-full h-[500px]'>
      <div className='w-full h-full'>
        <div className='h-[500px] w-full absolute bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute top-[20%] w-full px-4'>
            <p className='w-full md:w-[75%] lg:w-[50%] xl:w[50%] text-3xl font-bold md:text-3xl lg:text-4xl xl:text-5xl'>{movie?.title}</p>
            <div className='my-2'>
                <button className='bg-slate-200 text-black px-2 py-1 '>Play</button>
                <button className=' text-white px-2 py-1 border-t border-r border-b ml-2'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Relase: {movie?.release_date}</p>
            <p className='text-sm my-1 w-full md:w-[75%] lg:w-[50%] xl:w[50%]'>{tranquete(movie?.overview, 180)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
