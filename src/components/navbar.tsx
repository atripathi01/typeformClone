import React from 'react';
import RevealAnimation from '@/utils/Animations';


const Navbar = () => {
  return (
    <RevealAnimation width='fit-content' durationValue={1}>
      <div className='my-5 mx-10'>
        {/* <Image src={Logo} alt='GrowthX' width={100} /> */}
        <h3 className='text-3xl text-blue-400'>Typeform Clone</h3>
      </div>
    </RevealAnimation>
  );
};

export default Navbar;
