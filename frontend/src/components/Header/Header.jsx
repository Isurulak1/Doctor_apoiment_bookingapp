import React, {useEffect,useRef} from 'react'
import logo from '../../assets/images/logo.png'
import {NavLink, Link} from 'react-router-dom';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {
  return (
    <header >
      <div>
        <div>

          {/* ============ logo ============ */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* ================= menu ================  */}
          <div>
            <ul>
              {navLinks.map((link,index)=>(
                <li key={index}>
                  <NavLink
                   to={link.path}
                   className={navClass =>
                    navClass.isActive
                    ? "text-primaryColor text-[16px] leading-7 font-[600]"
                    : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                   }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header