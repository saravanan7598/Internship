import React from 'react'
import { FaStar } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { BiSolidPolygon } from "react-icons/bi";
import BodyRight from './BodyRight';
import BodyLeft from './BodyLeft';


function Body() {
  return (
    <div>
          <div className='body-overall-container'>
              <div className='body-container1'>
                    <div className='small-container1'>
                         <div className='profile' title='profile'>
                            <div className='photo'></div>
                            <div className='profile-text'>
                              <p className='para-1'>Dr. Bruce Willis <span><BiSolidPolygon className='icon-poly'/><ImCheckmark  className='icon-check'/></span></p>
                              <p className='para-2'>Gynecologist</p>
                              <p className='para-3'>4.2 <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/></p>
                            </div>
                          </div>
                          <div className='follower-content'>
                              <div>
                                <p>Followers</p>
                                <p className='para-follow'>850</p>
                              </div>
                              <div>
                                <p>Following</p>
                                <p className='para-follow'>18k</p>
                              </div>
                              <div>
                                <p>Posts</p>
                                <p className='para-follow'>250</p>
                              </div>
                          </div>
                          <div className='book-an-appoint'>
                              <p>Book an Appointment</p>
                          </div>
                    </div>
              </div>
 

              <div className='body--split'>
                  <BodyLeft/>
                  <BodyRight/>
              </div>
          </div>
    </div>
  )
}

export default Body