import React from 'react'

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
          </div>
        </div>
      </div>
     </section> 
    </>
   </>
  )
}

export default Home