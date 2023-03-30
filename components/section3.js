import Image from "next/image"
import Link from "next/link"
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import{ React,useRef} from "react";
import { Swiper,SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay ,Navigation} from 'swiper'
import 'swiper/css';
import Author from "./_child/author"

export default function section3(){
    const swiperRef = useRef();
    return(
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
                <SwiperSlide>{PPost()} </SwiperSlide>
                <SwiperSlide>{PPost()} </SwiperSlide>
                <SwiperSlide>{PPost()} </SwiperSlide>
                <SwiperSlide>{PPost()} </SwiperSlide>
                <SwiperSlide>{PPost()} </SwiperSlide>
                <SwiperSlide>{PPost()} </SwiperSlide>
                </Swiper>
                <div>
      </div>
                
                

        </section>
    )
}

function PPost() {
    return (
        <div className="grid">
            <div className="images">
                <Image
                    src={"/images/imgs.jpg"}
                    width={500}
                    height={350}
                    className="rounded"
                />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">Knowlede ,Fact</a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> - March 24, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="text-md font-bold text-gray-800 hover:text-gray-400 flex-1">
                        For the things we have to learn before we can do them, we learn by doing them.
                    </a></Link>
                </div>
                <p className="text-sm md:text-md text-gray-500 py-3 flex-1 px-1">
                    It is often understood as awareness of facts or as practical skills,
                    and may also mean familiarity with objects or situations. Knowledge of facts,
                    also called propositional knowledge, is often defined as true belief that is distinct
                    from opinion or guesswork by virtue of justification.
                </p>
                <Author></Author>
            </div>

        </div>
    )
}