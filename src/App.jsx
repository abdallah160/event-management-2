import { useState } from "react";
import SideBar from "./components/SideBar";
import ProjectForm from "./components/ProjectForm";
import DefaultItem from "./components/DefaultItem";
import ProjectDetails from "./components/ProjectDetails";


function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [projects, setProjects] = useState([]);

  function handleCreateClick(projectObj) {
    setProjects((prev) => {
      let newArr = [...prev, projectObj];
      return newArr
    })

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


  let pageItem;

  if ((selectedProject) == 0) {
    pageItem = <DefaultItem />

  }
  else if (selectedProject == 1) {
    pageItem = <ProjectForm postFunction={handleCreateClick} />
  }
  else {
    for (let project of projects) {
      if (selectedProject == project.id) {
        pageItem = <ProjectDetails project={project} />

      }
    }

  }
  return (
    <div className="flex ">
      <SideBar formFunction={showForm} projects={projects} selectedProject={selectedProject} handleSelectedProject={handleSelectedProject} />
      {pageItem}
    </div>
  );
}

export default App;
