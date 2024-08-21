import React from 'react'
import "../style/Home.css";
import './Listyourshow.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ListyourShow = () => {
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
      <div className="slider-container">
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
          <div>
            <img
              src="https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg"
              alt="Slide 4"
            />
          </div>
        </Slider>
      </div>
      <div className="event-page">
        <section className="host-section">
          <h2>What can you host?</h2>
          <p>
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>
          <div className="host-options">
            <div className="optt1">

            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/perf.png"
                alt="Performances"
              />
              <p>Performances</p>
            </div>
            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/experiencess.png"
                alt="Experiences"
              />
              <p>Experiences</p>
            </div>
            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/expositionss.png"
                alt="Expositions"
              />
              <p>Expositions</p>
            </div>
            </div>
            <div className="optt2">

            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/partiess.png"
                alt="Parties"
              />
              <p>Parties</p>
            </div>
            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/sport.png"
                alt="Sports"
              />
              <p>Sports</p>
            </div>
            <div className="host-option">
              <img
                src="https://assets-in.bmscdn.com/static/2021/06/conferencess.png"
                alt="Conferences"
              />
              <p>Conferences</p>
            </div>
          </div>
            </div>
          <button className="list-show-button">List your show</button>
        </section>

        <section className="services-section">
          <h2>What are the services we offer?</h2>
          <p>
            After successful collaborations with the best event organizers over
            the past decade and a half, we're well equipped to bring your vision
            to life.
          </p>
          <div className="service-options">
            <div className="service-option">
              <img src="path_to_icon" alt="Online Sales & Marketing" />
              <p>Online Sales & Marketing</p>
            </div>
            <div className="service-option">
              <img src="path_to_icon" alt="Pricing" />
              <p>Pricing</p>
            </div>
            <div className="service-option">
              <img src="path_to_icon" alt="Food & Beverages" />
              <p>Food & Beverages, Stalls and the works!</p>
            </div>
            <div className="service-option">
              <img src="path_to_icon" alt="On ground support" />
              <p>On ground support & gate entry management</p>
            </div>
            <div className="service-option">
              <img src="path_to_icon" alt="Reports" />
              <p>Reports & business insights</p>
            </div>
            <div className="service-option">
              <img src="path_to_icon" alt="POS" />
              <p>POS, RFID, Turnstiles & more...</p>
            </div>
          </div>
          <button className="list-show-button">List your show</button>
        </section>
      </div>
    </>
  );
}

export default ListyourShow
