import React,{useState,useEffect} from 'react'
//import banner_img from'../spider.jpg'
import axios from 'axios';

const Banner = () => {

  const [movies,setMovies]=useState([]);

  useEffect(function(){
      axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=8e98b72bb2a95a11e79342f5a0f0c2b0&page=2 ")
      .then((res)=>{
          console.table(res.data.results) 
          setMovies(res.data.results[8]);
      })

  })

  return (
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] bg-center bg-cover h-[60vh] flex items-end justify-center`}>

        {/* <img src={banner_img}></img> */}
      <div className='text-3xl text-white bg-gray-900 w-full p-4 flex justify-center bg-opacity-50'>{movies.title}</div>
    </div>
  )
}

export default Banner
