import React from "react";
import { BoxCubeIcon, TaskIcon, UserIcon, TimeIcon } from "@/icons";

const metricsData = [
  {
    title: "Total Inventory",
    value: "12,847",
    change: "+8.2%",
    changeType: "increase" as const,
    icon: <BoxCubeIcon />,
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Orders",
    value: "324",
    change: "+12.5%",
    changeType: "increase" as const,
    icon: <TaskIcon />,
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Warehouse Staff",
    value: "48",
    change: "+2.1%",
    changeType: "increase" as const,
    icon: <UserIcon />,
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Avg. Processing Time",
    value: "2.4h",
    change: "-15.3%",
    changeType: "decrease" as const,
    icon: <TimeIcon />,
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

export function WMSMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.title}
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {metric.value}
              </p>
              <div className="mt-2 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === "increase"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {metric.change}
                </span>
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                  vs last month
                </span>
              </div>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.bgColor}`}
            >
              <div className={`h-6 w-6 ${metric.iconColor}`}>
                {metric.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}