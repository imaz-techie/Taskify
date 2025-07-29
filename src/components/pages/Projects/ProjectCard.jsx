import { Calendar, Edit2, Eye, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "on-hold":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d4a373",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedProjects =
          JSON.parse(localStorage.getItem("projects")) || [];
        const updatedProjects = storedProjects.filter(
          (item) => item.id !== project.id
        );
        localStorage.setItem("projects", JSON.stringify(updatedProjects));

        Swal.fire({
          title: "Deleted!",
          text: "Your project has been deleted.",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4 mt-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {project.name}
            </h3>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                project.status
              )}`}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex space-x-2 ml-4 absolute top-2 right-2">
        {/* <button className="p-2 text-gray-400 hover:text-orange-400 hover:bg-orange-50 rounded-lg transition-colors">
          <Eye className="w-4 h-4" />
        </button> */}
        <button
          onClick={handleDelete}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium text-gray-900">
            {project.status === "completed" ? "100%" : `${project.progress}%`}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-300 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${
                project.status === "completed" ? 100 : project.progress
              }%`,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-24 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <div className="text-xs flex flex-col gap-1">
              <p className="text-gray-500">Due Date</p>
              <p className="font-medium text-gray-900">
                {new Date(project.dueDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-500">Priority:</span>
            <span
              className={`text-xs font-medium ${getPriorityColor(
                project.priority
              )}`}
            >
              {project.priority.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
