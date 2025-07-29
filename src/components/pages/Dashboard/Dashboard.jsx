import { CheckCircle, Clock, FolderOpen, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  monthlyProgressData,
  taskProgressData,
} from "../../../Utils/constants";
import StatCard from "../../Common/StatCard";

const Dashboard = () => {
  const [dashboardData] = useState({
    totalProjects: 12,
    activeProjects: 8,
    completedProjects: 4,
    totalTasks: 64,
    completedTasks: 42,
    pendingTasks: 22,
    overdueTasks: 5,
    teamMembers: 15,
  });

  const projectStatusData = [
    { name: "Active", value: dashboardData.activeProjects, color: "#FF8C00" },
    {
      name: "Completed",
      value: dashboardData.completedProjects,
      color: "#FFB84D",
    },
    { name: "On Hold", value: 2, color: "#FFF4E6" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening with your projects.
              </p>
            </div>
            <button className="btn-primary">
              <Plus className="w-5 h-5" />
              <Link to="/projects/create">
                <span>New Project</span>
              </Link>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={FolderOpen}
            title="Total Projects"
            value={dashboardData.totalProjects}
            subtitle={`${dashboardData.activeProjects} active`}
            trend={12}
          />
          <StatCard
            icon={CheckCircle}
            title="Completed Tasks"
            value={dashboardData.completedTasks}
            subtitle={`${dashboardData.pendingTasks} pending`}
            trend={8}
          />
          <StatCard
            icon={Clock}
            title="Pending Tasks"
            value={dashboardData.pendingTasks}
            subtitle={`${dashboardData.overdueTasks} overdue`}
            color="gray"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Project Status Pie Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Project Status
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="none"
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {projectStatusData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Task Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Weekly Progress
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar
                    dataKey="completed"
                    fill="#FF8C00"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey="pending" fill="#FFB84D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Monthly Trend
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#FF8C00"
                    strokeWidth={3}
                    dot={{ fill: "#FF8C00", strokeWidth: 2, r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="tasks"
                    stroke="#FFB84D"
                    strokeWidth={3}
                    dot={{ fill: "#FFB84D", strokeWidth: 2, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
