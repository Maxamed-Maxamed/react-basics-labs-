

import { Chip } from '@mui/material'
// import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';


const Task = (props) => {
 
 

    return (
      <Grid
      item
      key={props.id}
      xs={12}
      md={4}
  >
      <Card sx={{
          backgroundColor: props.done ? 'lightgrey' : 'lightblue',
          padding: '20px'
          }}> 
          <CardHeader
              title={props.title}
              sx={{
              backgroundColor: 'white',
              borderRadius: '3px',
              padding: '20px',
              textAlign: 'center'
              }}
          />
          <CardContent>
              <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                  padding: '20px'
              }}
              >
              <Typography component="p" variant="subtitle2" color="text.primary">
                  Due: {props.deadline}
              </Typography>

              <Chip sx={{
                            position: 'relative',
                            alignItems: 'center',
                            color: "white",
                            backgroundColor: props.priority === "Low" ? "green" : ""
                                || props.priority === "Medium" ? "orange" : ""
                                    || props.priority === "High" ? "red" : ""
                        }} size="small" label={props.priority}>
                        </Chip>

              </Box>
              <Typography
                  component="p"
                  variant="subtitle1"
                  align="center"
                  sx={{ fontStyle: 'italic'}}
              >
                  {props.description}
              </Typography>
          </CardContent>
          <CardActions sx={{justifyContent: 'space-between', padding: '20px'}}>
              <Button variant="contained" size="small" color="success" onClick={props.markDone}>
                  Done
              </Button>
              <Button variant="contained" size="small" color="error" onClick={props.deleteTask}> 
                  Delete
              </Button>
          </CardActions>
      </Card>
  </Grid>












        // // <div className="card">
        // <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        //      <p className="title">{props.title}</p>
        //     <p>{props.title}</p>
        //     <p>Due: {props.deadline}</p>
        //     <p>{props.children}</p>

        //     {/* <button onClick={props.markDone}>Done</button> */}
        //     <button onClick={props.markDone} className='doneButton'>Done</button>
        //     <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        // </div>

    )

    
   
  //     return (
  //       <div className="container">
  //         <h1>Tasky</h1>
  //         {taskState.tasks.map((task) => (              
  //   <Task 
  //     title={task.title}
  //     description={task.description}
  //     deadline={task.deadline}
  //   />
  // ))} 
  //         <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
  //         <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
  //         <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
  //       </div>
  //       );








}
export default Task;