import React from 'react'
import "./Navbar.css"
import { navTabs } from "../../data"
import { Link } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from '../Logo'


const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <Logo/>
      <div className='box nav__tabs'>
        <div className="icon__container cancel__btn">
          <FaTimes/>
        </div>
        {
          navTabs.map((tab, index) => (
            <Link
              to={tab.id}
              className='tab'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-60}
              key={index}
            >
              <p>{tab.name}</p>
            </Link>
          ))
        }
      </div>
      <div className='box buttons'>
        <Link to='contact' className='btn contact__btn'>Contact Us</Link>
      <div className="icon__container menu__btn">
        <RiMenu3Fill/>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
