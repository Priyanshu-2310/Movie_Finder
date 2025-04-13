import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './Detail'

const Simplecard = ({movie,index}) => {
  return (
    <div className='p-4 w-[350px] bg-black'>
        <div className='h-[40vh] w-full'>
            <img className='h-full w-full object-cover' src={movie.Poster} alt="" />
        </div>
        <div className='p-4 bg-black'>
            <h2 className='text-white text-lg font-bold'>{movie.Title}</h2>
            <p className='text-gray-400 text-xs'>{movie.Plot}</p>
        </div>
        <Link className='px-2 py-1 bg-green-500 text-white text-sm ml-3' to={`/detail/${encodeURIComponent(movie.Title)}`}>Know More</Link>
    </div>

  )
}

export default Simplecard