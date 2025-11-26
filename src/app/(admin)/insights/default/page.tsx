"use client";
import type { Metadata } from "next";
import { WMSMetrics } from "@/components/wms/WMSMetrics";
import InventoryChart from "@/components/wms/InventoryChart";
import WarehouseCapacity from "@/components/wms/WarehouseCapacity";
import RecentShipments from "@/components/wms/RecentShipments";
import TopProducts from "@/components/wms/TopProducts";
import { UserIcon, BrainIcon } from "@/icons";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "Warehouse Dashboard Insights | Admin Panel",
  description: "Warehouse management dashboard with operational metrics and KPIs",
};

export default function WarehouseInsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Warehouse Dashboard Insights
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Warehouse management system overview and operational metrics
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Data
          </span>
        </div>
      </div>

      {/* Dashboard Content - WMS Dashboard */}
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
    </div>
  );
}