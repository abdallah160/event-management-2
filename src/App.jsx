import { useState } from "react";
import SideBar from "./components/SideBar";
import ProjectForm from "./components/ProjectForm";


function App() {
  const [formClass, setFormClass] = useState('hidden');
  function showForm() {
    setFormClass((prev) => prev == 'hidden' ? 'block' : 'hidden');
  }
  return (
    <>
      <SideBar formFunction={showForm} />
      <ProjectForm className={formClass} />
    </>
  );
}

export default App;
