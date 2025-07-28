import { Calendar } from "lucide-react";

const RecentProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-gray-900 truncate">{project.name}</h4>
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          project.status === "completed"
            ? "bg-green-100 text-green-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {project.status === "completed" ? "Completed" : "Active"}
      </span>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium text-gray-900">{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${project.progress}%` }}
        />
      </div>
      <div className="flex items-center text-xs text-gray-500 mt-2">
        <Calendar className="w-3 h-3 mr-1" />
        Due: {new Date(project.dueDate).toLocaleDateString()}
      </div>
    </div>
  </div>
);

export default RecentProjectCard;
