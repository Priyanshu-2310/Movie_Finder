// import React from 'react'
import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import Movies from "./Movies";
import { useForm } from "react-hook-form";
import axios from "axios";


const Home = () => {
  const [count, setCount] = useState(0);
  const {register ,handleSubmit, reset} = useForm()
  const [moviedata, setmoviedata] = useState()
  const apiKey = import.meta.env.VITE_API_KEY;
  const [moviena, setmoviena] = useState()


  const submit=(data)=>{
    const {moviename} = data;
    setmoviena(moviename)
    reset()
    setCount(1)
  }

  useEffect(()=>{
    const api = `https://www.omdbapi.com/?t=${moviena}&apikey=${apiKey}`;
   axios.get(api).then((data)=>{
    setmoviedata(data)
    console.log(moviedata);
    
   }).catch((err)=>{
    console.log(err);
   })
  },[moviena])


  return (
    <div className="h-screen w-full bg-red-800 flex flex-col">
      <h1 className="text-5xl text-center pt-6 font-semibold text-white">
        Movie Finder
      </h1>
      <div className="w-full flex justify-center mt-5">
        <form onSubmit={handleSubmit(submit)}>
        <input {...register('moviename')} className="w-[380px] px-3 py-2 md:w-[800px]" type="text" placeholder="Search" />
        <button  className="absolute right-7 mt-2 lg:right-[400px]" type="submit">
          <FaSearch type="submit" className="text-2xl text-black" />
        </button>
        </form>
      </div>

      <Movies searched={moviedata} count={count}/>
    </div>
  );
};

export default Home;
