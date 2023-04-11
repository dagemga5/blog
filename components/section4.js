import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section4() {
    const  {data , isLoading , isError} =  fetcher("api/posts")
   if(isLoading)return<Spinner></Spinner>
   if(isError)return <Error></Error>
    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-3">

                <div className="item">
                    <h1 className="flex justify-center font-bold text-3xl py-12 ">Technology</h1>
                    <div className="flex flex-col gap-6">
                        {
                            data[1] ? <Post data={data[1]}></Post> : <></>
                        }
                        {
                            data[2] ? <Post data={data[2]}></Post> : <></>
                        }
                        {
                            data[3] ? <Post data={data[3]}></Post> : <></>
                        }
                    </div>
                </div>
                <div className="item">
                    <h1 className="flex justify-center font-bold text-3xl py-12 ">Sports</h1>
                    <div className="flex flex-col gap-6">
                    {
                            data[4] ? <Post data={data[4]}></Post> : <></>
                        }
                        {
                            data[5] ? <Post data={data[5]}></Post> : <></>
                        }
                        {
                            data[1] ? <Post data={data[1]}></Post> : <></>
                        }
                    </div>
                </div>
                <div className="item">
                    <h1 className="flex justify-center font-bold text-3xl py-12 ">Food</h1>
                    <div className="flex flex-col gap-6">
                    {
                            data[2] ? <Post data={data[2]}></Post> : <></>
                        }
                        {
                            data[5] ? <Post data={data[5]}></Post> : <></>
                        }
                        {
                            data[1] ? <Post data={data[1]}></Post> : <></>
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}


function Post({data}) {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Image
                    src={data.img || "/"}
                    width={300}
                    height={250}
                    className="rounded"
                />
            </div>
            <div className="info flex  flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">{data.category}</a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> {data.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="font-bold text-xs text-gray-800 hover:text-gray-400">
                        {data.title}
                    </a></Link>
                </div>
                {data.author ? <Author></Author> : <></>}
            </div>

        </div>
    )
}