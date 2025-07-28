import { TrendingUp } from "lucide-react";

const StatCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  color = "orange",
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`p-3 rounded-xl ${
          color === "orange" ? "bg-orange-100" : "bg-gray-100"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            color === "orange" ? "text-orange-600" : "text-gray-600"
          }`}
        />
      </div>
      {trend && (
        <div className="flex items-center text-green-600 text-sm font-medium">
          <TrendingUp className="w-4 h-4 mr-1" />+{trend}%
        </div>
      )}
    </div>
    <div className="space-y-1">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-gray-600 font-medium">{title}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

export default StatCard;
