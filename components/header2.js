import {ImFacebook2,ImGithub,ImLinkedin,ImTwitter} from 'react-icons/im'
import Link from 'next/link'
import Image from 'next/image'
export default function header2(){
return(
<header className="bg-[#e2e1e6]">
  <div className="xl:container xl:mx-auto mb flex flex-col items-center justify-center lg:flex-row gap-5 md:gap-10 text-center py-3">
    
        <Link href='/category/sport' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Sport</a>
        </Link>
        <Link href='/category/food' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Food</a>
        </Link>
        <Link href='/category/technology' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Technology</a>
        </Link>
        <Link href='/category/lifestyle' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Fashion and Beauty</a>
        </Link>
        <Link href='/category/lifestyle' legacyBehavior>
        <a className="font-bold uppercase text-1xl">LifeStyle</a>
        </Link>
        <Link href='/category/business' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Business</a>
        </Link>
        <Link href='/category/Health_and_Fitness' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Health and Fitness</a>
        </Link>
        <Link href='/category/photography' legacyBehavior>
        <a className="font-bold uppercase text-1xl">Photography</a>
        </Link>
        <Link href='/category/diy' legacyBehavior>
        <a className="font-bold uppercase text-1xl">DIY</a>
        </Link>
     
    </div>
</header>
)
}