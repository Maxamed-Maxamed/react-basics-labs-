import React from 'react';

// function Task(){
    
//     return (
//         <p>This is a task!</p>
        
//     )
// }

const Task = (props) => {
    
    return (
        <div className="card">
             <p className="title">{props.title}</p>
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
        </div>


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