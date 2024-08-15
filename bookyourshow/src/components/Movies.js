import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../style/allcss.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'


const Movies = () => {
   const [item,setitem] = useState([]);
   const[loading,setloading]= useState(false);
   const getitem =async(req,res)=>{
    try {
      setloading(false)
      const response = await axios("/api/movie/a");
        const ans = response.data;
     console.log(ans) 
     setitem(ans)
     setloading(true);

     
      console.log("data fetched");
      setloading(true);
      
    } catch (error) {
        console.log(`fetching error ${error}`)
    }
   }
   
   useEffect(() => {
     getitem();
   }, [])
   




  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
    <Navbar/>
    <div className='slider-container'>

    <Slider {...settings} className="slider">
          <div>
            <img
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-delhi-theatre-festival-season-5-0-2024-8-8-t-9-1-26.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1723195717138_webshowcase1240x300.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1723121550275_clwweb.jpg"
              alt="Slide 3"
              />
          </div>
        </Slider>
              </div>
      <div className='content'>
        <div className='leftcontent'>
            <h2>Filter</h2>
            <div className='options'>
                <div className='opt1'>Language</div>
                <div className='opt2'>Genres</div>
                <div className='opt3'>Format</div>
                
                <button>Browse by Cinemas</button>

            </div>
        </div>
        <div  className='rightcontent'>
          <h2>Movies In Jaipur</h2>

          <div className='filters'>
             <button> hindi </button>
             <button> english </button>
          </div>

          <div className='comming'>
            <h2>Coming Soon</h2>
            <a href=''>Explore Upcoming Movies  </a>
          </div>

        
      

     

        </div>

      </div>
    </>
  )
}

export default Movies
