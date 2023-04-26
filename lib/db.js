import mysql from "serverless-mysql";
const db = mysql({
  config:{
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    database:process.env.MYSQL_DATABASE,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD
  }
})

export default async function executequery({query, values}){
try {
   const results = await db.query(query , values) ;
   await db.end();
   return results;
} catch (error) {
    return {error}
}
}

// export async function testdb({query, context}){
// try {
//   let res = await db.connect;
//   return(res)
// } catch (error) {
//   return(error)
// }
// }