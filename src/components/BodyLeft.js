import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import specialize1 from '../Images/specialize1.jpg'
import specialize2 from '../Images/specialize2.jpg'
import specialize3 from '../Images/specialize3.jpg'
import specialize4 from '../Images/specialize4.jpg'
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useCollapse } from 'react-collapsed'
function BodyLeft() {
   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div>
        <div className='body2_overall-container'>
               <div className=' body2 body2-first'>
                     <div className='a-litle'>
                        <p>A Little About me</p>
                        <button><p>Follow</p><IoMdAdd className='add-icon'/></button>
                     </div>
                     <div className='body2-text'>
                         
                          <p>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. 
                           Completed my graduation in Gynaecologist Medicine from the 

                           {isExpanded ? '' : ( <a  {...getToggleProps()}><p><hr/></p><p>Read More</p></a>)}

                            <section {...getCollapseProps()}>Completed my graduation in Gynaecology Medicine from a prestigious institution. 
                           Over the years, I've gained extensive experience in [mention specific areas of expertise in gynecology, e.g., obstetrics, high-risk pregnancies, minimally invasive surgeries].
                            I'm passionate about providing exceptional care to women throughout all stages of their lives."</section></p> 
                            {!isExpanded ? '' : ( <a  {...getToggleProps()}><p><hr/></p><p>Read Less</p></a>)}
                           
                        
                     </div>
                     <div className='body2-language'>
                          <p className='para-of-lang'>Language Spoken</p>
                          <span>English</span>
                          <span>Hindi</span>
                          <span>Telugu</span>
                     </div>
                     <div className='body2-icons'>
                          <div><LuFacebook className='--icons'/></div>
                          <div><IoLogoInstagram className='--icons'/></div>
                          <div><AiOutlineYoutube className='--icons'/></div>
                          <div><LuTwitter className='--icons'/></div>
                     </div>
               </div>
                <div className='body2 body2-second'>
                      <div className='i-specialize-in'>
                          <p>I specialize In</p>
                      </div>
                      <div className='second-all-box'>
                          <div className='box box1'>
                                <img src={specialize1} alt=''></img>
                                <p>Women`s Health</p>
                             
                          </div>
                         
                          <div className='box box2'>
                                <img src={specialize2} alt=''></img>
                                   <p>Skin Care</p>
                          </div>
                          <div className='box box3'>
                                <img src={specialize3} alt=''></img>
                                <p>Immunity</p>
                          </div>
                          <div className='box box4'>
                                <img src={specialize4} alt=''></img>
                                <p>Hair Care</p>
                          </div>
                          
                      </div>
               </div>

                <div className='body2 body2-third'>
                      <div className='concerns-i-treat'>
                          <p>The Concerns I Treat</p>
                      </div>
                      <div className='concerns-text'>
                         <p>Skin Treatment</p>
                         <p>Pregnancy</p>
                         <p>Period Doubts</p>
                         <p>Endometriosis</p>
                         <p>Pelvic Pain</p>
                         <p>Ovarian Cysts</p>
                         <span>+5 More</span>
                      </div>
               </div>


               <div className='body2 body2-four'>
                     <div className='My-WorkExperience'>
                         <p>My Work Work Experience</p>
                     </div>
                     <div>
                         <h5>I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</h5>
                         <hr></hr>
                     </div>
                  <div className='under-down-all'>
                     <div className='medical-clinic'>
                        <div className='clinic'>
                           <MdOutlineMapsHomeWork className='homework-icon'/>
                           <div>
                            <p>Midtown Medical Clinic</p>  
                            <p style={{color:"rgba(51, 53, 72, 0.5)"}}>Senior doctor</p>
                           </div>
                        </div>
                        <p style={{color:"rgba(51, 53, 72, 0.5)"}}>2016-PRESENT</p>
                     </div>

                     <div className='medical-clinic'>
                        <div className='clinic'>
                           <MdOutlineMapsHomeWork className='homework-icon'/>
                           <div>
                            <p>Midtown Medical Clinic</p>  
                            <p style={{color:"rgba(51, 53, 72, 0.5)"}}>Senior doctor</p>
                           </div>
                        </div>
                        <p style={{color:"rgba(51, 53, 72, 0.5)"}}>2016-2015</p>
                     </div>
                  </div>
               </div>
                <div className='body2 body2-five'>
                     <div className='Featured-review'>
                          <p>Featured Reviews (102)</p>
                     </div>
                     <div className='all-reviews'>

                        <div className='reviews'>
                           <div className='review'>
                                 <div className='review-photo'> 
                                       <div className='photo'></div>
                                    <div>
                                       <p>Alicent Hightower</p>  
                                       <p style={{color:"rgba(51, 53, 72, 0.5)"}}>Consulted for Skin Care</p>
                                    </div>
                                 </div>
                              <p style={{color:"rgba(51, 53, 72, 0.5)"}}>20 January 2023</p>
                            </div>
                            <div className='review-down-text'>
                                 <div><FaStar  className='star-icon'/>  <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> </div>
                                 <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                            </div>

                         </div>

                         <div className='reviews'>
                           <div className='review'>
                                 <div className='review-photo'> 
                                       <div className='photo'></div>
                                    <div>
                                       <p>Alicent Hightower</p>  
                                       <p style={{color:"rgba(51, 53, 72, 0.5)"}}>Consulted for Pregnancy</p>
                                    </div>
                                 </div>
                              <p style={{color:"rgba(51, 53, 72, 0.5)"}}>20 January 2023</p>
                            </div>
                            <div className='review-down-text'>
                                 <div><FaStar  className='star-icon'/>  <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> <FaStar  className='star-icon'/> </div>
                                 <p>Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods</p>
                            </div>

                         </div>

                     </div>
                </div>
         
        </div>
    </div>
  )
}

export default BodyLeft