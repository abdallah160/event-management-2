import { useRef } from "react";

export default function ProjectDetails({
  project,
  addTaskFun,
  handleDeleteTask,
  delFun,
}) {
  let taskValue = useRef();
  return (
    <div>
      <h2>{project.title}</h2>
      <button onClick={delFun}>Delete</button>
      <p>{project.date}</p>
      <p>{project.description}</p>
      <hr />
      <h2>Tasks</h2>
      <input type="text" ref={taskValue} />
      <button
        onClick={() =>
          addTaskFun(
            project.id,
            {
              name: taskValue.current.value,
              id: Date.now(),
            },
            taskValue,
          )
        }
      >
        Add Task
      </button>

      {project.tasks.map((task) => {
        return (
          <div key={task.id} className="flex">
            <p className="mr-4">{task.name}</p>
            <button onClick={() => handleDeleteTask(project.id, task.id)}>
              Clear
            </button>
          </div>
        );
      })}
    </div>
  );
}
