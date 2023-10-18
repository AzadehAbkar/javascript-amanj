import Image from "next/image";
import Link from "next/link";

const BlogBox = () => {
   return <article className="sliderItem p-2  hover:pt-0 transition-all duration-300 ">
       <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,.2)] h-[26rem] w-72 rounded-lg ">
         <Link className=" flex justify-center items-center pt-2" href={"/"}>
           <Image width={270} height={150} className=" rounded-md" src={"/image/blog-images/best-Watch1.jpg"} alt="alt" />
         </Link>
         <div>
           <div className=" flex flex-col gap-6 p-2">
             <Link href={"/"}>
               <h3 className=" absolute top-48 right-2 left-2 line-clamp-2  ">
                 'گرافیک ها'
               </h3>
             </Link>
             <p className=" absolute top-64 right-2 left-2 text-base sm:text-sm text-justify line-clamp-4">
               متنمتنمتنمتنمتن متنمتنمتنمتنمتنرمتنمتنمتنمتن
             </p>
             <div className=" h-1 w-[90%] absolute bottom-12 right-2 left-2 bg-zinc-300  rounded-full mx-auto  " />
             <div className=" absolute bottom-2 right-2 left-2 flex justify-between items-center">
               <div className=" text-base sm:text-sm  bg-zinc-200 rounded-md py-1 px-3 ">
                 تاریخ
               </div>
               <div className=" text-base sm:text-sm  bg-zinc-200 rounded-md py-1 px-3 ">
                 بازدید
               </div>
             </div>
           </div>
         </div>
       </div>
     </article>;
};

export default BlogBox;
