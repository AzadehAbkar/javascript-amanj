'use client'


import React, {useState} from 'react';
import DCBtn from '../DCBtn';

const DashboardCtrl = ({SetContentChanger}) => {
    const [colorChanger,SetColorChanger] = useState('MidBanner')



    return <div className="w-60 bg-slate-200 rounded-lg  p-4 flex justify-center items-center container mx-atuo ">
        <div className="flex flex-col gap-6">
          <DCBtn title={"بنرها"} content={"MidBanner"} SetContentChanger={SetContentChanger} SetColorChanger={SetColorChanger} colorChanger={colorChanger}   />
          <DCBtn title={"اسلایدرها"} content={"slider"} SetContentChanger={SetContentChanger} SetColorChanger={SetColorChanger} colorChanger={colorChanger} />
        </div>
      </div>;
};

export default DashboardCtrl;