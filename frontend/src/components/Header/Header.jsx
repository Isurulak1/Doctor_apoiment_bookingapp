import React, { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import user_img from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi' 

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

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  

  return (
    <header className="heading flex items-center bg-[url('./assets/images/mask.png')] bg-no-repeat bg-center bg-cover w-full h-[100px] leading-[100px]">/
      <div className='container'>
        <div className='flex items-center justify-between'>

          {/* ============ logo ============ */}
          <div>
            <img className='ml-36' src={logo} alt="" />
          </div>

          {/* ================= menu ================  */}
          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) =>
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>

                </li>
              )}
            </ul>
          </div>

          {/* ===================nav right================ */}
          <div className='flex items-center gap-4'>

            <div className='hidden'>
              <Link to="/">
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                <img src={user_img} className='w-full rounded-full' alt="" />
              </figure>
              </Link>
            </div>
            
            <Link to='/login'>
            <button className=' bg-primaryColor text-sm py-2 px-6 text-white font-[600] h-[40px] flex items-center justify-center rounded-[50px] '>Login</button>
            </Link>

            <span className='md:hidden'>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header