import {ImFacebook2,ImGithub,ImLinkedin,ImTwitter} from 'react-icons/im'
import {AiOutlineDown} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import ProfileDrop from '@/components/_child/dropdown'
export default function header(){
return(
<header className="bg-gray-50">
  <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
     <div className="xl:container xl:mx-auto flex flex-col gap-4 items-center sm:flex-row  text-center">
    <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
     <input type="text" className="input-text" placeholder="Search..."/>
    </div>
    <div className="shrink w-100 h-[100%] flex gap-5 sm:order-2 align-middle items-center">
        <Link href='/' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Home</a>
        </Link>
        <Link href='/myposts' legacyBehavior>
        <a className="font-bold uppercase text-1xl">My Posts</a>
        </Link>
        <Link href='/about' legacyBehavior>
        <a className="font-bold uppercase text-1xl">About</a>
        </Link>
        <Link href='/contact' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Contact</a>
        </Link>
        {/* <button onClick={() => swiperRef.current?.slidePrev()} className='swiper-button-prev hidden lg:inline'  ><AiOutlineLeft size={50}/></button> */}
        
        <ProfileDrop className=''/>   
       
        
         
    </div>
    </div>
    <div className="w-96 hidden lg:block order-3 flex justify-center ">
    <div className="flex gap-3">
     <a><ImFacebook2/></a>
     <a><ImLinkedin/></a>
     <a><ImTwitter/></a>
     <a><ImGithub/></a>
    </div>
    </div>
  </div>
  {/* <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
  <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-between px-4 sm:py-2">
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
  </div>
  </div> */}
</header>
)
}