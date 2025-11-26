import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import React from "react";

export const metadata: Metadata = {
  title: "Employee Management | HR - HelixIQ",
  description: "Employee management page for HR system",
};

export default function EmployeeManagement() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Employee Management" />
      <div className="space-y-6">
        <ComponentCard title="Employee Overview">
          <div className="p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Employee Management System
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Manage employee records, track performance, and handle HR operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">156</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Employees</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Departments</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">New Hires</div>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}