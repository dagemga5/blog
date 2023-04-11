import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section2() {
 
    const  {data , isLoading , isError} =  fetcher("api/posts")
    if(isLoading)return<Spinner></Spinner>
    if(isError)return <Error></Error>
  
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">
                Latest post
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
               {
                data.map((value,index) => (
                    <Post data ={value} key = {index}></Post>                    
                ))
               }
            </div>


        </section>
    )

}


function Post({data}) {

    const {id,title ,category,img,published ,author} = data
    return (
        <div className="item">
            <div className="images">
                <Image
                    src={img || "/"}
                    width={500}
                    height={350}
                    className="rounded w-screen"
                />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 uppercase hover:text-cyan-600">{category || "unknown"} </a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> - {published || "unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="text-md font-bold text-gray-800 hover:text-gray-400">
                        {title || "Unknown Title"}
                    </a></Link>
                </div>
                <p className="text-sm md:text-md text-gray-500 py-3">
                    {data.description}
                </p>
                {author ? <Author></Author> : <></>}
            </div>

        </div>
    )
}