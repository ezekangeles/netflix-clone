import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { UserAuth } from '../context/AuthContextProvider'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot} from 'firebase/firestore'
import { async } from '@firebase/util'
import { AiFillCloseSquare } from 'react-icons/ai'

const SavedMovies = () => {
    const slider = document.getElementById('slider')
    const {user} = UserAuth()
    const [movies, setMovies] = useState([]) 

    const left = () =>{
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const right = () =>{
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(()=>{
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) =>{
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) =>{
        try{
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        }catch(error){
            console.log(error)
        }
    }


  return (
    <div className=''>
        <h1 className='text-xl px-1 py-5'>My Movie List</h1>
        <div className='flex item-center relative group'>
        <BsFillArrowLeftCircleFill onClick={left} className='absolute top-[40%] translate-x-[-50%] z-10 left-7 opacity-50 hover:opacity-100 cursor-pointer text-3xl hidden group-hover:block'/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap items-center justify-center gap-1 
        scroll-smooth scrollbar-hide relative'>
            {movies?.map((item, ind) =>{
                    return(
                        <div key={ind} className='w-[200px] md:w-[250px] lg:w-[300px] inline-block relative m-1'>
                            <img className='w-full h-full block ' 
                            src={`https://www.themoviedb.org/t/p/original/${item?.img}`} alt={item?.img} />
                            <div className='absolute transition hover:bg-black/50 hover:opacity-100 cursor-default h-full w-full top-0 left-0 opacity-0 '>
                                <h1 className='flex items-center justify-center w-full h-full whitespace-normal text-center font-bold text-xs md:text-s lg:text-base'>{item?.title}</h1>
                                <p onClick={()=> deleteShow(item.id)} className='absolute top-2 right-2 cursor-pointer text-lg opacity-75'><AiFillCloseSquare /></p>
                            </div>
                        </div>
                    )
                })}
            </div> 
        <BsFillArrowRightCircleFill onClick={right} className='absolute top-[40%] translate-x-[-50%] z-10 right-0 opacity-50 hover:opacity-100 cursor-pointer text-3xl hidden group-hover:block'/>
        </div>
    </div>
  )
}

export default SavedMovies
