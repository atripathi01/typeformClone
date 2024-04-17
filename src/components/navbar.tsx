import React from 'react';
import Logo from '../images/logo.svg';
import Image from 'next/image';
import RevealAnimation from '@/utils/Animations';


const Navbar = () => {
  return (
    <RevealAnimation width='fit-content' durationValue={1}>
      <div className='my-5 mx-10'>
        <Image src={Logo} alt='GrowthX' width={100} />
      </div>
    </RevealAnimation>
  );
};

export default Navbar;
