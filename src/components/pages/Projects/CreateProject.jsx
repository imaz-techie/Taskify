import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = ({ projects, setProjects }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
    priority: "medium",
    startDate: "",
    dueDate: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Project name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";

    if (
      formData.startDate &&
      formData.dueDate &&
      new Date(formData.startDate) >= new Date(formData.dueDate)
    ) {
      newErrors.dueDate = "Due date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!validateForm()) return;

    const newProject = {
      ...formData,
      id: Date.now(),
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    setProjects((prev) => [...prev, newProject]);

    localStorage.setItem("projects", JSON.stringify([...projects, newProject]));

    navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/projects")}
            className="text-orange-600 hover:text-orange-700 font-medium mb-4 flex items-center space-x-1"
          >
            <span>← Back to Projects</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Project
          </h1>
          <p className="text-gray-600">
            Fill in the details to create your new project
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-8 space-y-6">
            {/* Basic Information */}
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.name ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Enter project name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.description ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Describe your project"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.category ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="e.g., Development, Design, Marketing"
                  />
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Project Settings */}
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Project Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="active">Active</option>
                    <option value="on-hold">On Hold</option>
                    <option value="completed">Completed</option>
                    {/* <option value="cancelled">Cancelled</option> */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div></div> {/* Empty div for grid alignment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.startDate ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.startDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date *
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.dueDate ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.dueDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.dueDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 px-8 py-6">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setCurrentRoute("/projects")}
                className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-[#d4a373] hover:bg-orange-300 text-white rounded-xl transition-colors font-medium"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
