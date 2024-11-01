import Todo from "../props/components/Todo.jsx"
import './App.css'
import Form from "../props/Form.jsx"
import FilterButton from "../props/FilterButton.jsx";
import { useState, useRef, useEffect } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};


const FILTER_NAMES = Object.keys(FILTER_MAP);

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// useEffect(() => {
//   if (tasks.length < prevTaskLength) {
//     listHeadingRef.current.focus();
//   }
// }, [tasks.length, prevTaskLength]);


function App(props) {
 const [filter, setFilter] = useState("All");

 const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

  function addTask(name) {
    const newTask = {
      id: `todo-${crypto.randomUUID()}`, name, completed:
        false
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
    // console.log(id);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    editTask={editTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  
  
  const listHeadingRef = useRef(null);
  
  <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>

const prevTaskLength = usePrevious(tasks.length);

  return (
    <div className="todoapp stack-large">
      <img src="./public/react.svg" alt="" />
      <h1>TodoMatic</h1>
      {/* <img className="simsons" src="./public/Simsons.png" alt="" /> */}
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
     {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}
export default App;



