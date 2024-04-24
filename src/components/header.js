import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
          <div className='header-container'>
                <div className='header-left'>
                     <img src={logo} alt=''></img>
                </div>
                <div className='header-middle'>
                     <Link to='/' style={{textDecoration:"none"}}><p>Home</p></Link>
                     <Link to='/finddoctor' style={{textDecoration:"none"}}><p style={{color:"#3c833e"}}>Find Doctors</p></Link>
                     <Link to='/about' style={{textDecoration:"none"}}><p>About Us</p></Link>
                </div>
                <div className='header-right'>
                     <p className='login'>Login</p>
                     <p className='sign-up'>Sign-up</p>
                </div>
          </div>
    </div>
  )
}

export default Header