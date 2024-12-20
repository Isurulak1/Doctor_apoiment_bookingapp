import React, { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import user_img from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom';
import { BiMenu, BiWinkSmile } from 'react-icons/bi' 

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

  const handleStickyHeader = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=> {
    handleStickyHeader()

    return () => window.removeEventListener('scroll',handleStickyHeader)
})  

const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return (
    <header className="heading flex items-center bg-[url('./assets/images/mask.png')] bg-no-repeat bg-center bg-cover w-full h-[100px] leading-[100px]" ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>

          {/* ============ logo ============ */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* ================= menu ================  */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
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

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header