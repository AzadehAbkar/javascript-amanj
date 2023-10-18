'use client'
import {useState,useEffect} from 'react'
 
import DashboardCtrl from './../dashboardCtrl/index';
import MidBanAll from '../dashboardForms/midBan';
import SlidersAll from './../dashboardForms/slieder/index';
 



const MainDashboard = () => {
const [contentChanger, SetContentChanger] = useState("MidBanner");
const [details,SetDetails]= useState(<MidBanAll/>);
useEffect(() => {
  if(contentChanger == 'MidBanner'){
    SetDetails(<MidBanAll/>)
  }else if(contentChanger=='slider'){
    SetDetails(<SlidersAll/>)
  }
}, [contentChanger]);
  

 






    return <div className="flex justify-between items-start gap-4 container mx-auto">
        <DashboardCtrl SetContentChanger={SetContentChanger} />
       <div className='w-full'>{details}</div>
      </div>;
};

export default MainDashboard;