// import React from 'react';

// function ActivityCard() {
//   return (
//     <div className='lg:w-[427px] lg:h-[258px] rounded-[10px] bg-[#161E54] md:w-[250px] md:h-[319px] md:top-[813px] md:left-[142px] md:pr-[10px]'>
//       <div className='w-full h-[48px] rounded-md rounded-b-none bg-[#1B204A] pl-[22px] py-[10px] font-poppins text-[18px] font-medium leading-[28px] text-left text-[#fff]'>
//         Recently Activity
//       </div>

//       <div className='w-[340px] h-[92px] gap-[6px] ml-[24px] mt-[30px] text-white md:w-[250px] md:h-[92px]'>
//         <p className='font-roboto text-[10px] font-light leading-[11.72px] text-left'>10.40 AM, Fri 10 Sept 2021</p>
//         <h3 className='font-roboto text-[18px] font-medium leading-[28px] my-2 text-left'>You Posted a New Job</h3>
//         <p className='font-roboto text-[14px] font-normal leading-[20px] text-left'>Kindly check the requirements and terms of work and make sure everything is right.</p>
//       </div>

//       <div className='font-roboto text-[14px] font-normal lg:items-center lg:justify-around lg:mr-[15px] lg:mt-20 leading-[21px] text-[#fff] text-left flex md:flex-col md:items-start md:ml-[24px] md:mt-10 md:gap-2'>
//         <span>Today you make 12 Activities</span>
//         <div className='w-[139px] h-[38px] p-[10px_16px] rounded-[4px] hover:bg-[#eb5353]  bg-[#FF5151] font-poppins text-[14px] font-medium leading-[21px] text-center text-white'>
//           See All Activity
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ActivityCard;
import React from "react";

function ActivityCard() {
  return (
    <div className="lg:w-[427px] lg:h-[258px] rounded-[10px] bg-[#161E54] md:h-[319px] md:w-[250px]">
      <div className="w-full h-[48px] rounded-md rounded-b-none bg-[#1B204A] pl-[22px] py-[10px] font-poppins text-[18px] font-medium leading-[28px] text-left text-[#fff]">
        Recently Activity
      </div>
      <div className="lg:w-[340px] lg:h-[92px] gap-[6px] ml-[24px] mt-[30px] text-white ">
        <p className="font-roboto text-[10px] font-light leading-[11.72px] text-left">
          10.40 AM, Fri 10 Sept 2021
        </p>{" "}
        <h3 className="font-roboto lg:text-[18px] md:text-[16px] font-medium leading-[28px] my-2 text-left">
          You Posted a New Job
        </h3>
        <p className="font-roboto text-[14px] font-normal leading-[20px] text-left">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>


      <div className='font-roboto text-[14px] mt-4 font-normal md:flex-col md:items-start md:ml-6 md:gap-3 lg:flex-row lg:gap-2 lg:items-center lg:justify-around leading-[21px] text-[#fff] text-left flex '>
        <span>Today you make 12 Activities</span>
         <div className='w-[139px] h-[38px] p-[10px_16px] rounded-[4px] hover:bg-[#eb5353]  bg-[#FF5151] font-poppins text-[14px] font-medium leading-[21px] text-center text-white'>
           See All Activity
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
