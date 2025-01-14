import React from 'react'
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Buton"

const Category2 = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* first col */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end transform transition duration-300 hover:scale-105 hover:bg-gray-500'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Feel</p>
                <p className='text-2xl font-semibold mb-[2px]'>Power</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>  Play Station</p>
                <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"} />
              </div>
            </div>
            <img src={Image1} alt="Laptop" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />
          </div>
          {/* second col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start transform transition duration-300 hover:scale-105 hover:bg-green-500'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Experience</p>
                <p className='text-2xl font-semibold mb-[2px]'>craze</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>VR</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"} />
              </div>
            </div>
            <img src={Image2} alt="Earphone" className='w-[320px] absolute bottom-0' />
          </div>
          {/* third col */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start transform transition duration-300 hover:scale-105 hover:bg-blue-500'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Feel</p>
                <p className='text-2xl font-semibold mb-[2px]'>the vibe</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"} />
              </div>
            </div>
            <img src={Image3} alt="Gadget" className='w-[200px] absolute bottom-0 right-0' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category2;
