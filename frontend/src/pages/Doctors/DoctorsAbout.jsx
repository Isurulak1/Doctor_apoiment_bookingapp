import React from 'react'

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Muhibur Rahman
          </span>
        </h3>
        <p className='text_para'>
        The term "doctor" is used to refer to a person who has a doctorate, usually a PhD, or to a medical practitioner. In the past, the term was used to describe any learned person.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                23 June, 2008
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apple Hospital, New York.
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                23 June, 2008
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apple Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default DoctorsAbout