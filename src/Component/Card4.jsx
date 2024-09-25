import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

function Card4() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedules, setSchedules] = useState([
    { title: "Default Schedule 1", time: "5 Minutes ago" },
    { title: "Default Schedule 2", time: "10 Minutes ago" },
  ]);
  const [prioritySchedules, setPrioritySchedules] = useState([ { title: "Default Schedule 1", time: "5 Minutes ago" },]); // State for priority schedules
  const [newSchedule, setNewSchedule] = useState(""); // State for new schedule input
  const [contextMenu, setContextMenu] = useState(null); // State for context menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddSchedule = () => {
    if (newSchedule) {
      setSchedules([...schedules, { title: newSchedule, time: "5 Minutes ago" }]);
      setNewSchedule(""); // Clear input
      setIsModalOpen(false); // Close modal
    }
  };

  const handleContextMenu = (e, index) => {
    e.preventDefault();
    setContextMenu({ index, x: e.pageX, y: e.pageY }); // Set context menu position
  };

  const handleAddToPriority = (index) => {
    const scheduleToMove = schedules[index];
    setPrioritySchedules([...prioritySchedules, scheduleToMove]); // Add to priority
    setSchedules(schedules.filter((_, i) => i !== index)); // Remove from others
    setContextMenu(null); // Close context menu
  };

  return (
    <div className="lg:w-[427px] md:w-[375px] md:h-[343px] lg:h-[424px] gap-0 rounded-[12px] border-b-none border border-[#E0E0E0] ">
      <div className="flex font-poppins text-[18px] font-medium leading-[28px] text-left text-[#161E54] mt-[16px] ml-[21px] justify-between mr-[24px]">
        Upcoming Schedule
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

      {/* Priority Section */}
      <div className="ml-[21px] mt-4 ">
        <h4 className="font-roboto text-[12px] font-normal leading-[18px] ml-[1px] text-left text-[#686868]">
          Priority
        </h4>
        <div className="overflow-y-auto max-h-[120px] hide-scrollbar">
          {prioritySchedules.map((schedule, index) => (
            <div key={index} className="lg:w-[387px] lg:h-[68px] md:w-[340px] md:h-[64px] flex mt-2 p-[12px_16px] gap-[95px] rounded-[6px] justify-between border border-[#E0E0E0] bg-[#FAFAFA]">
              <div>
                <h2 className="font-poppins text-[16px] font-normal leading-[24px] text-left">
                  {schedule.title}
                </h2>
                <p className="text-[#686868] font-poppins text-[10px] font-normal leading-[14px] text-left">
                  {schedule.time}
                </p>
              </div>
              <div className="flex items-center text-[#B2B2B2] gap-5">
                <BsThreeDots />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Others Section */}
      <div className="ml-[21px] mt-4 ">
        <h4 className="font-roboto text-[12px] font-normal leading-[18px] ml-[1px] text-left text-[#686868]">
          Others
        </h4>
        <div className="overflow-y-auto max-h-[120px] hide-scrollbar">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="lg:w-[387px] lg:h-[68px] md:w-[340px] md:h-[64px] flex mt-2 p-[12px_16px] gap-[95px] rounded-[6px] justify-between border border-[#E0E0E0] bg-[#FAFAFA]"
              onContextMenu={(e) => handleContextMenu(e, index)} // Handle right-click
            >
              <div>
                <h2 className="font-poppins text-[16px] font-normal leading-[24px] text-left">
                  {schedule.title}
                </h2>
                <p className="text-[#686868] font-poppins text-[10px] font-normal leading-[14px] text-left">
                  {schedule.time}
                </p>
              </div>
              <div className="flex items-center text-[#B2B2B2] gap-5">
                <BsThreeDots onClick={() => handleContextMenu(event, index)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create New Schedule Button */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="lg:w-[427px] lg:h-[39px] md:w-[374px]  md:h-[38px] top-[295px] hover:bg-[#FF5151] hover:text-[#fff] p-2 gap-2 rounded-b-[12px] border font-poppins text-sm font-medium leading-5 text-center border-gray-300 text-[#FF5151] cursor-pointer"
      >
        Create a New Schedule
      </div>

      {/* Modal for New Schedule */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 w-1/3">
            <h2 className="font-poppins text-xl mb-4">Create New Schedule</h2>
            <input
              type="text"
              className="border rounded w-full p-2"
              placeholder="Enter schedule title"
              value={newSchedule}
              onChange={(e) => setNewSchedule(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddSchedule}
                className="bg-blue-500 text-white rounded px-4 py-2"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black rounded px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            onClick={() => handleAddToPriority(contextMenu.index)}
            className="block px-4 py-2 text-left hover:bg-gray-100"
          >
            Add to Priority
          </button>
        </div>
      )}
    </div>
  );
}

export default Card4;
