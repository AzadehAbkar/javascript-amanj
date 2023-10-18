'use client'
import {useEffect, useRef, useState} from 'react';
import axios from "axios";







const EditMid = ({midBannerId}) => {

    const NotSubmit = (event) =>{
        if(event.key== 'Enter'){
            event.preventDefault();
        }
    };


    const bannerImageRef = useRef()
    const bannerAltRef = useRef()
    const bannerUrlRef = useRef()
    const bannerPositionRef = useRef()
    const bannerStatusRef = useRef()

    ////update
    const updater=(e)=>{
        e.preventDefault();
        // console.log(bannerImageRef.current.files[0])
        let postData = new FormData();
        postData.append('id',midBannerId );
        postData.append('alt',bannerAltRef.current.value);
        postData.append('url',bannerUrlRef.current.value);
        postData.append('position',bannerPositionRef.current.value);
        postData.append('status',bannerStatusRef.current.value);
        postData.append('image',bannerImageRef.current.files[0]);
        postData.append("_method", "PUT");
        

        // const formData={
        //     image:bannerImageRef.current.value,
        //     alt:bannerAltRef.current.value,
        //     url:bannerUrlRef.current.value,
        //     position:bannerPositionRef.current.value,
        //     status:bannerStatusRef.current.value,
        // }


        axios.post(`http://localhost:8000/api/banner/${midBannerId}`,postData,{
            headers:{

                'Content-Type': 'multipart/form-data'
            }
        })
            .then(d=>console.log('ok'))
            .catch(e=>console.log('err'))

    }

    const[bannerImageUrlState,SetBannerImageUrlState] = useState('')
    const[bannerAltUrlState,SetBannerAltUrlState] = useState('')
    const[bannerPositionUrlState,SetBannerPositionUrlState] = useState('')
    const[bannerUrlState,SetBannerUrlState] = useState('')
    const[bannerStatusUrlState,SetBannerStatusUrlState] = useState(0)


//////show
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/banner/${midBannerId}`)
            .then(d=>{

                SetBannerImageUrlState(d.data.data.attributes.image)
                SetBannerAltUrlState(d.data.data.attributes.alt)
                SetBannerPositionUrlState(d.data.data.attributes.position)
                SetBannerUrlState(d.data.data.attributes.url)
                SetBannerStatusUrlState(d.data.data.attributes.status)
            })
            .catch(e=>console.log('error'))
    },[midBannerId])


    ///delete

    const remover=()=>{
        // console.log(bannerImageRef.current.files[0])
        let postData = new FormData();
        postData.append('id',midBannerId );
        postData.append("_method", "DELETE");


        // const formData={
        //     image:bannerImageRef.current.value,
        //     alt:bannerAltRef.current.value,
        //     url:bannerUrlRef.current.value,
        //     position:bannerPositionRef.current.value,
        //     status:bannerStatusRef.current.value,
        // }


        axios.post(`http://localhost:8000/api/banner/${midBannerId}`,postData,{
            headers:{

                'Content-Type': 'multipart/form-data'
            }
        })
            .then(d=>console.log('remove'))
            .catch(e=>console.log('err'))

    }



    return (
        <div className='flex flex-col gap-6'>
            <div className="flex justify-between items-center ">
                <h2 className=' text-orange-400'>  ویرایش بنر</h2>
                <button onClick={remover}  className='bg-red-600 text-white px-4 py-1 h-8 rounded-md text-xs transition-all duration-500 hover:bg-rose-700' >حذف بنر</button>

            </div>
            <form onKeyDown={NotSubmit}  onSubmit={updater} className=' flex flex-col gap-6' >
             <div className='flex flex-col gap-2'>
               <label> ویرایش عکس</label>
               <input defaultValue={bannerImageUrlState} ref={bannerImageRef} type='file' name='image' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400' required/>
             </div>

               <div  className='flex flex-col gap-2'>
                   <label>ویرایش آلت عکس</label>
                   <input defaultValue={bannerAltUrlState} ref={bannerAltRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div  className='flex flex-col gap-2'>
                   <label> ویرایش آدرس عکس</label>
                   <input defaultValue={bannerUrlState} ref={bannerUrlRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div   className='flex flex-col gap-2'>
                   <label>ویرایش موقعیت</label>
                   <input  defaultValue={bannerPositionUrlState} ref={bannerPositionRef} type='text' className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'/>
               </div>

               <div  className='flex flex-col gap-2'>
                   <label>  ویرایش وضعیت</label>
                   <select  ref={bannerStatusRef} className='p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400'>
                       {
                           bannerStatusUrlState == 0 ? (
                               <>
                                   <option value='0' >روشن</option>
                                   <option value='1'>خاموش</option>
                               </>
                           ) :(
                               <>
                               <option value='1'>خاموش</option>
                               <option value='0' >روشن</option>
                               </>
                               )
                       }


                   </select>
               </div>

               <button type='submit' className='bg-indigo-600 text-white rounded-md transition-all duration-500 hover:bg-orange-400 w-full h-10 p-2 mt-3'>ثبت ویرایش</button>




           </form>
        </div>
    );
};

export default EditMid;