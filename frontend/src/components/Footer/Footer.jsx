import React from 'react'

import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    Icon : <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.github.com/",
    Icon : <AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path: "https://www.instergram.com/",
    Icon : <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path: "https://www.linkedln.com/",
    Icon : <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>,
  }
]

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
]

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request and Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Find a Opinion",
  }
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  }
]
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-2 font-[400] text-textColor'>Copyright @ {year} developed by isuru all right reversed.</p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link,index) => 
                 <Link
                  to={link.path}
                  key={index}
                  className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                 >
                 {link.Icon}
                 </Link>
              )}
            </div>
          </div>

          <div className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            <h2>Quick Links</h2>
            <ul>
              {quickLinks01.map((item,index) => (
                <li to={index} className='mb-4'>
                  <Link to={item.path}
                  className='text-[16px] leading-7 font-[400] text-textColor'
                  >{item.display}
                  </Link>
                </li>
              )

              )}
            </ul>
          </div>
          <div className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            <h2>I Want to:</h2>
            <ul>
              {quickLinks02.map((item,index) => (
                <li to={index} className='mb-4'>
                  <Link to={item.path}
                  className='text-[16px] leading-7 font-[400] text-textColor'
                  >{item.display}
                  </Link>
                </li>
              )

              )}
            </ul>
          </div>
          <div className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            <h2>Support</h2>
            <ul>
              {quickLinks03.map((item,index) => (
                <li to={index} className='mb-4'>
                  <Link to={item.path}
                  className='text-[16px] leading-7 font-[400] text-textColor'
                  >{item.display}
                  </Link>
                </li>
              )

              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer