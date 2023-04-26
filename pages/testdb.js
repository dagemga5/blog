import Format from "@/layout/format";
import { useState,useEffect } from "react";
import data from "./api/data";
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/_child/spinner";
import Error from "@/components/_child/error";
export default  function Testdb(){
    
  const  {data , isLoading , isError} =  fetcher("api/test_db")
  if(isLoading)return<Spinner></Spinner>
  if(isError)return <Error></Error>
  console.log(data[0].content)
    // const test = async () => { 
    //     const res = await fetch("../api/test_db");
    // const newData = await res.json();
    // return (newData);
    // };
    // const data = test();
//     let [content, setContent] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     const response =  fetchData()
//     setContent(response)
//         // 4. Setting *dogImage* to the image url that we received from the response above
    
//   },[])
//     console.log(content)
return(
    <Format>
        <div className="flex flex-col justify-center items-center  mt-40 mb-40">
        <p dangerouslySetInnerHTML={{ __html: data[0].id }}></p>
        </div>
</Format>
)
}

async function fetchData() {
    const res = await fetch("../api/test_db/someinfo");
    const newData = await res.json();
    return (newData);
  }
