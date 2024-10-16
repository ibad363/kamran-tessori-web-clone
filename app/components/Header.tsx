import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    // <header className="bg-[#044e83] text-white p-2">
    //   <div className="container mx-auto flex justify-around items-center">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //     <img src="/assets/logo.png" alt="Logo" className="h-24 w-20" />
    //     </div>
    //       <h1 className="text-xl font-semibold text-[#b9d8f3]">Tuition Free Education Program on Latest Technologies</h1>

    //     {/* Navigation */}
    //     <nav>
    //       <ul className="flex space-x-8">
    //         <li><Link href="/"  className="hover:text-gray-300">Home</Link></li>
    //         <li><Link href="/" className="hover:text-gray-300"> Apply</Link></li>
    //         <li><Link href="/" className="hover:text-gray-300">Jobs</Link></li>
    //         <li><Link href="/" className="hover:text-gray-300">Result</Link></li>
    //         <li className="relative group">
    //           <Link href="" className="hover:text-gray-300">Courses</Link>
    //           {/* Dropdown */}
    //           <ul className="absolute hidden group-hover:block bg-blue-900 mt-2 rounded-md py-2 shadow-lg">
    //             <li><Link href="/" className="block px-4 py-2 hover:bg-[#044e83]">Course 1</Link></li><hr />
    //             <li><Link href="/" className="block px-4 py-2 hover:bg-[#044e83]">Course 2</Link></li><hr />
    //             <li><Link href="/" className="block px-4 py-2 hover:bg-[#044e83]">Course 3</Link></li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    // copy of header for practice
    <header className='relative flex justify-around items-center bg-[#044e83] text-white w-full h-24'>
        <div><img src="/assets/logo.png" alt="Logo" className='w-24 h-30 absolute left-10 top-6'/></div>
        <h1 className='font-bold text-2xl text-[#b9d8f3]'>Tuition Free Education Program on Latest Technologies</h1>
        <nav>
          <ul className='flex space-x-4 '>
            <Link href="/"><li className="hover:text-gray-300">Home</li></Link>
            <Link href="/"><li className="hover:text-gray-300">Apply</li></Link>
            <Link href="/"><li className="hover:text-gray-300">Jobs</li></Link>
            <Link href="/"><li className="hover:text-gray-300">Result</li></Link>
            <Link href="/"><li className="hover:text-gray-300">Courses</li></Link>
          </ul>
        </nav>
    </header>
  );
};

export default Header;