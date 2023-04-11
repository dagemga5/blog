import Image from "next/image"
import Link from "next/link"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { React, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/css';
import Author from "./_child/author"
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section3() {
    const swiperRef = useRef();
    const { data, isLoading, isError } = fetcher("api/posts")
    if(isLoading)return<Spinner></Spinner>
    if(isError)return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">
                Most Popular
            </h1>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
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
                    data.map((value, index) => {
                        { return <SwiperSlide key={index}> <PPost data={value}></PPost></SwiperSlide> }
                    })
                }
            </Swiper>
            <div>
            </div>



        </section>
    )
}

function PPost({ data }) {
    
    return (
        <div className="grid">
            <div className="images">
                <Image
                    src={data.img || "/"}
                    width={500}
                    height={350}
                    className="rounded"
                />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/blog/${data.id}`} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">{data.catagorey}</a></Link>
                    <Link href={`/blog/${data.id}`} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> {data.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/blog/${data.id}`} legacyBehavior><a className="text-md font-bold text-gray-800 hover:text-gray-400 flex-1">
                       {data.title}
                    </a></Link>
                </div>
                <p className="text-sm md:text-md text-gray-500 py-3 flex-1 px-1">
                  {data.description}
                </p>
                {data.author ? <Author></Author> : <></>}
            </div>

        </div>
    )
}