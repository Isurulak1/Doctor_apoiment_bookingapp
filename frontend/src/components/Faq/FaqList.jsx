import React from 'react';
import { faqs } from '../../assets/data/faqs';  // Assuming this imports an array of FAQ data
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((item, index) => (
        <FaqItem 
          key={index}  // Ensure you add a unique key prop here
          item={item} 
          faq={index} 
        />
      ))}
    </ul>
  );
};

export default FaqList;