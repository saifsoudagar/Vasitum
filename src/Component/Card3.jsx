import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsPinAngleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Card3() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [pinnedStates, setPinnedStates] = useState([false, false, false, false, false]); // Adjust for 5 announcements
  const [showAll, setShowAll] = useState(false); // State to manage showing all announcements

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePin = (index) => {
    const updatedPinnedStates = [...pinnedStates];
    updatedPinnedStates[index] = !updatedPinnedStates[index]; // Toggle the specific pin icon state
    setPinnedStates(updatedPinnedStates);
  };

  const announcements = [
    "Outing schedule for every department",
    "Team meeting rescheduled",
    "Office closure for holidays",
    "New project kickoff",
    "HR updates on benefits"
  ];

  // Calculate the height based on whether all announcements are shown
  const containerHeight = showAll ? "auto" : "200px";

  return (
    <div className="w-[640px] h-auto gap-0 rounded-[12px] border-b-none border border-[#E0E0E0] ">
      <div className="flex font-poppins text-[18px] font-medium leading-[28px] text-left text-[#161E54] mt-[16px] ml-[24px] justify-between mr-[24px]">
        Announcement{" "}
        <div className="w-[145px] h-[27px] p-[0px_6px] gap-0 rounded-[4px] border border-[#EFEFEF] flex justify-between font-roboto text-[12px] font-normal leading-[28px] items-center text-left text-[#686868]">
          Today, 13 Sep 2021{" "}
          <IoIosArrowDown
            className={`ml-1 mt-1 cursor-pointer text-[#737898] transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            onClick={toggleDropdown}
          />
        </div>
      </div>

      <div className={`overflow-y-auto transition-all duration-300`} style={{ height: containerHeight }}>
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="w-[600px] h-[68px] flex mx-auto mt-2 p-[12px_16px] gap-[95px] rounded-[6px] justify-between border border-[#E0E0E0] bg-[#FAFAFA]"
          >
            <div>
              <h2 className="font-poppins text-[16px] font-normal leading-[24px] text-left">
                {announcement}
              </h2>
              <p className="text-[#686868] font-poppins text-[10px] font-normal leading-[14px] text-left">
                5 Minutes ago
              </p>
            </div>
            <div className="flex items-center text-[#B2B2B2] gap-5">
              <BsPinAngleFill
                onClick={() => togglePin(index)} // Pass the index to togglePin
                className={`cursor-pointer ${pinnedStates[index] ? 'text-[#686868]' : 'text-[#B2B2B2]'}`}
              />
              <BsThreeDots />
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-[639px] h-[38px] top-[295px] hover:bg-[#FF5151] hover:text-[#fff] p-2 gap-2 rounded-b-[12px] border font-poppins text-sm font-medium leading-5 text-center border-gray-300 text-[#FF5151] cursor-pointer"
        onClick={() => setShowAll(!showAll)} // Toggle show all announcements
      >
        {showAll ? "Show Less" : "See All Announcements"}
      </div>
    </div>
  );
}

export default Card3;
