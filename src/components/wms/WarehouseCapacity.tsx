"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WarehouseCapacity: React.FC = () => {
  const series = [75, 85, 60, 90]; // Capacity percentages for different zones

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
    labels: ["Zone A", "Zone B", "Zone C", "Zone D"],
    legend: {
      show: false,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const zones = [
    { name: "Zone A", percentage: 75, color: "bg-blue-500" },
    { name: "Zone B", percentage: 85, color: "bg-indigo-500" },
    { name: "Zone C", percentage: 60, color: "bg-sky-400" },
    { name: "Zone D", percentage: 90, color: "bg-cyan-500" },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Warehouse Capacity
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Current utilization by zones
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-6">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={280}
          />
        </div>

        <div className="w-full space-y-3">
          {zones.map((zone, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${zone.color}`}></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {zone.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-16 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className={`h-2 rounded-full ${zone.color}`}
                    style={{ width: `${zone.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {zone.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarehouseCapacity;