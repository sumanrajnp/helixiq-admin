import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Link from "next/link";
import { 
  BoxCubeIcon, 
  InventoryIcon, 
  TaskIcon, 
  UserIcon, 
  ArrowRightIcon,
  GridIcon,
  ListIcon,
  PieChartIcon
} from "@/icons";
import React from "react";

export const metadata: Metadata = {
  title: "Inventory Management Dashboard | TailAdmin",
  description: "Comprehensive inventory management system dashboard",
};

const inventoryModules = [
  {
    title: "Stock Operations",
    icon: <BoxCubeIcon />,
    color: "bg-blue-500",
    items: [
      { name: "Receipts (Inbound)", path: "/inventory/receipts" },
      { name: "Deliveries (Outbound)", path: "/inventory/deliveries" },
      { name: "Internal Transfers", path: "/inventory/transfers" },
      { name: "Returns", path: "/inventory/returns" },
      { name: "Adjustments", path: "/inventory/adjustments" },
    ],
  },
  {
    title: "Warehouse Configuration",
    icon: <GridIcon />,
    color: "bg-green-500",
    items: [
      { name: "Warehouses", path: "/inventory/warehouses" },
      { name: "Storage Locations", path: "/inventory/locations" },
      { name: "Bins & Racks", path: "/inventory/bins-racks" },
      { name: "Zones", path: "/inventory/zones" },
      { name: "Aisle Management", path: "/inventory/aisles" },
    ],
  },
  {
    title: "Product Management",
    icon: <InventoryIcon />,
    color: "bg-purple-500",
    items: [
      { name: "Item Master", path: "/inventory/item-master" },
      { name: "Product Categories", path: "/inventory/categories" },
      { name: "SKU Management", path: "/inventory/sku" },
      { name: "Product Variants", path: "/inventory/variants" },
      { name: "Product Images", path: "/inventory/images" },
    ],
  },
  {
    title: "Stock Tracking",
    icon: <PieChartIcon />,
    color: "bg-orange-500",
    items: [
      { name: "Inventory Levels", path: "/inventory/levels" },
      { name: "Stock Valuation", path: "/inventory/valuation" },
      { name: "Stock Reconciliation", path: "/inventory/reconciliation" },
      { name: "Physical Count", path: "/inventory/physical-count" },
      { name: "ABC Analysis", path: "/inventory/abc-analysis" },
    ],
  },
  {
    title: "Serial & Batch Management",
    icon: <TaskIcon />,
    color: "bg-indigo-500",
    items: [
      { name: "Serial Numbers", path: "/inventory/serial-numbers" },
      { name: "Batch Management", path: "/inventory/batch" },
      { name: "Expiration Tracking", path: "/inventory/expiration" },
      { name: "Lot Traceability", path: "/inventory/lot-traceability" },
      { name: "Barcode Management", path: "/inventory/barcode" },
    ],
  },
  {
    title: "Stock Valuation",
    icon: <ListIcon />,
    color: "bg-red-500",
    items: [
      { name: "FIFO Method", path: "/inventory/fifo" },
      { name: "AVCO Method", path: "/inventory/avco" },
      { name: "Standard Cost", path: "/inventory/standard-cost" },
      { name: "Valuation Reports", path: "/inventory/valuation-reports" },
      { name: "Cost Adjustment", path: "/inventory/cost-adjustment" },
    ],
  },
];

export default function InventoryDashboard() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Inventory Management" />
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
            <InventoryIcon />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Inventory Management
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Comprehensive inventory and stock management system
            </p>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {inventoryModules.map((module, index) => (
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

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12,847</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">324</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active SKUs</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">23</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Low Stock Items</div>
        </div>
        <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$2.4M</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Value</div>
        </div>
      </div>
    </div>
  );
}