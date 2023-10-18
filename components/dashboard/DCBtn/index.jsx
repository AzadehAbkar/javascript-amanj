"use client"



import React from 'react';

const DCBtn = ({title,content,SetContentChanger,SetColorChanger,colorChanger}) => {
    return <button onClick={()=> {
        SetContentChanger(content)
        SetColorChanger(content)
    }} className={
        colorChanger == content
            ?
            "rounded-md w-40 h-12 flex justify-center items-center  bg-green-600 text-white transition-all duration-300 hover:bg-blue-500"
            :"rounded-md w-40 h-12 flex justify-center items-center  bg-orange-500 text-white transition-all duration-300 hover:bg-blue-500"
    }>
        {title}
      </button>;
};

export default DCBtn;