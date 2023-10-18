import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/slider/relatedPosts";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiSearchAlt } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";
// import MostViewedPosts from "../../../components/mostViewedPosts";
import Link from "next/link";



const SingleBlog =  ( ) => {
  
  return <div className=" flex justify-between items-start container mx-auto gap-2">
      <main className="w-[75%]">
        <div className=" flex flex-col gap-12">
          <BreadCrumb secondTitle={"وبلاگ"} secondLink={"/blog"} title={"نکست جی اس"} />
          <section className=" flex justify-center items-center">
            <Image className=" rounded-xl" width={800} height={400} alt="alt" src={"/image/blog-images/best-Watch1.jpg"} priority={true} />
          </section>
          <section className=" flex flex-col gap-6">
            <h1 className=" text-blue-400 text-lg" />
            <div className=" flex justify-start items-center gap-4 text-base sm:text-sm">
              <div className=" bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                <FaRegEye className=" w-6 h-6 text-black" />
                <span>تعداد بازدید : </span>
                <span />
              </div>
              <div className=" bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                <FaRegComment className=" w-6 h-6 text-black" />
                <span>تعداد دیدگاه : </span>
                <span />
              </div>
              <div className=" bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                <SlCalender className=" w-6 h-6 text-black" />
                <span>آخرین به روزرسانی : </span>
                <span />
              </div>
            </div>
          </section>
          <section className=" flex flex-col gap-6">
            <h2 className=" text-xl">توضیحات کامل</h2>
            <p className=" leading-9">
              فریم ورک چیست ؟ فریم ورک بستری را برای برنامه ن ویسان فراهم
              می‌کند که استفاده از کدهای از پیش ساخته شده را امکان‌پذیر
              می‌کند. در واقع می‌توان گفت هدف اصلی فریم ورک‌ها ، راحتی کار
              برنام ه‌ نویسان و اجتناب از نوشتن کدهای تکراری است. لاراول یکی
              از محبوب‌ترین فریم ورک های PHP است. PHP فریم ورک‌ها ی متعددی
              دارد که از جمله آن‌ها می‌توان به Yii ،Cakephp ،codeigniter
              ،Nette ،Symfonyاشاره کرد. در حال حاضر اکثر برنامه ‌نویسان تحت
              وبی که قصد توسعه برنامه‌های کار بردی وب بر پا یه م عما ری س ه
              لایه (MVC) با PHP دارند، استفاده از فریم ورک لاراول را به دیگر
              فریم ورک‌ها ترجیح می‌دهند.
            </p>
          </section>
          <section>
            <RelatedPosts relPostsData={""} title={"مقالات مرتبط"} />
          </section>
          <section className=" flex flex-col gap-6">
            <h2 className=" text-xl">دیدگاه ها</h2>
            <form className=" bg-zinc-700 rounded-md h-48">1</form>
          </section>
        </div>
      </main>
      <aside className=" w-80 max-w-80 rounded-md flex flex-col gap-12">
        <form className="  border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
          <input type="text" className=" bg-transparent p-2 outline-none text-sm" placeholder="جستجو در وبلاگ..." />
          <BiSearchAlt className=" w-6 h-6" />
        </form>
        <div className=" flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className=" text-blue-500">توضیحات خلاصه</h3>
          <p className=" leading-9 text-base sm:text-sm text-justify">
            فریم ورک چیست ؟ فریم ورک بستری را برای برنامه ن ویسان فراهم می‌کند
            که استفاده از کدهای از پیش ساخته شده را امکان‌پذیر می‌کند. در واقع
            می‌توان گفت هدف اصلی فریم ورک‌ها ، راحتی کار برنام ه‌ نویسان و
            اجتناب از نوشتن کدهای تکراری است. لاراول یکی از محبوب‌ترین فریم
            ورک های PHP است. PHP فریم ورک‌ها ی متعددی دارد که از جمله آن‌ها
            می‌توان به Yii ،Cakephp ،codeigniter ،Nette ،Symfonyاشاره کرد. در
            حال حاضر اکثر برنامه ‌نویسان تحت وبی که قصد توسعه برنامه‌های کار
            بردی وب بر پا یه م عما ری س ه لایه (MVC) با PHP دارند، استفاده از
            فریم ورک لاراول را به دیگر فریم ورک‌ها ترجیح می‌دهند.
          </p>
        </div>
        <div className=" flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className=" text-blue-500">برچسب ها</h3>
          <div className=" flex justify-start items-center gap-2 flex-wrap">
            <Link className=" p-2 flex justify-center items-center rounded-md text-base  sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white hover:bg-orange-500 " href={"/search"} />
          </div>
        </div>
        {/* <MostViewedPosts /> */}
        <div className=" flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className=" text-blue-500">پرفروشترین محصولات</h3>
          <ul className=" flex flex-col gap-3">
            <li>
              <Link className=" p-2 flex justify-center items-center text-base  sm:text-sm border-r-2 border-zinc-600" href={"/"}>
                مقاله تستی اول مقاله تستی اول مقاله تستی اول
              </Link>
            </li>
            <li>
              <Link className=" p-2 flex justify-center items-center text-base  sm:text-sm border-r-2 border-zinc-600" href={"/"}>
                مقاله تستی اول مقاله تستی اول مقاله تستی اول
              </Link>
            </li>
            <li>
              <Link className=" p-2 flex justify-center items-center text-base  sm:text-sm border-r-2 border-zinc-600" href={"/"}>
                مقاله تستی اول مقاله تستی اول مقاله تستی اول
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)] ">
          <h3 classsName="text-blue-500">شرکت در خبرنامه</h3>
          <form className="  border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
            <input type="text" className=" bg-transparent p-2 outline-none text-sm" placeholder="جستجو در وبلاگ..." />
            <IoSendOutline className="rotate-180 w-6 h-6" />
          </form>
        </div>
      </aside>
    </div>;
};

export default SingleBlog;
