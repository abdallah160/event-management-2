export default function ProjectDetails({ project }) {
    return (
        <div>
            <h2>{project.title}</h2>
            <button>Delete</button>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <hr />
            <h2>Tasks</h2>
            <input type="text" />
            <button>Add Task</button>
        </div>
    )
}