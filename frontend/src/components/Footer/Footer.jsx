import React from 'react'

import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    Icon : <AiFillYoutube />,
  },
  {
    path: "https://www.github.com/",
    Icon : <AiFillGithub />,
  },
  {
    path: "https://www.instergram.com/",
    Icon : <AiOutlineInstagram />,
  },
  {
    path: "https://www.linkedln.com/",
    Icon : <RiLinkedinFill />,
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
  }
  {
    path: "/contact",
    display: "Contact Us",
  }
]
const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer