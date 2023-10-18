'use client'



import React, {useEffect, useState} from 'react';


import AllMid from './allMid';
import CreateMid from './createMid';
import EditMid from "@/components/dashboard/dashboardForms/midBan/EditMid";



const MidBanAll = () => {

    const [editMidCtrl ,SetEditMidCtrl] = useState('')
    const [randNumber ,SetRandNumber] = useState(1)
    const [det,SetDet]= useState(<AllMid SetRandNumber={SetRandNumber} SetEditMidCtrl={SetEditMidCtrl}/>);


    useEffect(() => {
        if(editMidCtrl != ''){
            SetDet(<EditMid midBannerId={editMidCtrl} />)
        }
    }, [randNumber]);

    return (
        <div className='flex flex-col gap-8'>
            <section className='flex justify-between items-center gap-2'>
                <h1 className='text-blue-500 text-lg'>بنرهای تبلیغاتی</h1>
                <div className='flex justify-end items-center gap-2 '>
                <div onClick={()=>SetDet(<AllMid SetEditMidCtrl={SetEditMidCtrl} SetRandNumber={SetRandNumber}/>)}  className='px-3 py-1  rounded-md bg-indigo-600 text-white transition-all duration-500  hover:bg-orange-500'>همه</div>
                <div onClick={()=>SetDet(<CreateMid/>)} className='px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500'>ایجاد بنر</div>
                 </div>

            </section>
            <section>
                {
                    det
                }
            </section>
        </div>
    );
};

export default MidBanAll;