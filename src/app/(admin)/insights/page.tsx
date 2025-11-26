"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PieChartIcon, ArrowRightIcon } from "@/icons";

type DashboardType = "ecommerce" | "default";

export default function InsightsPage() {
  const [selectedDashboard, setSelectedDashboard] = useState<DashboardType>("ecommerce");

  const dashboards = [
    {
      id: "ecommerce" as const,
      name: "E-commerce Dashboard",
      description: "Sales metrics, revenue tracking, and customer analytics",
      path: "/insights/ecommerce",
      color: "bg-blue-500",
      features: [
        "Revenue Analytics",
        "Sales Performance",
        "Customer Insights",
        "Product Analytics",
        "Order Tracking",
        "Market Trends"
      ]
    },
    {
      id: "default" as const,
      name: "Default Dashboard",
      description: "General business overview and key performance indicators",
      path: "/insights/default",
      color: "bg-green-500",
      features: [
        "Business Overview",
        "KPI Tracking",
        "Performance Metrics",
        "Activity Summary",
        "System Health",
        "User Analytics"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Business Insights
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Comprehensive analytics and dashboard views
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <PieChartIcon className="w-8 h-8" />
        </div>
      </div>

      {/* Dashboard Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.id}
            className={`rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
              selectedDashboard === dashboard.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400"
                : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-gray-700"
            }`}
            onClick={() => setSelectedDashboard(dashboard.id)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${dashboard.color} flex items-center justify-center`}>
                  <PieChartIcon className="w-6 h-6 text-white" />
                </div>
                <Link
                  href={dashboard.path}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
                >
                  View Dashboard
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {dashboard.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {dashboard.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Key Features:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {dashboard.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <PieChartIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Total Dashboards</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Available dashboard views
          </p>
        </div>

        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <PieChartIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Data Sources</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">8+</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Connected data sources
          </p>
        </div>

        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <PieChartIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Real-time Updates</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Live</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Data refresh frequency
          </p>
        </div>
      </div>
    </div>
  );
}