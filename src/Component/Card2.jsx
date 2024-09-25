import React from "react";


function Card2({heading , count ,img,num1,num2 , percent}) {
  return (
    <div className="w-[312px] h-[190px] flex absolute text-[#161E54] top-[322px]  p-[20px] gap-[40px] rounded-[10px] border border-gray-300">
      <div>
        <h1 className="font-poppins text-[18px] font-medium leading-[28px] text-left text-[#161E54]">
 {heading}
        </h1>
        <div className="font-poppins text-[48px] my-3 font-medium leading-[28px] mb-5 text-left text-[#161E54]">
          {count}
        </div>
        <p
          className={`font-roboto text-[12px] font-normal leading-[18px] text-left text-[#686868]`}
        >
         { num1} men{" "}
        </p>
        <p
          className={`font-roboto text-[12px] font-normal leading-[18px] text-left text-[#686868]`}
        >
          {num2} Women{" "}
        </p>
      </div>

      <div className="w-[115px] h-[121px] gap-[20px] ">
        <img className="w-[115px] my-5 h-[78px]" src={img} alt="" />
        <div className="w-[107px] ml-3 h-[24px] px-2.5 gap-2 rounded-[4px] bg-[#FFEFE7] #303030 font-roboto text-[12px] font-normal leading-[24px] text-left text-[#303030]">
          {percent}Per Month
        </div>
      </div>
    </div>
  );
}

export default Card2;
