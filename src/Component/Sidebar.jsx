import React, { useState } from 'react'; 
import photos from '../assets/photos';
import { MdDashboard, MdOutlineHeadsetMic } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiCirclesThreeFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

const { logo, logo1 } = photos; // Destructuring images

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { id: 1, icon: <MdDashboard />, label: "Dashboard" },
    { id: 2, icon: <FaUserFriends />, label: "Recruitment" },
    { id: 3, icon: <GrSchedule />, label: "Schedule" },
    { id: 4, icon: <FaPeopleGroup />, label: "Employee" },
    { id: 5, icon: <PiCirclesThreeFill />, label: "Department" }
  ];

  const otherItems = [
    { id: 6, icon: <MdOutlineHeadsetMic />, label: "Support" },
    { id: 7, icon: <IoMdSettings />, label: "Settings" }
  ];

  const handleItemClick = (id) => {
    setActiveItem(id); // Update the active item
  };

  const isActive = (id) => activeItem === id ? 'text-[#FF5151]' : 'text-[#686868]';

  return (
    <div className='font-poppins text-[16px] font-normal leading-[24px] text-left lg:w-[242px] lg:h-[1100px] md:w-[90px] md:h-[900px] py-[20px] px-0 gap-[39px] bg-[#FAFAFA] justify-center'>
      <div className='lg:flex lg:flex-col lg:items-center lg:justify-center md:flex md:flex-col md:items-center'>
        {/* Responsive logo switching */}
        <div className='h-[62px] w-[169px] md:h-[44px] md:w-[44px] flex items-center gap-2 justify-center'>
          <img className=' h-[44px] w-[44px]' src={logo1} alt="Logo1" />
          <h1 className='font-bold text-[24px] text-[#0A337A] md:hidden lg:block'>Vasitum</h1>
        </div>

        {/* Main menu */}
        <div className=' lg:flex lg:flex-col  lg:mt-10  mt-7 md:flex md:flex-col md:items-center'>
          <h4 className='font-roboto lg:text-[12px] md:text-[9px] font-normal mb-5 leading-[18px]  text-[#686868] '>MAIN MENU</h4>
          <ul className='font-roboto text-[16px] font-normal leading-[24px]  md:flex md:flex-col md:items-center'>
            {menuItems.map(item => (
              <li
                key={item.id}
                className={`flex items-center gap-5 mb-8 lg:justify-start lg:flex lg:flex-row cursor-pointer hover:text-[#FF5151] ${isActive(item.id)}  md:flex md:flex-col md:justify-center md:items-center`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                <span className="lg:block md:hidden">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other menu */}
        <div className=' lg:flex lg:flex-col  lg:mt-20 mt-20 md:flex md:flex-col md:items-center'>
          <h4 className='font-roboto lg:text-[12px] md:text-[9px] font-normal mb-5 leading-[18px]  text-[#686868] '>OTHER</h4>
          <ul className='font-roboto text-[16px] font-normal leading-[24px]  md:flex md:flex-col md:items-center'>
            {otherItems.map(item => (
              <li
                key={item.id}
                className={`flex items-center gap-5 lg:flex lg:flex-row mb-8 lg:justify-start  cursor-pointer hover:text-[#FF5151] ${isActive(item.id)}  md:flex md:flex-col md:justify-center md:items-center`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                <span className="lg:block md:hidden">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
