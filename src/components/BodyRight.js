import React, { useEffect, useRef, useState } from 'react'
import { ImCheckmark } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
import { MdOutlineCalendarMonth  } from "react-icons/md";
import { LuChevronLeftCircle } from "react-icons/lu";
import { LuChevronRightCircle } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function BodyRight() {
  const sliderRef=useRef()
   var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    
  const sliderRight=()=>
  {
    sliderRef.current.slickNext();
  };
  const sliderLeft=()=>
  {
    sliderRef.current.slickPrev();
  };
 
  return (
    <div>
         <div className='bodyright-container'>
                <div className='appointment-fee'>
                     <p>Appointment Fee</p>
                     <p style={{color:" rgb(67, 114, 68)"}}>₹699.00</p>
                </div>


                <div className='select-your-session'>
                     <p>Select your mode of session <hr/></p>
               </div>


               <div className='session-box'>
                           <div className='sbox sbox1' >
                              <div>
                                  <p>In-Clinic</p>
                                  <div><FaCircle  className='icon-circle' /><ImCheckmark  className='icon-check2'/></div> 
                              </div>
                              <p className='sbox-min'>45 Mins</p>
                           </div>
                           <div className='sbox sbox2 active'>
                              <div>
                                    <p>Video</p>
                                    <div><FaCircle  className='icon-circle' /><ImCheckmark  className='icon-check2'/></div>
                              </div>
                              <p className='sbox-min'>45 Mins</p>
                           </div>
                           <div className='sbox sbox2'>
                              <div>
                                   <p>Chat</p>
                                   <div><FaCircle  className='icon-circle' /><ImCheckmark  className='icon-check2'/></div>
                              </div>
                              <p  className='sbox-min'>10 Mins</p>
                           </div>
               </div>


               <div className='pick-time-slot'>
                  <p>Pick a time slot <hr/></p>
                  <button><MdOutlineCalendarMonth  className='icon-calender'/><input type='date'></input></button> 
               </div>
  
               <div className='pick-time-box'>
                      <div><LuChevronLeftCircle className='icon-sider left-side'  onClick={sliderLeft}/></div>
                      <div><LuChevronRightCircle className='icon-sider right-side' onClick={sliderRight}/></div>
                          <div className="slider-container">
                                 <Slider {...settings} ref={sliderRef} >
                                 <div className='pbox active'>  
                                    <p>Mon, 10 Oct</p>
                                    <p className='pick-slot-txt'>10 slots</p>
                                 </div>  
                                 <div className='pbox' >
                                      <p>Tue, 11 Oct</p>
                                      <p className='pick-slot-txt' style={{color:"red"}}>02 slots</p>
                                 </div>
                                 <div className='pbox ' >
                                    <p>Wed, 12 Oct</p>
                                    <p className='pick-slot-txt' style={{color:"orange"}}>05 slots</p>
                                 </div> 
                                 <div className='pbox ' >
                                    <p>Wed, 12 Oct</p>
                                    <p className='pick-slot-txt' style={{color:"orange"}}>05 slots</p>
                                 </div>
                                 <div className='pbox ' >
                                    <p>Wed, 12 Oct</p>
                                    <p className='pick-slot-txt' style={{color:"orange"}}>05 slots</p>
                                 </div>
                                 <div className='pbox ' >
                                    <p>Wed, 12 Oct</p>
                                    <p className='pick-slot-txt' style={{color:"orange"}}>05 slots</p>
                                 </div>
                                </Slider>
                           </div>
                      
               </div>

               <div className='Morning-evening'>
                     <div className='morning'>
                          <p className='me-headline'>Morning</p>
                          <div className='mrng'>
                              <div className='mrngbox'><p>9.00 AM</p></div>
                              <div className='mrngbox'><p>9.30 AM</p></div>
                              <div className='mrngbox'><p>10.00 AM</p></div>
                              <div className='mrngbox'><p>10.15 AM</p></div>
                              <div className='mrngbox'><p>10.45 AM</p></div>
                              <div className='mrngbox active-3'><p>10.00 AM</p></div>
                          </div>
                     </div>
                     <div className='evening'>
                          <p className='me-headline'>Evening</p>
                          <div className='evng'>
                              <div className='evngbox'><p>4.00 PM</p></div>
                              <div className='evngbox'><p>4.15 PM</p></div>
                              <div className='evngbox'><p>4.30 PM</p></div>
                              <div className='evngbox'><p>4.45 PM</p></div>
                              <div className='evngbox'><p>5.15 PM</p></div>                     
                          </div>
                     </div>
               </div>

               <div className='makes-an-appointment'>
                  <p>Make An Appointment</p>
               </div>
            







                
         </div>
    </div>
  )
}

export default BodyRight