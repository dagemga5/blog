import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
export default function blogcreate(){

    return(
        <section className="container  mx-auto md:px-20 ">
        <h1 className='font-bold text-4xl uppercase py-12 text-center'>Create content</h1>
        <div className="flex flex-col gap-5">
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Subtitle"
          multiline
          maxRows={4}
        />
          <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
        />
        <Input label="File upload" type="file" placeholder="Select file..." />
      
</div>

    </section>
    
    )
}

