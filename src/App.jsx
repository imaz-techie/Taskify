import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { sampleProjects } from "./Utils/constants";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AuthenticatedLayout from "./components/pages/Login/AuthenticatedLayout";
import Login from "./components/pages/Login/Login";
import RequireAuth from "./components/pages/Login/RequireAuth";
import CreateProject from "./components/pages/Projects/CreateProject";
import Projects from "./components/pages/Projects/Projects";
import Tasks from "./components/pages/Tasks/Tasks";

function App() {
  const storedprojects = JSON.parse(localStorage.getItem("projects"));

  const [projects, setProjects] = useState([]);

  // Initialize with sample data
  useEffect(() => {
    if (storedprojects && storedprojects.length > 0) {
      setProjects([...storedprojects]);
    } else {
      setProjects([...sampleProjects]);
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="*"
        element={
          localStorage.getItem("login") === "true" ? (
            <Navigate to="/" />
          ) : (
            <Navigate to="/login" />
          )
        }
      /> */}

      <Route
        path="/"
        element={
          <RequireAuth>
            <AuthenticatedLayout>
              <Dashboard />
            </AuthenticatedLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/projects"
        element={
          <RequireAuth>
            <AuthenticatedLayout>
              <Projects projects={projects} setProjects={setProjects} />
            </AuthenticatedLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/projects/create"
        element={
          <RequireAuth>
            <AuthenticatedLayout>
              <CreateProject projects={projects} setProjects={setProjects} />
            </AuthenticatedLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/tasks"
        element={
          <RequireAuth>
            <AuthenticatedLayout>
              <Tasks />
            </AuthenticatedLayout>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
