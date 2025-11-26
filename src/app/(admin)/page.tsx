"use client";
import type { Metadata } from "next";
import { WMSMetrics } from "@/components/wms/WMSMetrics";
import InventoryChart from "@/components/wms/InventoryChart";
import WarehouseCapacity from "@/components/wms/WarehouseCapacity";
import RecentShipments from "@/components/wms/RecentShipments";
import TopProducts from "@/components/wms/TopProducts";
import { UserIcon, BrainIcon } from "@/icons";
import React, { useState } from "react";

// Note: Since we're using "use client", we can't export metadata from this component
// The metadata would need to be moved to a parent server component or layout

type ViewMode = "personal" | "ai";

export default function WMSDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>("personal");

  const toggleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <div>
      {/* Toggle Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              WMS Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Warehouse Management System Overview
            </p>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => toggleViewMode("personal")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === "personal"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <UserIcon className="w-4 h-4" />
              Personal
            </button>
            <button
              onClick={() => toggleViewMode("ai")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === "ai"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <BrainIcon className="w-4 h-4" />
              AI
            </button>
          </div>
        </div>
      </div>

      {/* Content based on view mode */}
      {viewMode === "personal" ? (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Metrics Row */}
          <div className="col-span-12">
            <WMSMetrics />
          </div>

          {/* Charts Row */}
          <div className="col-span-12 space-y-6 xl:col-span-8">
            <InventoryChart />
          </div>

          <div className="col-span-12 xl:col-span-4">
            <WarehouseCapacity />
          </div>

          {/* Products and Shipments Row */}
          <div className="col-span-12 xl:col-span-5">
            <TopProducts />
          </div>

          <div className="col-span-12 xl:col-span-7">
            <RecentShipments />
          </div>
        </div>
      ) : (
        /* AI Coming Soon */
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered WMS Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              We're developing intelligent warehouse management features powered by AI to optimize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              {[
                { title: "Smart Inventory", desc: "AI-driven stock optimization" },
                { title: "Predictive Analytics", desc: "Forecast demand patterns" },
                { title: "Auto Routing", desc: "Optimize picking routes" },
                { title: "Quality Control", desc: "AI-powered inspections" }
              ].map((feature, index) => (
                <div key={index} className="bg-white dark:bg-white/[0.03] rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
