'use client'
import {useRef} from 'react';
import axios from "axios";







const CreateMid = () => {
    const bannerImageRef = useRef()
    const bannerAltRef = useRef()
    const bannerUrlRef = useRef()
    const bannerPositionRef = useRef()
    const bannerStatusRef = useRef()

    const submiter=(e)=>{
        e.preventDefault();
        // console.log(bannerImageRef.current.files[0])
        let postData = new FormData();
        postData.append('alt',bannerAltRef.current.value)
        postData.append('url',bannerUrlRef.current.value)
        postData.append('position',bannerPositionRef.current.value)
        postData.append('status',bannerStatusRef.current.value)
        postData.append('image',bannerImageRef.current.files[0])
        

        // const formData={
        //     image:bannerImageRef.current.value,
        //     alt:bannerAltRef.current.value,
        //     url:bannerUrlRef.current.value,
        //     position:bannerPositionRef.current.value,
        //     status:bannerStatusRef.current.value,
        // }


        axios.post('http://localhost:8000/api/banner',postData,{
            headers:{

                'Content-Type': 'multipart/form-data'
            }
        })
            .then(d=>console.log('ok'))
            .catch(e=>console.log('err'))

    }

    return (
        <div className='flex flex-col gap-6'>
            <h2 className=' text-orange-400'>بنر جدید</h2>
           <form onSubmit={submiter} className=' flex flex-col gap-6' >
             <div className='flex flex-col gap-2'>
               <label>  عکس</label>
               <input ref={bannerImageRef} type='file' name='image' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400' required/>
             </div>

               <div  className='flex flex-col gap-2'>
                   <label>آلت عکس</label>
                   <input ref={bannerAltRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div  className='flex flex-col gap-2'>
                   <label>آدرس عکس</label>
                   <input ref={bannerUrlRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div   className='flex flex-col gap-2'>
                   <label> موقعیت</label>
                   <input  ref={bannerPositionRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div  className='flex flex-col gap-2'>
                   <label>   وضعیت</label>
                   <select ref={bannerStatusRef} className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'>
                       <option value='0' >روشن</option>
                       <option value='1'>خاموش</option>
                   </select>
               </div>

               <button type='submit' className='bg-indigo-600 text-white rounded-md transition-all duration-500 hover:bg-orange-400 w-full h-10 p-2 mt-3'>ثبت</button>




           </form>
        </div>
    );
};

export default CreateMid;