import * as React from 'react';
import Card from '@mui/material/Card';
import {AiFillEdit , AiFillDelete , AiFillEye} from 'react-icons/ai'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Format from "@/layout/format";
export default function mypost(){

    return(
        <>
          <Format>
           <div className=" grid  md:grid-cols-2 lg:grid-cols-3  m-10 gap-10 items-center">
           {
            userposts()
           }
           {
            userposts()
           }
           {
            userposts()
           }
           {
            userposts()
           }
           {
            userposts()
           }
           {
            userposts()
           }

        </div>
        </Format>
        </>
    )
}

export function userposts() {
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
            image="/images/imgs.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="success" onClick={handleHide}>
            <AiFillEye></AiFillEye>Hide
          </Button>
          <Button size="small" color="info" onClick={handleEdit}>
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

