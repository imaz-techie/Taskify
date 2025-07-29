import {
  BarChart3,
  CheckCircle,
  Filter,
  FolderOpen,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectsApp = ({ projects, setProjects }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const navigate = useNavigate();

  const ProjectsList = () => {
    const filteredProjects = projects.filter((project) => {
      const matchesFilter =
        filterStatus === "all" || project.status === filterStatus;
      return matchesFilter;
    });

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Projects
                </h1>
                <p className="text-gray-600">
                  Manage and track all your projects in one place
                </p>
              </div>
              <button
                onClick={() => navigate("/projects/create")}
                className="bg-[#d4a373] hover:bg-orange-300 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <Plus className="w-5 h-5" />
                <span>Create Project</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FolderOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {projects.length}
                    </p>
                    <p className="text-sm text-gray-600">Total Projects</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {projects.filter((p) => p.status === "active").length}
                    </p>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {projects.filter((p) => p.status === "completed").length}
                    </p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                  {/* <option value="cancelled">Cancelled</option> */}
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <ProjectsList />
    </div>
  );
};

export default ProjectsApp;
