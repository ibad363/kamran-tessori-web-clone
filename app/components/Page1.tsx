// import { groupEnd } from 'console'
// import { url } from 'inspector'
// import React from 'react'

// const Page1 = () => {
//   return (
//     <div className='relative'>
//         {/* bgimage */}
//         <img src="/assets/img7.jpg" alt="BackgroundImage" className='w-full h-full'/>
//         {/* Overlay */}
//       <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
//       {/* main */}
//         <div className='flex text-black'>
//             <h1>Governor Sindh</h1>
//             <h3>Kamran Khan Tessori</h3>
//             <h1>Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)</h1>
//         </div>
//     </div>
//   )
// }

// export default Page1


import Image from 'next/image';
import bgImage from '../public/your-image.jpg'; // Background image in the public folder
import sideImage from '../public/side-image.jpg'; // Side image in the public folder

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-between px-8">
      {/* Left Side Content */}
      <div className="flex flex-col justify-center w-1/2 text-white">
        {/* Top Banner Text */}
        <div className="bg-[#034569] text-sm p-2 mb-4 w-full">
          <p>Tuition Free Education Program on Latest Technologies</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold">Governor Sindh</h1>
        <h2 className="text-xl mt-2">Kamran Khan Tessori</h2>

        {/* Subheading */}
        <p className="text-lg mt-4 font-bold text-cyan-400">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </p>
        <p className="text-md mt-2">Earn up to $5,000 / month</p>
        <p className="text-md mt-2">Now admissions are open in Hyderabad</p>

        {/* Apply Button */}
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg font-bold">
          Apply Now
        </button>

        {/* Applications Info */}
        <p className="text-sm mt-2">562,143 Accepted Applications</p>
      </div>

      {/* Right Side Image */}
      <div className="relative w-1/2 h-full">
        <Image
          src='/assets/img6.png'
          alt="Side Image"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      </div>

      {/* Background Image */}
      <Image
        src="/assets/img7.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80 z-0"
      />
    </div>
  );
}

