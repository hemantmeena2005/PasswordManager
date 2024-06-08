import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white w-full p-4 flex flex-wrap justify-between items-center'>
      <div className="logo font-bold text-2xl text-white">
        <span className='text-green-500'> &lt;</span>
        Pass
        <span className='text-green-500'>OP / &gt;</span>
      </div>
      <ul className='flex flex-wrap justify-around gap-4'>
        <li><a className='hover:font-bold' href="#">Home</a></li>
        <li><a className='hover:font-bold' href="#">About</a></li>
        <li><a className='hover:font-bold' href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
