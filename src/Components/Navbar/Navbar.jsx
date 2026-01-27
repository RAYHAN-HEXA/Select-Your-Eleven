import React from 'react';
import logoImg from '../../assets/logo.png'
import iconImg from '../../assets/dollar-1.png'

const Navbar = ({availableBalance}) => {
    return (
      <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <img src={logoImg} alt="" />
  </div>
  <div className="flex items-center">
   <span className='mr-2' >{availableBalance}</span>
   <span className='mr-2'>coin</span>
   <img src={iconImg} alt="" />
  </div>
</div>
    );
};

export default Navbar;