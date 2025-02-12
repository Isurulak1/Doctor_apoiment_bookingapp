import React from 'react'
import { formatDate } from '../../utils/FormateDate'

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
              {formatDate("08-13-2014")}
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
                {formatDate("12-04-2010")}
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

      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
        <li className='p-4 rounded bg-[#fff9ea]'>
          <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate("08-13-2010")} - {formatDate("08-13-2014")}
          </span>
          <p className='text-[16px] leading-6 font-medium text-textColor'>
            Sr. Surgeon
          </p>
          <p className='text-[14px] leading-6 font-medium text-textColor'>
            New Apolo Hospital, New York.
          </p>
        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
          <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate("08-13-2010")} - {formatDate("08-13-2014")}
          </span>
          <p className='text-[16px] leading-6 font-medium text-textColor'>
            Sr. Surgeon
          </p>
          <p className='text-[14px] leading-6 font-medium text-textColor'>
            New Apolo Hospital, New York.
          </p>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorsAbout