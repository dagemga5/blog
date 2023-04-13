import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Format from "@/layout/format";
import Blogcreate from "@/components/blogcreate"
export default function mypost(){

    return(
        <>
          <Format>
           <div className="flex flex-col   m-auto mb-20 w-9/12">
           {
            <Blogcreate></Blogcreate>
           }
        </div>
        </Format>
        </>
    )
}

// export function userposts() {
//     return (
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image="/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over 6,000
//               species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }

// export function getStaticProps({params}){
// const mypost = params.mypostid

// return({
//     props: {mypost}
// })
// }
