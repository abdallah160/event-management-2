import { useState } from "react";
import SideBar from "./components/SideBar";
import ProjectForm from "./components/ProjectForm";
import DefaultItem from "./components/DefaultItem";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [projects, setProjects] = useState([]);
  function handleAddTask(projectId, taskObject, theRef) {
    setProjects((prev) =>
      prev.map((item) => {
        if (item.id == projectId) {
          let newTasksArr = [...item.tasks, taskObject];
          return { ...item, tasks: newTasksArr };
        }
        return item;
      }),
    );
    theRef.current.value = "";
  }

  function handleCreateClick(projectObj) {
    setProjects((prev) => {
      let newArr = [...prev, projectObj];
      return newArr;
    });
  }

  function showDefault() {
    setSelectedProject(0);
  }
  function showForm() {
    setSelectedProject(1);
  }
  function handleSelectedProject(id) {
    setSelectedProject(id);
  }

  function handleDeleteTask(projectId, taskId) {
    setProjects((prev) =>
      prev.map((item) => {
        if (item.id == projectId) {
          let newTasksArr = item.tasks.filter((task) => task.id != taskId);
          return { ...item, tasks: newTasksArr };
        }
        return item;
      }),
    );
  }

  function handleDeleteProject(projectId) {
    setProjects((prev) => prev.filter((project) => project.id != projectId));
    showDefault();
  }
  let pageItem;
  if (selectedProject == 0) {
    pageItem = <DefaultItem showCreateFun={showForm} />;
  } else if (selectedProject == 1) {
    pageItem = <ProjectForm postFunction={handleCreateClick} showDefaultFun={showDefault} />;
  } else {
    for (let project of projects) {
      if (selectedProject == project.id) {
        pageItem = (
          <ProjectDetails
            project={project}
            addTaskFun={handleAddTask}
            handleDeleteTask={handleDeleteTask}
            delFun={() => handleDeleteProject(project.id)}
          />
        );
      }
    }
  }
  return (
    <div className="flex ">
      <SideBar
        formFunction={showForm}
        projects={projects}
        selectedProject={selectedProject}
        handleSelectedProject={handleSelectedProject}
      />
      {pageItem}
    </div>
  );
}

export default App;
