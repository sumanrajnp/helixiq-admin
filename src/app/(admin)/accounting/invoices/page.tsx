import type { Metadata } from "next";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import React from "react";

export const metadata: Metadata = {
  title: "Invoicing | Accounting - HelixIQ",
  description: "Invoice management page for accounting system",
};

export default function InvoiceManagement() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Invoice Management" />
      <div className="space-y-6">
        <ComponentCard title="Invoice Overview">
          <div className="p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Invoice Management System
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Create, manage, and track invoices for your business operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">342</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Invoices</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">$45,230</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">23</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Overdue</div>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}