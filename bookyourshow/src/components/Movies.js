import React from 'react'
import Navbar from './Navbar'
import '../style/allcss.css'

const Movies = () => {
  return (
    <>
    <Navbar/>
      heyy i am Movies pages
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
        <div className='rightcontent'></div>

      </div>
    </>
  )
}

export default Movies
