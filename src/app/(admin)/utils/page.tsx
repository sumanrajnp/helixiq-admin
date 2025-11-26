"use client";
import React from "react";
import { PlugInIcon } from "@/icons";

export default function UtilsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Utility Tools
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Access all utility components and tools
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <PlugInIcon className="w-8 h-8" />
        </div>
      </div>

      {/* Welcome Content */}
      <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <PlugInIcon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Utils
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            This section contains all the utility tools and components. Use the sidebar navigation 
            to access different modules including Calendar, User Profile, Forms, Tables, Charts, 
            UI Elements, and Authentication pages.
          </p>
          
          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: "Calendar",
                description: "Schedule and event management",
                icon: "📅",
                path: "/calendar"
              },
              {
                title: "Forms",
                description: "Form elements and components",
                icon: "📝",
                path: "/form-elements"
              },
              {
                title: "Charts",
                description: "Data visualization components",
                icon: "📊",
                path: "/line-chart"
              },
              {
                title: "UI Elements",
                description: "Reusable UI components",
                icon: "🎨",
                path: "/alerts"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
                onClick={() => window.location.href = item.path}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <PlugInIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Total Modules</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Available utility modules
          </p>
        </div>

        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <PlugInIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Components</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">50+</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Reusable UI components
          </p>
        </div>

        <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <PlugInIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Ready to Use</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All components functional
          </p>
        </div>
      </div>
    </div>
  );
}