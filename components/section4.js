import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"
export default function section4(){
    return(
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-3">
                
                <div className="item">
<h1 className="font-bold text-3xl py-12 ">Technology</h1>
<div className="flex flex-col gap-6">
{Post()}
{Post()}
</div>
                </div>
                <div className="item">
<h1 className="font-bold text-3xl py-12 ">Sports</h1>
<div className="flex flex-col gap-6">
{Post()}
{Post()}
</div>
                </div>
                <div className="item">
<h1 className="font-bold text-3xl py-12 ">Food</h1>
<div className="flex flex-col gap-6">
{Post()}
{Post()}
</div>
                </div>
                <div className="item">

                </div>
              
    
              
            </div>
        </section>
    )
}


function Post() {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Image
                    src={"/images/imgs.jpg"}
                    width={300}
                    height={250}
                    className="rounded"
                />
            </div>
            <div className="info flex  flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">Knowlede ,Fact</a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> - March 24, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="font-bold text-xs text-gray-800 hover:text-gray-400">
                        For the things we have to learn before we can do them, we learn by doing them.
                    </a></Link>
                </div>
                <Author></Author>
            </div>

        </div>
    )
}