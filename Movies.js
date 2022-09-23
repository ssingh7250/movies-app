import React,{useState,useEffect} from 'react'
//import cart from '../spider.jpg'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination';
const Movies = () => {

        const [movies,setMovies]=useState([]);
        const [page,setpage]=useState(1);
        const [hover,setHover]=useState('');
        const [favourate,setFavourates]=useState([]);

        function gohead()
    {
      setpage (page+1);

    }
    function godown()
    {
        if(page>1)
      setpage (page-1);

    }
    function show()
    {
        alert("add to favourate");
        

    }
        useEffect(function(){
            axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=8e98b72bb2a95a11e79342f5a0f0c2b0&page=${page}`)
            .then((res)=>{
                //console.table(res.data.results) 
                setMovies(res.data.results);
            })

        },[page])

        let add=(movie)=>{

            let newArray = [...favourate,movie]
            setFavourates([...newArray])
            console.log(newArray)
        }
    

       
    

      

  return (
    <>
        <div className='mt-8 text-center'>
        <div className='mt-8 text-3xl font-bold text-center '>Trending Movies </div>
        {
            movies.length == 0 ?
             <div className=' flex justify-center'>
                   <Oval
                    height="80"
                    width="80"  
                    radius="9"
                    color="grey"
                    secondaryColor='grey'
                    ariaLabel="loading"
                 
                /></div>:

        
        <div className='flex flex-wrap justify-center'>
            {
                movies.map((movie)=>(
            <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] bg-center bg-cover h-[50vh]
            w-[250px] justify-center rounded-xl flex items-end m-8 
            hover:scale-110
            ease-out duration-300
            relative
            `}
            onMouseEnter={()=>{
                setHover(movie.id)
               //console.log(movie.id)
            }}
            onMouseLeave={()=>
                setHover("")
            }
            >
                    {
                        hover == movie.id && <><div className='absolute top-2 right-2 p-2 bg-gray-800 
                        text-xl rounded-xl cursor-pointer' 
                        onClick={()=>add(movie)} 
                        onClick={()=>show()}
                            
                        >
                        😍
                    </div>

                        {/* <div className='absolute top-2 right-8 p-2 bg-gray-800 cursor-pointer' 
                        
                            
                        >
                            ❌
                        </div> */}
                        </>


                    }
                
            <div className='bg-gray-900 text-center py-2 w-full
                text-white rounded-b-xl'>{movie.title} </div>
             </div>
            
            ))}
          

        </div>
}
        </div>
        <Pagination proppage={page} gohead={gohead} godown={godown}/>
    </>
  )
}

export default Movies
