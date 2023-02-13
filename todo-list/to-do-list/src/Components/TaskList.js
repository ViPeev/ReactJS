import { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./addForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [formView, setFormView] = useState(false);

  const buttonHandler = (e) => {
    e.preventDefault();
    setFormView((display) => !display);
  };

  return (
    <main className="main">
      <section className="todo-list-container">
        <h1>Todo List</h1>
        {!formView && (
          <div className="add-btn-container">
            <button className="btn" onClick={buttonHandler}>
              + Add new Todo
            </button>
          </div>
        )}
        {formView && (
          <AddTaskForm
            closeHandler={setFormView}
            addTask={setTasks}
            display={formView}
          />
        )}

        {tasks.length ? (<div className="table-wrapper">
          {/* <div className="loading-container">
          <div className="loading-spinner">
            <span className="loading-spinner-text">Loading</span>
          </div>
        </div> */}

          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
              <tbody>
                {tasks.map((current) => (
                  <Task {...current} />
                  ))}
              </tbody>
          </table>
        </div>
        ) : (
          <h1 style={{ textAlign: "center",textDecoration:"underline" }}>There are no tasks yet!</h1>
        )}
      </section>
    </main>
  );
}
