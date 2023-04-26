import Input from '@mui/material/Input';
import React from 'react';
import FormData from 'form-data';
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import fetcher from "@/lib/fetcher"


export default function blogcreate({props}){
    
  const [category, setCategory] = React.useState();
  const [titles, setTitle] = React.useState();
  const [subtitles, setSubTitle] = React.useState();
  const [image, setImage] =React.useState(null);
  const [description, SetDescription] =React.useState(null);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);
  var basei;

 
  const uploadToClient = async(event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      console.log(i)
      setCreateObjectURL(URL.createObjectURL(i));
      basei = await convertBase64(i);
      setImage(basei);
  };
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

  const handler = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const  handleSubmit = async() =>{
    let  body = new FormData();
    body.append("1", titles)
    body.append("2",description)
    body.append( "3", subtitles)
    body.append("4" , image)
    let data = {content : body}
  //   for (var key of body.entries()) {
  //     console.log(key[0] + ', ' + key[1]);
  // }
  const response = await fetch("/api/posts", {
    method: "POST",
    data
  });
  console.log(response.body)
}

  const uploadToServer = async () => {
    let  body = new FormData();
    console.log("file" , image)
    body.append("file", image);
    for (var key of body.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    const response = await fetch("/api/posts", {
      method: "POST",
      body
    });
    console.log(response)
  };
  
    return(
        <section className="container  mx-auto md:px-20 ">
        <h1 className='font-bold text-4xl uppercase py-12 text-center'>Create content</h1>
        <div className="flex flex-col gap-5 w-auto8 ">
          
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={titles}
          defaultValue=""
          onChange={handler}
         
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Subtitle"
          multiline
          maxRows={4}
          value={subtitles}
          defaultValue=""
          onChange={(e) => {setSubTitle(e.target.value)}}
        />
          <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          value={description}
          onChange={(e) => {SetDescription(e.target.value)}}
        />
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          defaultValue=""
          onChange={(e) => {setCategory(e.target.value)}}
        >
          <MenuItem value={1}>Food</MenuItem>
          <MenuItem value={2}>Sport</MenuItem>
          <MenuItem value={3}>Business</MenuItem>
          <MenuItem value={4}>Technology</MenuItem>
          <MenuItem value={5}>Fashion and Beauty</MenuItem>
          <MenuItem value={6}>LifeStyle</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>

    <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
         { createObjectURL === null ? <><svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </> : <img src={createObjectURL} width={350} height={350} />  }
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={(e) => {uploadToClient(e)}} />
    </label>
</div> 
    {/* <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
           <img src={createObjectURL} width={350} height={350} /> <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={uploadToClient} />
    </label>
</div>  */}
    {/* <input  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={uploadToClient}/>
    <img src={createObjectURL || props.img} /> */}
        
        
        <Button  variant="outlined" size="medium" onClick={handleSubmit}>
          Submit
        </Button>
      
    
</div>

    </section>
    
    )
}

