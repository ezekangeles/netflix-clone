import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Movie from './Movie'


const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = useState([])
    const slider = document.getElementById('slider' + rowID)
   

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
            // console.log(response.data.results)
        })
    },[fetchURL])

   
    const left = () =>{
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const right = () =>{
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <div className=''>
      <h1 className='text-xl px-1'>{title}</h1>
      <div className='flex item-center relative group'>
        <BsFillArrowLeftCircleFill onClick={left} className='absolute top-[40%] translate-x-[-50%] z-10 left-7 opacity-50 hover:opacity-100 cursor-pointer text-3xl hidden group-hover:block'/>
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap items-center justify-center gap-1 
      scroll-smooth scrollbar-hide relative'>
            {movies.map((item, ind) =>{
                    return(
                        <Movie item={item} ind={ind}/>
                    )
                })}
            </div> 
        <BsFillArrowRightCircleFill onClick={right} className='absolute top-[40%] translate-x-[-50%] z-10 right-0 opacity-50 hover:opacity-100 cursor-pointer text-3xl hidden group-hover:block'/>
      </div>
    </div>
  )
}

export default Row
