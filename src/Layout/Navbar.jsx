import React from 'react'
import './Navbar.scss'
import logo from '../assets/logo.jpg'
import sk from '../assets/sk.jpeg'
import Spinner from '../Components/spinner/spinner'
import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <div className="nav-wrap">
       
         <div className="logo">
               <img src={sk} alt="nopic" />
               <div className="spinner">
               <Spinner />
            </div>
            </div>
 
         <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="About">PROJECTS</Link>
            <Link to="Services">SERVCES</Link>
            <Link to="Contact">CONTACT</Link>
         </div>li
         <div className="nav-button">
            <button>Download Cv</button>
         </div>
      </div>
   )
}

export default Navbar