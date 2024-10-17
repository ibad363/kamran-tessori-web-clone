import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed flex top-0 left-0 z-50 justify-around items-center bg-[#044e83] text-white w-full h-20 p-2 max-md:flex-col'>
        <div><img src="/assets/logo.png" alt="Logo" className='w-24 h-30 absolute left-8 top-3 max-md:top-0'/></div>
        <h1 className='font-bold text-2xl text-[#b9d8f3]'>Tuition Free Education Program on Latest Technologies</h1>
        <nav>
          <ul className='flex space-x-9'>
            <li className='hover:text-gray-300'><Link href='/'>Home</Link></li>
            <li className='hover:text-gray-300'><Link href='/'>Apply</Link></li>
            <li className='hover:text-gray-300'><Link href='/'>Jobs</Link></li>
            <li className='hover:text-gray-300'><Link href='/'>Result</Link></li>
            <li className='relative group hover:text-gray-300'><span>Courses</span>
              <ul className='absolute hidden group-hover:block bg-[#044e83] text-white mt-0.5 rounded-md shadow-lg'>
                <li><Link href='/' className='block px-4 py-2 text-center'>Artificial Intelligence</Link></li><hr />
                <li><Link href='/' className='block px-4 py-2'>Web 3.0</Link></li><hr />
                <li><Link href='/' className='block px-4 py-2'>Metaverse</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;