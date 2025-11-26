import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import CountryMap from "@/components/ecommerce/CountryMap";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import DemographicCard from "@/components/ecommerce/DemographicCard";

export const metadata: Metadata = {
  title: "E-commerce Insights | Admin Panel",
  description: "E-commerce dashboard with sales analytics and performance metrics",
};

export default function EcommerceInsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            E-commerce Insights
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sales analytics and performance metrics
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Live Data
          </span>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Metrics Row */}
        <div className="col-span-12">
          <EcommerceMetrics />
        </div>

        {/* Charts Row */}
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <StatisticsChart />
        </div>

        {/* Orders and Map Row */}
        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <CountryMap />
        </div>

        {/* Target and Demographics Row */}
        <div className="col-span-12 xl:col-span-4">
          <MonthlyTarget />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <DemographicCard />
        </div>
      </div>
    </div>
  );
}