import * as React from 'react';
import Card from '@mui/material/Card';
import {AiFillEdit , AiFillDelete , AiFillEye} from 'react-icons/ai'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Format from "@/layout/format";
import { getPostByAuthor } from '@/lib/helper';
export default function mypost(props){
const {data} = props
    return(
        <>
          <Format>
           <div className=" grid  md:grid-cols-2 lg:grid-cols-3  m-10 gap-10 items-center">
           {
                    data.map((value, index) => {
                        { return <div key={index}> <Userposts data={value}></Userposts></div> }
                    })
                }

        </div>
        </Format>
        </>
    )
}

export function Userposts({data}) {
  const handleDelete = () => {
    alert("I'm an alert");
  }
  const handleEdit = () => {
    alert("I'm an alert");
  }

  const handleHide = () => {
    alert("I'm an alert");
  }
    return (
      <div className='flex items-center justify-center'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="success" onClick={handleHide}>
            <AiFillEye></AiFillEye>Hide
          </Button>
          <Button size="small" color="info" onClick={() => {location.href = `/myposts/editpost/${data.id}`}}>
            <AiFillEdit></AiFillEdit>Edit
          </Button>
          <Button size="small" color="error" onClick={handleDelete}>
           <AiFillDelete></AiFillDelete>Delete
          </Button>
        </CardActions>
      </Card>
      </div>
    );
  }

  
export async function getStaticProps({params}){
  const posts = await getPostByAuthor("Author name")
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
  
