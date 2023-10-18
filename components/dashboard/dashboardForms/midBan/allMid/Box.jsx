'use client'

import React from 'react';
import Image from "next/image";
const Box = ({data,SetEditMidCtrl,SetRandNumber}) => {
    return (
        <div onClick={()=>{
            SetEditMidCtrl(data.id);
            SetRandNumber(Math.ceil(Math.random()*20))

        }} className='relative flex justify-between items-center cursor-pointer p-6 w-full rounded-lg bg-zinc-100 border-2 border-zinc-200 transition-all duration-500 hover:border-orange-500'>
         <div className='flex justify-start items-center'>
          <Image className='rounded-lg' src={data.image} title={data.alt} alt={data.alt} width={400} height={200} />
         </div>
            <div className='flex   items-center gap-3 absolute bottom-3 left-3'>
              {
                  data.status == 0
                      ?<div className='text-sm bg-green-500 text-white px-3 py-1 rounded'>روشن</div>
                      :<div className='text-sm bg-red-500 text-white px-3 py-1 rounded'>خاموش</div>
              }
              <div className='text-sm bg-orange-500 text-white px-3 py-1 rounded '>{data.data}</div>
          </div>
        </div>
    );
};

export default Box; 