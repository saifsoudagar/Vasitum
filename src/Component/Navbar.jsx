import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { RiMessage2Fill } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon
import imgs from '../assets/photos';

const { img } = imgs;

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='lg:w-[1198px] md:w-[744px] lg:h-[90px] md:h-[62px] relative pl-[50px]'>
      <div className='lg:w-[1148px] md:w-[731px] h-full flex items-center justify-between border-b-[1px] border-b-[#F1F1F1]'>
        {/* Hamburger Menu - Visible on Medium Devices (md) */}
        <div className='md:block lg:hidden mr-[15px]'> 
          <button className='p-2'>
            <GiHamburgerMenu className='text-[24px] text-[#B2B2B2] md:block lg:hidden ' />
          </button>
        </div>

        <div className='relative w-[343px] lg:w-[744px]'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className='w-full lg:h-[44px] md:[36px] pl-[10px] pr-[40px] bg-[#FAFAFA] border border-[#E0E0E0] rounded-[4px] focus:outline-none'
            placeholder='Search'
          />
          {searchTerm ? (
            <div
              className='absolute right-[10px] top-[50%] transform -translate-y-[50%] text-[#B2B2B2] cursor-pointer'
              onClick={() => setSearchTerm('')}
            >
              &times; {/* Custom clear button */}
            </div>
          ) : (
            <LuSearch className='absolute right-[10px] top-[50%] transform -translate-y-[50%] text-[#B2B2B2]' />
          )}
        </div>

        <ul className='flex items-center mr-10 space-x-6 text-[#B2B2B2]'>
          <li className='relative'>
            <IoNotifications className='relative text-[20px]' />
            <div className='absolute top-0 left-[10px] w-[10px] h-[10px] rounded-full border border-[#FF5151] bg-[#FF5151]' />
          </li>
          <li><RiMessage2Fill className='text-[20px]' /></li>
          <li className='flex items-center'>
            <div className='flex items-center'>
              <img className='lg:w-[42px] lg:h-[42px] md:w-[35px] md:h-[35px] rounded-full' src={img} alt="Profile" />
              <div className='hidden lg:block ml-2 font-poppins text-[16px] font-medium leading-[24px] text-left text-[#161E54]'>Admirra John</div>
            </div>
            <IoIosArrowDown 
              className={`ml-1 mt-1 cursor-pointer text-[#737898] transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              onClick={toggleDropdown} 
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
