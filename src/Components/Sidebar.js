import React from 'react';
import { FaHome, FaChartPie, FaUtensils, FaStar, FaCog } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import { IoLogoAppleAr } from "react-icons/io5";
import './Sidebar.css';

const Sidebar = () => {
  return (
   <div className='col-2 sidebar-container'>
     <div className="sidebar-item1"><IoLogoAppleAr /></div>
       <div className="sidebar-item1"><FaHome /></div>
      <div className="sidebar-item"><FaChartPie /></div>
      <div className="sidebar-item"><FaUtensils /></div>
      <div className="sidebar-item"><FaStar /></div>
      <div className="sidebar-item"><FaCog /></div>
         <div className='logout'>
         <div className="sidebar-item mt-5"><CiLogout /></div>
         </div>
      

    
   </div>
  );
};

export default Sidebar;
