import { useState } from "react";

export default function Task({title}) {
  const [status, setStatus] = useState(false);

  const styles = `todo${status ? " is-completed" : ""}`;
  const content = status ? "Completed" : "Incomplete";

  const statusHandler = () => {
    setStatus((prev) => !prev);
  };

  return (
    <tr className={styles}>
      <td>{title}</td>
      <td>{content}</td>
      <td className="todo-action">
        <button className="btn todo-btn" onClick={statusHandler}>
          Change status
        </button>
      </td>
    </tr>
  );
}
