import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const AddTaskForm = (props) => {

  return (

<Box
      component="form"
      sx={{
        '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
      }}
      onSubmit={props.submit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>

      <div>
                <InputLabel>Priority</InputLabel>
                <Select
                    value={props.priority}
                    name="priority"
                    onChange={(event) => props.change(event)}
                >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                </Select>
            </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>



//     <div>
//     <form onSubmit={props.submit}>
// <label>
//         Task title:
//         <input type="text" name="title" required onChange={(event) => props.change(event)} />
//     </label>
//     <br />
//     <label>
//         Due date:
//         <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
//     </label>
//     <br />
//     <label>
//         Details:
//         <input type="text" name="description" onChange={(event) => props.change(event)} />
//     </label>


//         <input type="submit" value="Submit" />
//         </form>
//     </div>


  )



  
};

export default AddTaskForm;
