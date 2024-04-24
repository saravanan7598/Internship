import React, { useRef, useState } from 'react'
import Header from './header'
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import education from '../Images/education.png'
import comment from '../Images/comment 1.png'
import frame from '../Images/Frame.png'
import { FaStar } from "react-icons/fa";




function FIndDoctorpage() {
    const[isActive,setIsActive]=useState(false);
    const[selected,setSeleted]=useState("Select Location");
    const option=['Coimbatore','Chennai' ,'Bangalore','Dharmapuri','Erode','Tirunelveli','Vellore','Dindigul','Madurai']
    const [list,setlist]=useState([
        {id:1,name:"Hair care"},
        {  id:2,name:"Female"},
        {  id:3,name:"Rs.0-Rs.500"},
        {  id:4,name:"Hindi"},


    ])
    const remove = (id) =>
    {
       const newlist = list.filter((l)=>l.id !==id)
       setlist(newlist);
    }

 
  return (
    <div>
        <div>
           <Header className="header-index"/>
        </div>
         <div className='find-dr-banner'>
             <div className='ban-circle'>
                <div className='banner-cirle circle1'></div>
                <div className='banner-cirle  circle2'></div>
                <div className='banner-cirle  circle3'></div>
                <div className='banner-cirle  circle4'></div>
             </div>
             <div className='banner2-text'>
              
                <p className='b-txt'>Find Expert Doctors For An In-Clinic Session Here</p>
                <div className='input-flex'>
                   <div className='drop-all'>
                       <div className='drop-down' onClick={(e)=>setIsActive(!isActive)}>
                          <div>
                            <MdLocationOn className='icon-location'/>
                            <p>{selected}</p>
                            <IoIosArrowDown className='icon-down-arrow1'/>
                          </div>
                      </div>
                      {isActive && (
                        <div className='drop-down-content'>
                            {option.map(option =>( <p 
                                                      onClick={(e)=> {setSeleted(option) 
                                                      setIsActive(false)}}
                                                   >{option}</p>))}
                    </div>
                      )}
                       
                    </div>
                  <div className='input-box'><input type='text' placeholder='eg.Doctor , Specialisation, clinic name'></input><FaArrowRight className='icon-right-arrow'/> </div>
                </div>
             </div>
         </div>

         <div className='filters'>
             <div><p>Expertise</p>  <IoIosArrowDown className='icon-down-arrow'/></div>
             <div><p>Gender</p>  <IoIosArrowDown className='icon-down-arrow'/></div>
             <div><p>Fees</p>  <IoIosArrowDown className='icon-down-arrow'/></div>
             <div><p>Languages</p>  <IoIosArrowDown className='icon-down-arrow'/></div>
             <div style={{backgroundColor:"rgba(220, 238, 220, 1)"}}><p style={{color:"rgba(58, 100, 59, 1)"}}>All filters</p>  <IoIosArrowDown className='icon-down-arrow'/></div>
         </div> 

         <div className='remoe-items'>
               {list.map((todo)=>{
                return <div key={todo.id}><p>{todo.name}</p><RxCross2 className='icon-cross' onClick={()=>remove(todo.id)}/></div>
               })};

         </div>

         <div className='card-contaier'>

               <div className='card card1'>
                    <div className='card-photo'>
                        <div><p>4.5<FaStar  className='star-icon'/> </p></div>
                    </div>
                    <div className='card-txt'>
                        <p className='profile-name'>Dr.Prerna Narang</p>
                        <div className='card-subtxt'>
                             <div><img src={frame}/><p>Male-Female Infertility</p></div>
                             <div><img src={education}/><p>7 years of Experience</p></div>
                             <div><img src={comment}/><p>Speaks: English,Hindi,Marathi</p></div>
                        </div>
                        <div className='card-flex1'>
                            <div className='consultation'>
                                <p>Video Consultation</p>
                                <p className='cons-rate'>₹800</p>
                            </div>
                            <div className='consultation'>
                                <p>Chat  Consultation</p>
                                <p className='cons-rate'>Free</p>
                            </div>
                        </div>
                        <div className='view-profile'><p>View Profile</p></div>
                        <div className='Book-a-cons'><p>Book a consultation</p></div>
                    </div>
               </div>


               <div className='card card2'>
                    <div className='card-photo'>
                        <div><p>4.5<FaStar  className='star-icon'/> </p></div>
                    </div>
                    <div className='card-txt'>
                        <p className='profile-name'>Dr.Prerna Narang</p>
                        <div className='card-subtxt'>
                             <div><img src={frame}/><p>Male-Female Infertility</p></div>
                             <div><img src={education}/><p>7 years of Experience</p></div>
                             <div><img src={comment}/><p>Speaks: English,Hindi,Marathi</p></div>
                        </div>
                        <div className='card-flex1'>
                            <div className='consultation'>
                                <p>Video Consultation</p>
                                <p className='cons-rate'>₹800</p>
                            </div>
                            <div className='consultation'>
                                <p>Chat  Consultation</p>
                                <p className='cons-rate'>Free</p>
                            </div>
                        </div>
                        <div className='view-profile'><p>View Profile</p></div>
                        <div className='Book-a-cons'><p>Book a consultation</p></div>
                    </div>
               </div>


               <div className='card card3'>
                    <div className='card-photo'>
                        <div><p>4.5<FaStar  className='star-icon'/> </p></div>
                    </div>
                    <div className='card-txt'>
                        <p className='profile-name'>Dr.Prerna Narang</p>
                        <div className='card-subtxt'>
                             <div><img src={frame}/><p>Male-Female Infertility</p></div>
                             <div><img src={education}/><p>7 years of Experience</p></div>
                             <div><img src={comment}/><p>Speaks: English,Hindi,Marathi</p></div>
                        </div>
                        <div className='card-flex1'>
                            <div className='consultation'>
                                <p>Video Consultation</p>
                                <p className='cons-rate'>₹800</p>
                            </div>
                            <div className='consultation'>
                                <p>Chat  Consultation</p>
                                <p className='cons-rate'>Free</p>
                            </div>
                        </div>
                        <div className='view-profile'><p>View Profile</p></div>
                        <div className='Book-a-cons'><p>Book a consultation</p></div>
                    </div>
               </div>


         </div>
    </div>
  )
}

export default FIndDoctorpage