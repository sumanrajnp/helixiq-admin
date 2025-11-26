import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Link from "next/link";
import { 
  BoxCubeIcon, 
  TaskIcon, 
  UserIcon, 
  ArrowRightIcon,
  GridIcon,
  ListIcon,
  PieChartIcon,
  DocsIcon,
  MailIcon
} from "@/icons";
import React from "react";

export const metadata: Metadata = {
  title: "Warehouse Operations Dashboard | TailAdmin",
  description: "Comprehensive warehouse operations management system",
};

const warehouseModules = [
  {
    title: "Receiving",
    icon: <BoxCubeIcon />,
    color: "bg-blue-500",
    items: [
      { name: "Purchase Receipt", path: "/warehouse/purchase-receipt" },
      { name: "Goods Inward", path: "/warehouse/goods-inward" },
      { name: "Quality Inspection", path: "/warehouse/quality-inspection" },
      { name: "Putaway", path: "/warehouse/putaway" },
      { name: "Receiving Reports", path: "/warehouse/receiving-reports" },
    ],
  },
  {
    title: "Picking & Packing",
    icon: <TaskIcon />,
    color: "bg-green-500",
    items: [
      { name: "Pick Lists", path: "/warehouse/pick-lists" },
      { name: "Batch Picking", path: "/warehouse/batch-picking" },
      { name: "Wave Picking", path: "/warehouse/wave-picking" },
      { name: "Cluster Picking", path: "/warehouse/cluster-picking" },
      { name: "Packing Operations", path: "/warehouse/packing-operations" },
      { name: "Packing Slips", path: "/warehouse/packing-slips" },
    ],
  },
  {
    title: "Shipping",
    icon: <MailIcon />,
    color: "bg-purple-500",
    items: [
      { name: "Outbound Orders", path: "/warehouse/outbound-orders" },
      { name: "Shipment Creation", path: "/warehouse/shipment-creation" },
      { name: "Carrier Integration", path: "/warehouse/carrier-integration" },
      { name: "Delivery Tracking", path: "/warehouse/delivery-tracking" },
      { name: "Shipping Labels", path: "/warehouse/shipping-labels" },
    ],
  },
  {
    title: "Cycle Counting",
    icon: <PieChartIcon />,
    color: "bg-orange-500",
    items: [
      { name: "Count Schedules", path: "/warehouse/count-schedules" },
      { name: "Count Teams", path: "/warehouse/count-teams" },
      { name: "Count Verification", path: "/warehouse/count-verification" },
      { name: "Variance Analysis", path: "/warehouse/variance-analysis" },
    ],
  },
  {
    title: "Returns Management",
    icon: <ListIcon />,
    color: "bg-red-500",
    items: [
      { name: "Return Orders", path: "/warehouse/return-orders" },
      { name: "Return Receipt", path: "/warehouse/return-receipt" },
      { name: "Damage Assessment", path: "/warehouse/damage-assessment" },
      { name: "Credit Note Generation", path: "/warehouse/credit-note" },
    ],
  },
];

const barcodeModules = [
  {
    title: "Barcode Configuration",
    icon: <GridIcon />,
    color: "bg-indigo-500",
    items: [
      { name: "Barcode Standards", path: "/barcode/standards" },
      { name: "Barcode Generation", path: "/barcode/generation" },
      { name: "Barcode Printing", path: "/barcode/printing" },
      { name: "Label Templates", path: "/barcode/templates" },
    ],
  },
  {
    title: "Barcode Operations",
    icon: <TaskIcon />,
    color: "bg-teal-500",
    items: [
      { name: "Scan Receipt", path: "/barcode/scan-receipt" },
      { name: "Scan Delivery", path: "/barcode/scan-delivery" },
      { name: "Scan Transfer", path: "/barcode/scan-transfer" },
      { name: "Scan Count", path: "/barcode/scan-count" },
      { name: "Scan Return", path: "/barcode/scan-return" },
    ],
  },
  {
    title: "RFID Management",
    icon: <DocsIcon />,
    color: "bg-pink-500",
    items: [
      { name: "RFID Tag Assignment", path: "/rfid/tag-assignment" },
      { name: "RFID Reader Setup", path: "/rfid/reader-setup" },
      { name: "RFID Operations", path: "/rfid/operations" },
    ],
  },
  {
    title: "Mobile Barcode App",
    icon: <UserIcon />,
    color: "bg-cyan-500",
    items: [
      { name: "Receiving Scan", path: "/mobile/receiving-scan" },
      { name: "Picking Scan", path: "/mobile/picking-scan" },
      { name: "Inventory Scan", path: "/mobile/inventory-scan" },
      { name: "Offline Sync", path: "/mobile/offline-sync" },
    ],
  },
];

export default function WarehouseDashboard() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Warehouse Operations" />
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white">
            <BoxCubeIcon />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Warehouse Operations
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Complete warehouse management and barcode operations
            </p>
          </div>
        </div>
      </div>

      {/* Warehouse Operations Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Warehouse Operations
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {warehouseModules.map((module, index) => (
            <div
              key={index}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Module Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <div className="w-6 h-6">
                    {module.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                </div>
              </div>

              {/* Module Items */}
              <div className="space-y-2">
                {module.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.path}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {item.name}
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barcode & RFID Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Barcode & RFID
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {barcodeModules.map((module, index) => (
            <div
              key={index}
              className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Module Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <div className="w-6 h-6">
                    {module.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                </div>
              </div>

              {/* Module Items */}
              <div className="space-y-2">
                {module.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.path}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {item.name}
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">1,247</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Daily Receipts</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">856</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Shipments</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">98.5%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Pick Accuracy</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2.4h</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg Process Time</div>
        </div>
      </div>
    </div>
  );
}