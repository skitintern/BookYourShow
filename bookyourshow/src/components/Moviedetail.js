import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import "../style/allcss.css";
import axios from 'axios';
const Moviedetail =()=> {
 const {movie_name} = useParams();
  const[moviedetail ,setdetail]=useState([]);
  
  const getdetail=async()=>{
  
     try {
        const response =  await axios("/api/movie/a");
        const data = await response.data;
        const detail = data.filter((e)=>{
          return e.movie_name===`${movie_name}`;
        })
       setdetail(detail);
     } catch (error) {
        console.log("error!!")
     }
}

   

  useEffect(() => {
    getdetail()
  }, [])
  
      
  

  return (
    <div style={{padding:'40px'}}>
      {moviedetail.map((e,id)=>{
           return(
            <div key={id} className='moviecard'>
                <img src={`${e.movie_thumbnail}`}></img>

                <div className='rightdetail'>
                <h1>{e.movie_name}</h1>

                <h3>Rating: {e.rating}</h3>
                <p>Duration: {e.duration}</p>
                <p>Language: {e.language}</p>
                <h3>Cast</h3>
                <p style={{display:"flex",gap:"10px"}}>
                    {e.cast.map((i,id)=>{
                       return(
                        <p key={id}>{i}</p>
                       )
                    })}
                </p>

                </div>

                
                
            </div>
           )
      })}
      
    </div>
  )
}

export default  Moviedetail
