import data from "../data"
import excuteQuery from '../../../lib/db'
//api for trending
export default async function handler(req,res){
    const {Posts} = data;
    var datetime = new Date();
    console.log(req.body.title)
    switch( req.method.toLowerCase()){
        case "get" : 
        return res.status(200).json(Posts)
        case "post" : {
            const result = await excuteQuery({
                query: 'select * from blog.post',
                values: [req.body.content],
            });
            console.log(req.body.content);
            console.log(result);
        return( result)
         res.setPreviewData({}) 
         res.redirect('/')
         console.log(datetime,'handling post method')
         
         break;
        }
        case "delete" : {

        }
    }
    return res.status(404).json({error:"Data not found"})
}