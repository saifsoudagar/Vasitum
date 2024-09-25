import React from 'react';

function DashboardCard({ heading, num, text, textColor, bg }) { // Destructure props
  return (
    <div className="w-[204px] h-[136px] p-[12px] pl-[20px] gap-[16px] rounded-[10px] pt-3" style={{ backgroundColor: bg }}>
      <h1 className='font-poppins text-[18px] font-medium leading-[28px] text-left text-[#161E54]'>{heading}</h1>
      <div className='font-poppins text-[18px] my-3 font-medium leading-[28px] text-left text-[#161E54]'>{num}</div>
      <p className='font-roboto text-[16px] font-normal leading-[24px] text-left' style={{ color: textColor }}>{text}</p> 
    </div>
  );
}

export default DashboardCard;
