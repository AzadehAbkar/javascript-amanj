 'use client'

import { AiFillCopyrightCircle} from "react-icons/ai";
import SliderFour from '@/components/slider/mainSlider';
 
import ProductsSlider from "@/components/slider/products-slider";
import GraphicSlider from "@/components/slider/graphic-slider";
import MiddleBanner from "@/components/middle-banners";
import NewBlog from "@/components/newBlogs";
import GraphicCategory from "@/components/graphic-cats";
import { useState } from "react";




const Home = () => {
 



   return <main>
       <SliderFour />
       <ProductsSlider title="فایل های گرافیکی" />
       <MiddleBanner />
       <ProductsSlider title="کتاب ها"    />
       <GraphicCategory />
       <GraphicSlider/> 
       <NewBlog/>
     </main>;
}

export default Home;

