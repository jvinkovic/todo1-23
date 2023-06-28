import TaskList from './TaskList';
import AddTask from './AddTask';
import { useState } from 'react';
import { initialTasks, showOptions } from './Util';
import Button from 'react-bootstrap/Button';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksToShow, setTasksToShow] = useState(showOptions.ALL);

  const handleAdd = (taskText) => {
    const taskNumbers = tasks.map(t => t.number);
    const maxTaskNumber = Math.max(...taskNumbers);
    const newNumber = maxTaskNumber + 1;

    const task = {
      number: newNumber,
      title: taskText,
      done: false
    };

    setTasks([...tasks, task]);
  }

  const handleDelete = (taskNumber) => {
    const newTaskList = tasks.filter((t) => t.number !== taskNumber);
    setTasks(newTaskList);
  }

  const handleDone = (taskNumber) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find(t => t.number === taskNumber);
    // if(task.done === true) {
    //   task.done = false;
    // }else{
    //   task.done = true;
    // }

    task.done = !task.done;

    setTasks(tasksCopy);
  }

  const getTasksToShow = () => {
    switch(tasksToShow){
      case showOptions.COMPLETED:
        return tasks.filter(t => t.done === true);
      case showOptions.ACTIVE:
        return tasks.filter(t => t.done === false);
      default:
        return tasks;
    }
  }

  const clearCompleted = () => {
    const tasksCopy = [...tasks];
    const newTasks = tasksCopy.filter(t => t.done === false);

    setTasks(newTasks);
  }

  const activeButtonStyle = {backgroundColor: 'grey', color: 'white'};

  return (
    <div>
      <h1>My Tasks</h1>
      <p>
        <Button variant="light" style={tasksToShow === showOptions.ALL ? activeButtonStyle : {}} 
                onClick={() => setTasksToShow(showOptions.ALL)}>All</Button>
        
        <Button variant="light" style={tasksToShow === showOptions.ACTIVE ? activeButtonStyle : {}}
                onClick={() => setTasksToShow(showOptions.ACTIVE)}>Active</Button>
        
        <Button variant="light" style={tasksToShow === showOptions.COMPLETED ? activeButtonStyle : {}}
                onClick={() => setTasksToShow(showOptions.COMPLETED)}>Completed</Button>
      </p>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={getTasksToShow()} onDelete={handleDelete} onDone={handleDone} />
      { tasks.find(t => t.done)
        &&
        (<span onClick={clearCompleted}>Clear completed</span>)}
    </div>
  );
}

export default App;
