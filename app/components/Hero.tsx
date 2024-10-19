import Image from "next/image"

function Hero() {
  return (
    <div className="flex" >
      <div className="box1 relative  w-1/2 h-[90vh] pl-16 mt-4">
        <h1 className='text-6xl font-semibold mt-16 text-[#044e83]'>Governor Sindh</h1>
        <h3 className='text-[40px] font-medium pl-1 mt-4 text-[#044e83]'>Kamran Khan Tessori</h3>
        <h1 className='text-[#2eb6e8] text-5xl font-semibold mt-4 mr-16'>Certified Cloud Applied Generative AI Engineer (GenEng)</h1>
        <h4 className="text-[#044e83] font-bold text-4xl mt-5">Earn up to $5,000 / month</h4>
        <h4 className="text-[#044e83] font-bold text-4xl mt-5 mr-10">Now admissions are open in Hyderabad</h4>
        <div className="flex mt-10">
          <button className="rounded-md hover:bg-[#3a759f] bg-[#044e83] py-4 px-8 font-bold text-3xl text-white">Apply Now</button>
          <div className="ml-16 text-[#044e83] text-center">
            <h1 className="font-extrabold bold text-4xl">562,143</h1>
            <p className="text-xl">Accepted Applications</p>
          </div>
        </div>
      </div>
      <div className="box2 relative w-1/2 h-[90vh] ">
        <Image
          src="/assets/img6.png"
          alt="Governor Sindh"
          width={500}
          height={500}
          className="object-contain overflow-auto w-full mt-0 h-[100vh]"
        />
      </div>
  
    </div>
  )
}

export default Hero