import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Format from "@/layout/format";
import BlogEdit from "@/components/blogedit"
import getPost from "@/lib/helper"

export default function mypost(props){
const data = props;
console.log(data)
    return(
        <>
          <Format>
           <div className="flex flex-col   m-auto mb-20 w-9/12">
           {
            <BlogEdit props={data}></BlogEdit>
           }
        </div>
        </Format>
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
  
    
    
