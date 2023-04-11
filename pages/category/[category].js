import Format from "@/layout/format"
import Image from "next/image";
import Author from "@/components/_child/author";
import Link from "next/link";
import {getPostByCategory,getPost} from "@/lib/helper"
export default function cate(props,{params}){
    const {data} = props;
    // const currentcat = Object.values(data)[0];
    const currentcat = data;
    console.log(data[0].id)
    return(
        <Format>
            <section className="container  mx-auto md:px-20 py-5">
            <h1 className="font-bold text-4xl uppercase py-12 text-center">
            {data[0].category}
            </h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
         {
                    data.map((value, index) => {
                        { return <div key={index}> <Cardd data={value}></Cardd></div> }
                    })
                }
         </div>
        </section>
        </Format>
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
                    <Link href={`/blog/${data.id}`} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">{data.categorey}</a></Link>
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

function Cardd({data}){
return (
  <div className="card-wrapper">
    <div className="card">
      <div className="image-wrapper">
        <a className="image-link" href={`/blog/${data.id}`}>
<img src={data.img || "/"} alt='Beautiful woman face by Oleg Gekman on 500px.com'/>
        </a>
      </div>
      <div className="text-box-wrapper">
      <div className="text-box">
        <h1 className="heading">
        {data.title}
        </h1>

        <p  className="text">
        {data.description}       
         </p>
      </div>
     </div>
     {data.author ? <Author></Author> : <></>}
      <div className="button-wrapper">
          <a className="button" href={`/blog/${data.id}`}>
            Read More
          </a>
      </div>
    </div>
  </div>
)
}

export async function getStaticProps({params}){
    const posts = await getPostByCategory(params.category)
    return({
      props:
       { data : posts.map( item => {
        return {
            id: item.id.toString(),
            title: item.title,
            subtitle: item.subtitle,
            category:item.category,
            description:item.description,
            img:item.img,
            published:item.published,
            author:item.author
        }
       }) },
      
    })
    }
    
export async function getStaticPaths(){
    const posts = await getPostByCategory();

    const paths = posts.map( value => {
        return{
            params: {
                category:value.category
            }
    }
    })

    return{
            paths,
            fallback:false
        }
    
    }
    