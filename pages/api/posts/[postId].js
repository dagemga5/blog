import data from "../data"
//api/posts/id
export default function handler (req,res){
    const {postId} = req.query;
    const {Posts} = data;
    if(postId){
       const post =  Posts.find(value => value.id == postId)
       if(post == null )return res.status(404).json({error:"Post does not exixr"})
       return res.status(200).json(post)
    } 
    
    return res.status(404).json({error:"Post not found"})

}