import { useState } from "react";

export default function AddTaskForm({ display, addTask, closeHandler }) {
  const [title, setTitle] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTask((tasks) => {
      return [
        ...tasks,
        {
          title,
          isCompleted: false,
        },
      ];
    });
    closeHandler(false);
  };

  return display ? (
    <form className="create-container" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Task</label>
        <input
          type="text"
          id="name"
          placeholder="Add task..."
          name="task"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div>
        <button type="submit">Create Task</button>
        <button onClick={(e) => {
            e.preventDefault()
            closeHandler()}}>Close</button>
      </div>
    </form>
  ) : (
    ""
  );
}
