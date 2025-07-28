import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import SideMenu from "./components/Layout/SideMenu";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Projects from "./components/pages/Projects/Projects";
import CreateProject from "./components/pages/Projects/CreateProject";
import Tasks from "./components/pages/Tasks/Tasks";
import { useEffect, useState } from "react";
import { sampleProjects } from "./Utils/constants";

function App() {
  const storedprojects = JSON.parse(localStorage.getItem("projects"));

  const [projects, setProjects] = useState([]);

  // Initialize with sample data
  useEffect(() => {
    if (storedprojects) {
      setProjects([...storedprojects]);
    } else {
      setProjects([...sampleProjects]);
    }
  }, []);
  return (
    <div className="flex flex-row min-h-screen bg-grey">
      <SideMenu />

      <main className="main-width h-full">
        <NavBar />
        <section className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/projects"
              element={
                <Projects projects={projects} setProjects={setProjects} />
              }
            />
            <Route
              path="projects/create"
              element={
                <CreateProject projects={projects} setProjects={setProjects} />
              }
            />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
