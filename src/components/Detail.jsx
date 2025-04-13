import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Detail = () => {
  const [data, setdata] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const { id } = useParams(); // Grab the dynamic parameter from the URL

  useEffect(() => {
    const api = `https://www.omdbapi.com/?t=${id}&apikey=${apiKey}`;
    axios
      .get(api)
      .then((data) => {
        setdata(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const formattedMovieName = id.replace(/\s+/g, "_");

    const wikipedia = "https://en.wikipedia.org/wiki/" + formattedMovieName;

    setwiki(wikipedia);
  }, [id]);

  console.log(data);

  const [movies, setmovies] = useState([]);

  const [wiki, setwiki] = useState();
  const home = () => {
    navigate(-1);
  };

  //  console.log(wiki);

  // Use this id to fetch the specific movie details if needed
  return (
    <div className="h-screen flex items-center flex-row-reverse justify-center gap-20 w-full bg-red-700">
      <IoArrowBackOutline
        onClick={home}
        className="text-4xl text-white absolute left-28 top-16"
      />
      <div className="poster p-4 h-[500px] w-[380px] bg-black">
        <img className="h-full w-full object-cover" src={data.Poster} alt="" />
      </div>
      <div className="flex w-[40%] flex-col justify-start">
        <h1 className="text-5xl  font-semibold text-white capatalize mb-16">
          {data.Title}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Release Date: </span>
          {data.Released}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Imdb:</span>
          {data.Imdb}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Genre:</span>
          {data.Genre}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Runtime:</span>
          {data.Runtime}
        </h1>
        <h1 className=" text-white text-wrap">
          <span className="text-lg font-semibold mr-4">Plot Summary:</span>
          {data.Plot}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Cast:</span>
          {data.Cast}
        </h1>
        <h1 className=" text-white">
          <span className="text-lg font-semibold mr-4">Language:</span>
          {data.Language}
        </h1>
        <div className="mt-10">
          <a className="px-2 py-1 bg-red-900 rounded-md text-white" href={wiki}>
            Know More
          </a>
          <a
            className="px-2 py-1 bg-green-500 rounded-md ml-2 text-white"
            href={`https://bollyflix.beer/search/${decodeURIComponent(
              id
            ).replace(/\s+/g, "+")}`}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
