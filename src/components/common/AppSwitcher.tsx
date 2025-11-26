"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { 
  AppsIcon, 
  InventoryIcon, 
  HRIcon, 
  AccountingIcon, 
  SalesIcon, 
  CRMIcon, 
  AdminIcon,
  ChevronDownIcon,
  BoxCubeIcon,
  BrainIcon,
  PieChartIcon,
  PlugInIcon,
  BoxIcon,
  GridIcon 
} from "@/icons";

interface App {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  path?: string;
  features?: { name: string; path: string }[];
}

const apps: App[] = [
  {
    id: "inventory",
    name: "Inventory",
    icon: <GridIcon />,
    description: "Manage stock and warehouse operations",
    color: "bg-blue-500",
    path: "/inventory-dashboard",
  },
  {
    id: "warehouse",
    name: "Warehouse",
    icon: <BoxIcon />,
    description: "Warehouse operations and management",
    color: "bg-teal-500",
    path: "/warehouse-dashboard",
  },
  {
    id: "hr",
    name: "HR",
    icon: <HRIcon />,
    description: "Human resources management",
    color: "bg-green-500",
    features: [
      { name: "Employees", path: "/hr/employees" },
      { name: "Payroll", path: "/hr/payroll" },
      { name: "Attendance", path: "/hr/attendance" },
      { name: "Leave Management", path: "/hr/leave" },
      { name: "Performance", path: "/hr/performance" },
    ],
  },
  {
    id: "admin",
    name: "Admin",
    icon: <AdminIcon />,
    description: "System administration and settings",
    color: "bg-purple-500",
    features: [
      { name: "User Management", path: "/admin/users" },
      { name: "Roles & Permissions", path: "/admin/roles" },
      { name: "System Settings", path: "/admin/settings" },
      { name: "Audit Logs", path: "/admin/audit" },
      { name: "Backup", path: "/admin/backup" },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    icon: <AccountingIcon />,
    description: "Financial management and reporting",
    color: "bg-orange-500",
    features: [
      { name: "Chart of Accounts", path: "/accounting/chart" },
      { name: "Invoicing", path: "/accounting/invoices" },
      { name: "Expenses", path: "/accounting/expenses" },
      { name: "Financial Reports", path: "/accounting/reports" },
      { name: "Tax Management", path: "/accounting/tax" },
    ],
  },
  {
    id: "sales",
    name: "Sales",
    icon: <SalesIcon />,
    description: "Sales tracking and management",
    color: "bg-red-500",
    features: [
      { name: "Sales Orders", path: "/sales/orders" },
      { name: "Quotations", path: "/sales/quotations" },
      { name: "Customers", path: "/sales/customers" },
      { name: "Sales Reports", path: "/sales/reports" },
      { name: "Commission", path: "/sales/commission" },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    icon: <CRMIcon />,
    description: "Customer relationship management",
    color: "bg-indigo-500",
    features: [
      { name: "Leads", path: "/crm/leads" },
      { name: "Opportunities", path: "/crm/opportunities" },
      { name: "Contacts", path: "/crm/contacts" },
      { name: "Pipeline", path: "/crm/pipeline" },
      { name: "Activities", path: "/crm/activities" },
    ],
  },
  {
    id: "insights",
    name: "Insights",
    icon: <PieChartIcon />,
    description: "Business analytics and dashboards",
    color: "bg-pink-500",
    path: "/insights",
    features: [
      { name: "E-commerce Dashboard", path: "/insights/ecommerce" },
      { name: "Default Dashboard", path: "/insights/default" },
      { name: "Analytics", path: "/insights/analytics" },
      { name: "Reports", path: "/insights/reports" },
    ],
  },
  {
    id: "utils",
    name: "Utils",
    icon: <PlugInIcon />,
    description: "Utility tools and components",
    color: "bg-gray-500",
    path: "/utils",
  },
  {
    id: "ai",
    name: "AI",
    icon: <BrainIcon />,
    description: "Artificial intelligence and automation",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    path: "/ai",
    features: [
      { name: "AI Assistant", path: "/ai/assistant" },
      { name: "Automation", path: "/ai/automation" },
      { name: "Predictions", path: "/ai/predictions" },
      { name: "ML Models", path: "/ai/models" },
    ],
  },
];

interface AppSwitcherProps {
  isExpanded: boolean;
  isHovered: boolean;
  isMobileOpen: boolean;
}

export default function AppSwitcher({ isExpanded, isHovered, isMobileOpen }: AppSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { setCurrentApp } = useSidebar();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedApp(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAppClick = (app: App) => {
    if (app.path) {
      // Set current app in context and navigate
      setCurrentApp(app.id);
      router.push(app.path);
      setIsOpen(false);
    } else if (selectedApp?.id === app.id) {
      setSelectedApp(null);
    } else {
      setSelectedApp(app);
    }
  };

  const showText = isExpanded || isHovered || isMobileOpen;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* App Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 hover:text-brand-500 hover:bg-brand-50 dark:text-gray-400 dark:hover:text-brand-400 dark:hover:bg-brand-500/10 transition-all duration-200"
      >
        <div className="w-5 h-5">
          <AppsIcon />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl z-50 overflow-hidden">
          {!selectedApp ? (
            /* Apps Grid */
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {apps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <div className="w-5 h-5">
                        {app.icon}
                      </div>
                    </div>
                    <div className="font-medium text-xs text-gray-900 dark:text-white text-center">
                      {app.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* App Features */
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setSelectedApp(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ←
                </button>
                <div className={`w-8 h-8 ${selectedApp.color} rounded-lg flex items-center justify-center text-white`}>
                  <div className="w-4 h-4">
                    {selectedApp.icon}
                  </div>
                </div>
                <div className="font-medium text-sm text-gray-900 dark:text-white">
                  {selectedApp.name}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1">
                {selectedApp.features?.map((feature, index) => (
                  <Link
                    key={index}
                    href={feature.path}
                    onClick={() => {
                      setIsOpen(false);
                      setSelectedApp(null);
                    }}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {feature.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}