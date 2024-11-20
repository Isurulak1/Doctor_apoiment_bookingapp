import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCarding from '../../assets/images/about-card.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-center gap-[50px] lg:gap-[130px} xl:gap-0 flex-col lg:flex-row'>
                {/* ============= about image ============ */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCarding} alt="" />
                    </div>
                </div>

                {/* ====================== about content =========================== */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations best</h2>
                        <p className='text_para'>
                         Content is the foundation of digital communication, shaping how businesses and individuals interact with their audiences. From informative blog posts to engaging social media updates, content drives engagement, builds trust, and communicates value. High-quality content not only informs and entertains but also fosters deeper connections by addressing the needs and interests of its target audience.
                        </p>

                        <p className='text_para mt-[30px]'>
                         Content is the foundation of digital communication, shaping how businesses and individuals interact with their audiences. From informative blog posts to engaging social media updates, content drives engagement, builds trust, and communicates value. High-quality content not only informs and entertains but also fosters deeper connections by addressing the needs and interests of its target audience.
                        </p>

                        <Link to='/'>
                            <button className='btn'>Learn More</button>
                        </Link>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About