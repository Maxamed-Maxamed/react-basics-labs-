// import logo from './logo.svg';

import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';



function App() {

  
  /* The code `const [ taskState, setTaskState ] = useState({ tasks: [...] });` is using the `useState`
  hook in React to create a state variable called `taskState` and a function called `setTaskState`
  to update the state. */
  // const [ taskState, setTaskState ] = useState({
  //   tasks: [
  //     { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
  //     { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
  //     { title: "Tidy up", deadline: "Today" }
  //   ]
  // });
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      {id: 4,  title:"unkown", deadline:"unknow"},
      {id: 5,  title:"unkown", deadline:"unknow"}
    ]
  });

  // return (
  //   // <div className="App">
  //   <div className="container">
  //     <h1>Tasky</h1>

      
  //     <Task title="Dishes" deadline="Today" />
  //     <Task title="Laundry" deadline="Tomorrow" />
  //     <Task title="Tidy" deadline="Today" />
  //     <Task title="Laundry" deadline="Tomorrow">
  //       Fold laundry and put away
  //   </Task>
  //   </div>
    
  // );
  return (
    <div className="container">
      <h1>Tasky</h1>
      {/* {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
    /> */}

    {taskState.tasks.map((task) => (              
      <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key={task.id}
      />
    ))}
  
  

      {/* <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
     */}
    </div>
  );
  
  }



export default App;

