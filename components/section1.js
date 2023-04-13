import Image from "next/image";
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import Link from "next/link";
import Author from "./_child/author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import{ React,useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay ,Navigation} from 'swiper'
import 'swiper/css';
import fetcher from "@/lib/fetcher";
export default function section1() {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
  }
  const bgc = {
    backgroundColor: "rgb(226,225,230)"
  }
  const swiperRef = useRef();

  SwiperCore.use([Autoplay]);

  const  {data , isLoading , isError} =  fetcher("api/posts")
   if(isLoading)return<Spinner></Spinner>
   if(isError)return <Error></Error>
 

  return (


    <section className="py-5" style={bgc}>
     
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">
          Trending
        </h1>
        {
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          slideToClickedSlide={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          grabCursor={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={3000}

        >
          {
            
            data.map( (value,index) => {
            { return <SwiperSlide  key={index}>  < Slide data={value} ></Slide> </SwiperSlide>}
            }) 
            }
       
        </Swiper>
        }
        

        <div>
        <button onClick={() => swiperRef.current?.slidePrev()} className='swiper-button-prev hidden lg:inline'  ><AiOutlineLeft size={50}/></button>
        <button onClick={() => swiperRef.current?.slideNext()} className='swiper-button-next hidden lg:inline'><AiOutlineRight size={50}/></button>
      </div>
        

      </div> 
   
    </section>
         );
  
  }


function Slide({data}) {
  const {id,title ,category,img,published ,author} = data
  return (
    <div className="grid md:grid-cols-2 md:gap-10">
      <div className="image">
        <Image
          src={img || "/"}
          width={800}
          height={500}
          className="sm:object-cover sm:h-[100%]"
        />

      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/blog/${id}`} legacyBehavior><a className="text-orange-600 hover:text-cyan-600 uppercase">{category || "unknown"}</a></Link>
          <Link href={`/blog/${id}`} legacyBehavior><a className="text-gray-600 hover:text-cyan-600 uppercase"> - {published || "unknown"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/blog/${id}`} legacyBehavior><a className="text-2xl xl:text-4xl font-bold text-gray-800 hover:text-gray-400">
          {title || "Unknown Title"}
          </a></Link>
        </div>
        <p className="text-sm xl:text-md text-gray-500 py-3">
          It is often understood as awareness of facts or as practical skills,
          and may also mean familiarity with objects or situations. Knowledge of facts,
          also called propositional knowledge, is often defined as true belief that is distinct
          from opinion or guesswork by virtue of justification.
        </p>
        {author ? <Author></Author> : <></>}
      </div>
    </div>
  )
}
