import Input from '@mui/material/Input';
import React from 'react';
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

export default function blogedit({props}){
    
  const [newcategory, setNewCategory] = React.useState();
  const [titles, setTitle] = React.useState();
  const [subtitles, setSubTitle] = React.useState();
  const [image, setImage] =React.useState(null);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      console.log(i)
      setImage(i);
      
      setCreateObjectURL(URL.createObjectURL(i));
     
    }
  };

  const handleChange = (event) => {
    setNewCategory(event.target.value);
  };
    return(
        <section className="container  mx-auto md:px-20 ">
        <h1 className='font-bold text-4xl uppercase py-12 text-center'>Edit content</h1>
        <div className="flex flex-col gap-5 w-auto8 ">
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue={props.title}
         
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Subtitle"
          multiline
          maxRows={4}
          defaultValue={props.subtitle}
        />
          <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue={props.description}
        />
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          defaultValue={props.id || 'Select'}
          onChange={handleChange}
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
           { <img src={createObjectURL || props.img} width={350} height={350} /> || <> <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p></>}
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={uploadToClient} />
    </label>
</div> 
    {/* <input  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={uploadToClient}/>
    <img src={createObjectURL || props.img} /> */}
        
        <Button variant="outlined" size="medium">
          Submit
        </Button>
      
</div>

    </section>
    
    )
}

