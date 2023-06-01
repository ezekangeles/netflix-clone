import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContextProvider'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({item, ind}) => {
    const [liked, setLiked] = useState(false)
    
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()
    const movieID = doc(db, 'users', `${user?.email}`)


    const saveShow = async () =>{
        if(user?.email){
            setLiked(!liked)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        } else {
            alert('Please login to save movie')
        }
    }

  return (
    <div key={ind} className='w-[200px] md:w-[250px] lg:w-[300px] inline-block relative m-1'>
        <img className='w-full h-full block ' 
        src={`https://www.themoviedb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute transition hover:bg-black/50 hover:opacity-100 cursor-default h-full w-full top-0 left-0 opacity-0 '>
            <p onClick={saveShow}>
                {liked ? <AiFillHeart className='absolute top-2 left-2 cursor-pointer'/> : <AiOutlineHeart className='absolute top-2 left-2 cursor-pointer'/>}
            </p>
            <h1 className='flex items-center justify-center w-full h-full whitespace-normal text-center font-bold text-xs md:text-s lg:text-base'>{item?.title}</h1>
        </div>
    </div>
  )
}

export default Movie
