import Image from "next/image"
import Link from "next/link"
import Author from "./author"
export default function related(){
    return(
        <section className="pt-20">
         <h1 className="font-bold text-3xl py-10 ">Related Topics</h1>
         <div className="flex flex-col gap-10">
{Post()}
{Post()}
{Post()}
{Post()}
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
                    height={200}
                    className="rounded"
                />
            </div>
            <div className="info flex  flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">Knowlede ,Fact</a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> - March 24, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="font-bold text-xl text-gray-800 hover:text-gray-400">
                        For the things we have to learn before we can do them, we learn by doing them.
                    </a></Link>
                </div>
                <Author></Author>
            </div>

        </div>
    )
}