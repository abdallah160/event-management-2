export default function SideBar({ formFunction, projects = [], handleSelectedProject, selectedProject, }) {
    return (
        <aside className="w-1/6 px-8 py-16 bg-stone-900 h-screen text-stone-50">
            <h2 className="mb-8 font-bold">Your Projects</h2>
            <button onClick={formFunction}
                className="px-4 py-2 bg-stone-700 mb-8 hover:bg-stone-600">
                + Add Project
            </button>
            <ul>
                {projects.map(project => {
                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => handleSelectedProject(project.id)}
                                className={`text-left px-2 py-1 text-stone-200 hover:bg-stone-800 ${project.id === selectedProject ? "bg-stone-800" : ""}`}>
                                {project.title}
                            </button>
                        </li>
                    )
                }
                )}
            </ul>
        </aside>
    );
}