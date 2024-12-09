import React from 'react'

const Doctors = () => {
  return (
    <>
      <section className='bg-[#fff9ce]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctpor</h2>
            <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066f2] rounded-md flex item-center justify-between'>
              <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor placeholder:Search' />
            </div>
          
        </div>
      </section>
    </>
  )
}

export default Doctors