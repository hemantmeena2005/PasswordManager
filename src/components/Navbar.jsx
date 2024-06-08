import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white w-full p-4 flex  justify-around items-center '>
        <div className="logo  font-bold text-2xl text-white  ">
            <span className='text-green-500' > &lt;</span>
            Pass
            <span className='text-green-500' >OP / &gt;</span>
            </div>
            <li className='flex justify-between gap-10 ' >
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>

    </nav>
  )
}

export default Navbar