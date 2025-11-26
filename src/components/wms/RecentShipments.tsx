import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Shipment {
  id: string;
  orderNumber: string;
  destination: string;
  items: number;
  weight: string;
  status: "Pending" | "In Transit" | "Delivered" | "Delayed";
  date: string;
}

const shipmentData: Shipment[] = [
  {
    id: "1",
    orderNumber: "WMS-2024-001",
    destination: "New York, NY",
    items: 24,
    weight: "145.2 kg",
    status: "In Transit",
    date: "2024-11-26",
  },
  {
    id: "2",
    orderNumber: "WMS-2024-002",
    destination: "Los Angeles, CA",
    items: 18,
    weight: "89.5 kg",
    status: "Delivered",
    date: "2024-11-25",
  },
  {
    id: "3",
    orderNumber: "WMS-2024-003",
    destination: "Chicago, IL",
    items: 32,
    weight: "201.8 kg",
    status: "Pending",
    date: "2024-11-26",
  },
  {
    id: "4",
    orderNumber: "WMS-2024-004",
    destination: "Houston, TX",
    items: 15,
    weight: "67.3 kg",
    status: "Delayed",
    date: "2024-11-24",
  },
  {
    id: "5",
    orderNumber: "WMS-2024-005",
    destination: "Phoenix, AZ",
    items: 28,
    weight: "156.7 kg",
    status: "In Transit",
    date: "2024-11-26",
  },
  {
    id: "6",
    orderNumber: "WMS-2024-006",
    destination: "Philadelphia, PA",
    items: 21,
    weight: "112.4 kg",
    status: "Delivered",
    date: "2024-11-25",
  },
  {
    id: "7",
    orderNumber: "WMS-2024-007",
    destination: "San Antonio, TX",
    items: 35,
    weight: "198.6 kg",
    status: "In Transit",
    date: "2024-11-26",
  },
  {
    id: "8",
    orderNumber: "WMS-2024-008",
    destination: "San Diego, CA",
    items: 12,
    weight: "78.9 kg",
    status: "Pending",
    date: "2024-11-26",
  },
  {
    id: "9",
    orderNumber: "WMS-2024-009",
    destination: "Dallas, TX",
    items: 29,
    weight: "167.3 kg",
    status: "Delivered",
    date: "2024-11-25",
  },
  {
    id: "10",
    orderNumber: "WMS-2024-010",
    destination: "San Jose, CA",
    items: 19,
    weight: "95.7 kg",
    status: "Delayed",
    date: "2024-11-24",
  },
  {
    id: "11",
    orderNumber: "WMS-2024-011",
    destination: "Austin, TX",
    items: 26,
    weight: "134.8 kg",
    status: "In Transit",
    date: "2024-11-26",
  },
];

const getStatusColor = (status: Shipment["status"]) => {
  switch (status) {
    case "Delivered":
      return "success";
    case "In Transit":
      return "info";
    case "Pending":
      return "warning";
    case "Delayed":
      return "error";
    default:
      return "primary";
  }
};

export default function RecentShipments() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Shipments
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Latest outbound shipments and their status
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-b border-gray-200 dark:border-gray-800">
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Order Number
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Destination
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Items
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Weight
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Date
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipmentData.map((shipment) => (
              <TableRow
                key={shipment.id}
                className="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
              >
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {shipment.orderNumber}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    {shipment.destination}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    {shipment.items}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    {shipment.weight}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <Badge color={getStatusColor(shipment.status)}>
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(shipment.date).toLocaleDateString()}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}