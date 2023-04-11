import Author from "@/components/_child/author"
import Image from "next/image"
import Related from "@/components/_child/related"
import getPost from "@/lib/helper"
export default function blog(props){
    return(
    <>
    <section className="container mx-auto md:px-2 py-16 w-3/4">
    <div className="flex justify-center">
           <Author/>
        </div>
<div className="post py-10">
<h1 className="font-bold text-4xl text-center"> 
{props.title || "No title"}
</h1>
<p className="text-grey-500 text-xl text-center  pt-5">
{props.subtitle || "No description"}
</p>
<div className="py-10">
<Image
src={props.img}
width={900}
height={600}
/>
</div>
<div className="text-grey-600 text-lg flex flex-col gap-4">
<p>
{props.description}
</p>
</div>
</div>
<Related/>
    </section>
    </>
    )
}

export async function getStaticProps({params}){
    const posts = await getPost(params.postid)
    return({
      props:
        posts
      
    })
    }
    
export async function getStaticPaths(){
    const posts = await getPost();

    const paths = posts.map( value => {
        return{
            params: {
                postid:value.id.toString()
            }
    }
    })

    return{
            paths,
            fallback:false
        }
    
    }
    