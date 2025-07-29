import React from 'react'
import "./Header.css"
import { hero_image } from "../../assets";
import {Link  } from "react-scroll";
import Achievement from '../Achievement'

const Header = () => {
  return (
    <header id='header'>
      
      <div className='container full__height'>
        <div className="row">
          <div className='column'>
            <h1 className='title'>
              Building Dreams,{" "}<br />
              <span className='highlight'>Creating Reality</span>
            </h1>
           <p className='text__muted description'> 
We’re committed to powering your home safely and efficiently.<br />With years of hands-on experience and a passion for precision,<br /> we provide reliable electrical services designed to meet the unique <br />needs of every household. From simple repairs to full installations,<br /> we bring expert care right to your doorstep.            </p>
            
            <div className='buttons__container'>
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn__primary">Contact Us</Link>
            </div>
          </div>
          <div className="column">
            <div className='image__container'>
              <img src={hero_image} alt="Electrician at work" />
            </div>
          </div>
        </div>
        <Achievement/>
      </div>

    </header>
  )
}

export default Header
