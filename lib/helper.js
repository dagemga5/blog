// ip:port/api/posts 
const endpoint = "http://localhost:3000/"
export default async function getPost(id){
    const res = await fetch(`${endpoint}api/posts`)
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }
    return posts;
}

export  async function getPostByCategory(category){
    const res = await fetch(`${endpoint}api/posts`)
    const posts = await res.json()
    console.log(posts.filter((arr) => arr.category === category))

    if(category){
        return posts.filter((arr) => arr.category === category)
    }
    return posts;
}

export  async function getPostByAuthor(author){
    const res = await fetch(`${endpoint}api/posts`)
    const posts = await res.json()
    console.log(posts.filter((arr) => arr.author.name === author))

    if(author){
        return posts.filter((arr) => arr.author.name === author)
    }
    return ("You Don't have a post");
}