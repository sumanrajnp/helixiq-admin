import React from "react";
import {
  BoxCubeIcon,
  InventoryIcon,
  TaskIcon,
  GridIcon,
  ListIcon,
  PieChartIcon,
  DocsIcon,
  MailIcon,
  UserIcon,
  CalenderIcon,
  UserCircleIcon,
  PageIcon,
  PlugInIcon,
  TableIcon,
  HRIcon,
  AccountingIcon,
  SalesIcon,
  CRMIcon,
  AdminIcon,
  BoxIcon,
  BrainIcon,
} from "@/icons";

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

// Default menu (original menu)
export const defaultMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [
      { name: "Ecommerce", path: "/", pro: false },
      { name: "Warehouse Insights", path: "/wms", pro: false },
    ],
  },
];

// Utils menu items (all utility modules)
export const utilsMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [
      { name: "Ecommerce", path: "/", pro: false },
      { name: "Warehouse Insights", path: "/wms", pro: false },
    ],
  },
];

export const utilsOthersItems: NavItem[] = [
  {
    icon: <CalenderIcon />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <UserCircleIcon />,
    name: "User Profile",
    path: "/profile",
  },
  {
    name: "Forms",
    icon: <ListIcon />,
    subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  },
  {
    name: "Tables",
    icon: <TableIcon />,
    subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  },
  {
    name: "Pages",
    icon: <PageIcon />,
    subItems: [
      { name: "Blank Page", path: "/blank", pro: false },
      { name: "404 Error", path: "/error-404", pro: false },
    ],
  },
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
  {
    icon: <BoxCubeIcon />,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts", pro: false },
      { name: "Avatar", path: "/avatars", pro: false },
      { name: "Badge", path: "/badge", pro: false },
      { name: "Buttons", path: "/buttons", pro: false },
      { name: "Images", path: "/images", pro: false },
      { name: "Videos", path: "/videos", pro: false },
    ],
  },
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

// Default others items (all app modules)
export const defaultOthersItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Inventory",
    path: "/inventory-dashboard",
  },
  {
    icon: <BoxIcon />,
    name: "Warehouse",
    path: "/warehouse-dashboard",
  },
  {
    icon: <HRIcon />,
    name: "HR",
    subItems: [
      { name: "Employees", path: "/hr/employees", pro: false },
      { name: "Payroll", path: "/hr/payroll", pro: false },
      { name: "Attendance", path: "/hr/attendance", pro: false },
    ],
  },
  {
    icon: <AdminIcon />,
    name: "Admin",
    subItems: [
      { name: "User Management", path: "/admin/users", pro: false },
      { name: "System Settings", path: "/admin/settings", pro: false },
      { name: "Audit Logs", path: "/admin/audit", pro: false },
    ],
  },
  {
    icon: <AccountingIcon />,
    name: "Accounting",
    subItems: [
      { name: "Invoicing", path: "/accounting/invoices", pro: false },
      { name: "Expenses", path: "/accounting/expenses", pro: false },
      { name: "Financial Reports", path: "/accounting/reports", pro: false },
    ],
  },
  {
    icon: <SalesIcon />,
    name: "Sales",
    subItems: [
      { name: "Sales Orders", path: "/sales/orders", pro: false },
      { name: "Customers", path: "/sales/customers", pro: false },
      { name: "Sales Reports", path: "/sales/reports", pro: false },
    ],
  },
  {
    icon: <CRMIcon />,
    name: "CRM",
    subItems: [
      { name: "Leads", path: "/crm/leads", pro: false },
      { name: "Opportunities", path: "/crm/opportunities", pro: false },
      { name: "Contacts", path: "/crm/contacts", pro: false },
    ],
  },
  {
    icon: <PieChartIcon />,
    name: "Insights",
    path: "/insights",
  },
  {
    icon: <PlugInIcon />,
    name: "Utils",
    path: "/utils",
  },
  {
    icon: <BrainIcon />,
    name: "AI",
    path: "/ai",
  },
];

// Inventory menu
export const inventoryMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/inventory-dashboard",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Stock Operations",
    subItems: [
      { name: "Receipts (Inbound)", path: "/inventory/receipts", pro: false },
      { name: "Deliveries (Outbound)", path: "/inventory/deliveries", pro: false },
      { name: "Internal Transfers", path: "/inventory/transfers", pro: false },
      { name: "Returns", path: "/inventory/returns", pro: false },
      { name: "Adjustments", path: "/inventory/adjustments", pro: false },
    ],
  },
  {
    icon: <GridIcon />,
    name: "Warehouse Config",
    subItems: [
      { name: "Warehouses", path: "/inventory/warehouses", pro: false },
      { name: "Storage Locations", path: "/inventory/locations", pro: false },
      { name: "Bins & Racks", path: "/inventory/bins-racks", pro: false },
      { name: "Zones", path: "/inventory/zones", pro: false },
      { name: "Aisle Management", path: "/inventory/aisles", pro: false },
    ],
  },
  {
    icon: <InventoryIcon />,
    name: "Product Management",
    subItems: [
      { name: "Item Master", path: "/inventory/item-master", pro: false },
      { name: "Product Categories", path: "/inventory/categories", pro: false },
      { name: "SKU Management", path: "/inventory/sku", pro: false },
      { name: "Product Variants", path: "/inventory/variants", pro: false },
      { name: "Product Images", path: "/inventory/images", pro: false },
    ],
  },
  {
    icon: <PieChartIcon />,
    name: "Stock Tracking",
    subItems: [
      { name: "Inventory Levels", path: "/inventory/levels", pro: false },
      { name: "Stock Valuation", path: "/inventory/valuation", pro: false },
      { name: "Stock Reconciliation", path: "/inventory/reconciliation", pro: false },
      { name: "Physical Count", path: "/inventory/physical-count", pro: false },
      { name: "ABC Analysis", path: "/inventory/abc-analysis", pro: false },
    ],
  },
  {
    icon: <TaskIcon />,
    name: "Serial & Batch",
    subItems: [
      { name: "Serial Numbers", path: "/inventory/serial-numbers", pro: false },
      { name: "Batch Management", path: "/inventory/batch", pro: false },
      { name: "Expiration Tracking", path: "/inventory/expiration", pro: false },
      { name: "Lot Traceability", path: "/inventory/lot-traceability", pro: false },
      { name: "Barcode Management", path: "/inventory/barcode", pro: false },
    ],
  },
  {
    icon: <ListIcon />,
    name: "Stock Valuation",
    subItems: [
      { name: "FIFO Method", path: "/inventory/fifo", pro: false },
      { name: "AVCO Method", path: "/inventory/avco", pro: false },
      { name: "Standard Cost", path: "/inventory/standard-cost", pro: false },
      { name: "Valuation Reports", path: "/inventory/valuation-reports", pro: false },
      { name: "Cost Adjustment", path: "/inventory/cost-adjustment", pro: false },
    ],
  },
];

// Warehouse menu
export const warehouseMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/warehouse-dashboard",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Receiving",
    subItems: [
      { name: "Purchase Receipt", path: "/warehouse/purchase-receipt", pro: false },
      { name: "Goods Inward", path: "/warehouse/goods-inward", pro: false },
      { name: "Quality Inspection", path: "/warehouse/quality-inspection", pro: false },
      { name: "Putaway", path: "/warehouse/putaway", pro: false },
      { name: "Receiving Reports", path: "/warehouse/receiving-reports", pro: false },
    ],
  },
  {
    icon: <TaskIcon />,
    name: "Picking & Packing",
    subItems: [
      { name: "Pick Lists", path: "/warehouse/pick-lists", pro: false },
      { name: "Batch Picking", path: "/warehouse/batch-picking", pro: false },
      { name: "Wave Picking", path: "/warehouse/wave-picking", pro: false },
      { name: "Cluster Picking", path: "/warehouse/cluster-picking", pro: false },
      { name: "Packing Operations", path: "/warehouse/packing-operations", pro: false },
      { name: "Packing Slips", path: "/warehouse/packing-slips", pro: false },
    ],
  },
  {
    icon: <MailIcon />,
    name: "Shipping",
    subItems: [
      { name: "Outbound Orders", path: "/warehouse/outbound-orders", pro: false },
      { name: "Shipment Creation", path: "/warehouse/shipment-creation", pro: false },
      { name: "Carrier Integration", path: "/warehouse/carrier-integration", pro: false },
      { name: "Delivery Tracking", path: "/warehouse/delivery-tracking", pro: false },
      { name: "Shipping Labels", path: "/warehouse/shipping-labels", pro: false },
    ],
  },
  {
    icon: <PieChartIcon />,
    name: "Cycle Counting",
    subItems: [
      { name: "Count Schedules", path: "/warehouse/count-schedules", pro: false },
      { name: "Count Teams", path: "/warehouse/count-teams", pro: false },
      { name: "Count Verification", path: "/warehouse/count-verification", pro: false },
      { name: "Variance Analysis", path: "/warehouse/variance-analysis", pro: false },
    ],
  },
  {
    icon: <ListIcon />,
    name: "Returns Management",
    subItems: [
      { name: "Return Orders", path: "/warehouse/return-orders", pro: false },
      { name: "Return Receipt", path: "/warehouse/return-receipt", pro: false },
      { name: "Damage Assessment", path: "/warehouse/damage-assessment", pro: false },
      { name: "Credit Note Generation", path: "/warehouse/credit-note", pro: false },
    ],
  },
];

export const warehouseOthersItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Barcode Config",
    subItems: [
      { name: "Barcode Standards", path: "/barcode/standards", pro: false },
      { name: "Barcode Generation", path: "/barcode/generation", pro: false },
      { name: "Barcode Printing", path: "/barcode/printing", pro: false },
      { name: "Label Templates", path: "/barcode/templates", pro: false },
    ],
  },
  {
    icon: <TaskIcon />,
    name: "Barcode Operations",
    subItems: [
      { name: "Scan Receipt", path: "/barcode/scan-receipt", pro: false },
      { name: "Scan Delivery", path: "/barcode/scan-delivery", pro: false },
      { name: "Scan Transfer", path: "/barcode/scan-transfer", pro: false },
      { name: "Scan Count", path: "/barcode/scan-count", pro: false },
      { name: "Scan Return", path: "/barcode/scan-return", pro: false },
    ],
  },
  {
    icon: <DocsIcon />,
    name: "RFID Management",
    subItems: [
      { name: "RFID Tag Assignment", path: "/rfid/tag-assignment", pro: false },
      { name: "RFID Reader Setup", path: "/rfid/reader-setup", pro: false },
      { name: "RFID Operations", path: "/rfid/operations", pro: false },
    ],
  },
  {
    icon: <UserIcon />,
    name: "Mobile Barcode App",
    subItems: [
      { name: "Receiving Scan", path: "/mobile/receiving-scan", pro: false },
      { name: "Picking Scan", path: "/mobile/picking-scan", pro: false },
      { name: "Inventory Scan", path: "/mobile/inventory-scan", pro: false },
      { name: "Offline Sync", path: "/mobile/offline-sync", pro: false },
    ],
  },
];

// HR menu (keeping existing structure for other apps)
export const hrMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/hr-dashboard",
  },
  {
    icon: <HRIcon />,
    name: "Employee Management",
    subItems: [
      { name: "Employees", path: "/hr/employees", pro: false },
      { name: "Departments", path: "/hr/departments", pro: false },
      { name: "Positions", path: "/hr/positions", pro: false },
    ],
  },
];

// Insights menu items (all app modules)
export const insightsMenuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [
      { name: "Ecommerce", path: "/", pro: false },
      { name: "Warehouse Insights", path: "/wms", pro: false },
    ],
  },
];

export const insightsOthersItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Inventory",
    path: "/inventory-dashboard",
  },
  {
    icon: <BoxIcon />,
    name: "Warehouse",
    path: "/warehouse-dashboard",
  },
  {
    icon: <HRIcon />,
    name: "HR",
    subItems: [
      { name: "Employees", path: "/hr/employees", pro: false },
      { name: "Payroll", path: "/hr/payroll", pro: false },
      { name: "Attendance", path: "/hr/attendance", pro: false },
    ],
  },
  {
    icon: <AdminIcon />,
    name: "Admin",
    subItems: [
      { name: "User Management", path: "/admin/users", pro: false },
      { name: "System Settings", path: "/admin/settings", pro: false },
      { name: "Audit Logs", path: "/admin/audit", pro: false },
    ],
  },
  {
    icon: <AccountingIcon />,
    name: "Accounting",
    subItems: [
      { name: "Invoicing", path: "/accounting/invoices", pro: false },
      { name: "Expenses", path: "/accounting/expenses", pro: false },
      { name: "Financial Reports", path: "/accounting/reports", pro: false },
    ],
  },
  {
    icon: <SalesIcon />,
    name: "Sales",
    subItems: [
      { name: "Sales Orders", path: "/sales/orders", pro: false },
      { name: "Customers", path: "/sales/customers", pro: false },
      { name: "Sales Reports", path: "/sales/reports", pro: false },
    ],
  },
  {
    icon: <CRMIcon />,
    name: "CRM",
    subItems: [
      { name: "Leads", path: "/crm/leads", pro: false },
      { name: "Opportunities", path: "/crm/opportunities", pro: false },
      { name: "Contacts", path: "/crm/contacts", pro: false },
    ],
  },
  {
    icon: <BrainIcon />,
    name: "AI",
    path: "/ai",
  },
];

// Function to get menu items based on current app
export const getMenuItems = (currentApp: string | null): { navItems: NavItem[], othersItems: NavItem[] } => {
  switch (currentApp) {
    case 'inventory':
      return { navItems: inventoryMenuItems, othersItems: [] };
    case 'warehouse':
      return { navItems: warehouseMenuItems, othersItems: warehouseOthersItems };
    case 'hr':
      return { navItems: hrMenuItems, othersItems: [] };
    case 'utils':
      return { navItems: utilsMenuItems, othersItems: utilsOthersItems };
    case 'insights':
      return { navItems: insightsMenuItems, othersItems: insightsOthersItems };
    default:
      return { navItems: defaultMenuItems, othersItems: defaultOthersItems };
  }
};