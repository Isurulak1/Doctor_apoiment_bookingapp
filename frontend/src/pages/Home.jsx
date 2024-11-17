import React from 'react'

import heromimage from '../assets/images/hero-img01.png';
import heroimg2 from '../assets/images/hero-img02.png';
import heroimg3 from '../assets/images/hero-img03.png';

const Home = () => {
  return (
   <>
   {/* ==================== hero section =============== */}
    <>
     <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-center'>
          {/* ================ hero content ============== */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
    	          We help patients live a healthy, longer life.
              </h1>
              <p className='text_para'>
              We are committed to helping patients lead healthier, longer lives by providing personalized care, promoting wellness, and leveraging innovative solutions. Our focus is on empowering individuals to achieve their best health outcomes.
              </p>
              <button className='btn'>Request an Appointment</button>
            </div>

            {/* ================ hero counter ============== */}
            <div className='mt-[36px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[46px] lg:leading-[54px] font-[700] text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Year of Experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[46px] lg:leading-[54px] font-[700] text-headingColor'>
                  15+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Clinic Location</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[46px] lg:leading-[54px] font-[700] text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Patient Satisfaction</p>
              </div>


            </div>
          </div>

          {/* ====================hero cntent ================= */}
          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full' src={heromimage} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img className='w-full mb-[30px]' src={heroimg2} alt="" />
              <img className='w-full' src={heroimg3} alt="" />
            </div>
          </div>

        </div>
      </div>
     </section> 
    </>
   </>
  )
}

export default Home