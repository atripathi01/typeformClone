import React from 'react';
import Navbar from './navbar';

type Props = {
  children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className='h-screen'>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
