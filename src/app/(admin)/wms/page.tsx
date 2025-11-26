import type { Metadata } from "next";
import { WMSMetrics } from "@/components/wms/WMSMetrics";
import InventoryChart from "@/components/wms/InventoryChart";
import WarehouseCapacity from "@/components/wms/WarehouseCapacity";
import RecentShipments from "@/components/wms/RecentShipments";
import TopProducts from "@/components/wms/TopProducts";
import React from "react";

export const metadata: Metadata = {
  title:
    "WMS Dashboard | HelixIQ - Next.js Warehouse Management System",
  description: "Warehouse Management System Dashboard for HelixIQ Template",
};

export default function WMSDashboard() {
  return (
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
  );
}