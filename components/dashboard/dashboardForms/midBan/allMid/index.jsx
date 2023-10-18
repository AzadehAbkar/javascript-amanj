'use client'

import {useState,useEffect} from "react";


import React from 'react';
import axios from "axios";
import Box from "./Box";
import Image from "next/image";


const AllMid = ({SetEditMidCtrl,SetRandNumber}) => {
    const [banners,SetBanners] = useState([-1]);
    const [countMidBanner,SetCountMidBanner] = useState(0)
    const [paginats,SetPaginats] = useState([-1])
    const [pageNumbers, SetPageNumbers] = useState(1)
    const pages = 1;





    useEffect(()=>{
       axios.get(`http://localhost:8000/api/banner?page=${pageNumbers}&&pgn=${pages}`)
           .then((d)=> {

               SetBanners(d.data.banner);

               SetPaginats(Array.from(Array(Math.ceil(d.data.meta.links.length/pages)).keys()))

               SetCountMidBanner(d.data.meta.links.length)


           })
           .catch(err=>console.log(err))
    },[pageNumbers])


    return (
        <div className='p-4 flex flex-col gap-8'>
            <div className='flex justify-end'>
                <div className='w-32 h-10 text-white rounded-lg bg-indigo-600 flex justify-center items-center ' >
                    {countMidBanner} بنر
                </div>
            </div>
           <div className='flex flex-col gap-6'>

               {

                   (banners[0] == -1)
                           ?
                      ( <div className='flex justify-center items-center p-12'>
                           <Image alt='loading' width={120} height={120} src={'/Spinner.gif'} />
                       </div>)
                           :
                       (banners.length<1)
                           ?
                          ( <div className='flex justify-center items-center w-full p-8' >گشتم نبود نگرد نیست ....</div>)
                           :
                 (  banners.map((banner,index)=>(

                  <Box key={index} data={banner.attributes} SetRandNumber={SetRandNumber}  SetEditMidCtrl={SetEditMidCtrl}/>)
                   ))
               }
           </div>
                 <div className='flex justify-center items-center gap-2'>

                     {


                         paginats.map((link,i)=>(
                         <button className='w-10 h-10 bg-indigo-600 rounded-lg text-white' onClick={()=>SetPageNumbers(link+1)} key={i}>{link+1}</button>
                         ))


                     }


                                  </div>
        </div>
    );
};

export default AllMid;