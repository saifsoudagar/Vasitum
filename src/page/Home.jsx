import React from "react";
import Navbar from "../Component/Navbar";
import DashboardCard from '../Component/DashboradCard'; // Corrected import name
import Card2 from "../Component/Card2";
import photos from '../assets/photos';
import Card3 from "../Component/Card3";
import ActivityCard from "../Component/ActivityCard"
import Card4 from "../Component/Card4";
import Sidebar from "../Component/Sidebar";

const { img1, img2 } = photos; // Destructuring images

function Home() {
  return (
    <div className="w-auto h-[900px] flex">
<div><Sidebar/></div>
<div>

      <Navbar />

      <div className="flex lg:flex-row md:flex-col">
        <div>
      <h2 className="font-poppins text-[24px] font-medium leading-[42px] text-left text-[#161E54] mb-3 ml-[50px] mt-5">
          Dashboard
        </h2>
        <div className="ml-[50px] mt-5 flex space-x-8">
      <div className="">
        {/* Dashboard Cards Section */}
        <div className="flex space-x-4 mb-4"> {/* Added margin-bottom for spacing */}
          <DashboardCard 
            heading={'Available Position'} 
            num={24} 
            text={'4 Urgently needed'} 
            textColor={'#FF5151'} 
            bg={'#FFEFE7'} 
          /> 
          <DashboardCard 
            heading={'Job Open'} 
            num={10} 
            text={'4 Active hiring'} 
            textColor={'#3786F1'} 
            bg={'#E8F0FB'} 
          /> 
          <DashboardCard 
            heading={'New Employees'} 
            num={24} 
            text={'4 Departments'} // Corrected from '4 Department'
            textColor={'#EE61CF'} 
            bg={'#FDEBF9'} 
          />
        </div>

        {/* Card2 Section */}
        <div className="flex space-x-[330px] mt-[30px]"> {/* Added spacing between Card2 elements */}
          <Card2 
            heading={'Total Employees'} 
            num1={14} 
            num2={120} 
            percent={'+2%'} 
            count={240} 
            img={img1}
          />
          <Card2 
            heading={'Talent Request'} 
            num1={6} 
            num2={10} 
            percent={'+5%'} 
            count={16} 
            img={img2}
          />
        </div>
        <div className="mt-[220px]">
        <Card3/></div>
      </div>
      </div>
</div>
<div className="mr-5 md:ml-[50px] md:mt-[10px] flex lg:flex-col md:flex-row md:gap-[20px]">
  <div className="md:mt-[30px]">
<ActivityCard/></div>
<div className="md:mt-[30px] mt-[68px]">
<Card4 /></div>

</div>

</div>
</div>
    </div>
  );
}

export default Home;
