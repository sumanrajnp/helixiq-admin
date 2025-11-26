import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import React from "react";

export const metadata: Metadata = {
  title: "Stock Management | Inventory - TailAdmin",
  description: "Stock management page for inventory system",
};

export default function StockManagement() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Stock Management" />
      <div className="space-y-6">
        <ComponentCard title="Stock Overview">
          <div className="p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Stock Management System
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Manage your inventory stock levels, track items, and monitor stock movements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stock Level</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">23</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Low Stock</div>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}