import React from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  reserved: number;
  image: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

const productData: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    stock: 245,
    reserved: 12,
    image: "/images/product/product-01.jpg",
    status: "In Stock",
  },
  {
    id: "2",
    name: "Smart Watch",
    sku: "SW-002",
    category: "Electronics",
    stock: 89,
    reserved: 8,
    image: "/images/product/product-02.jpg",
    status: "In Stock",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    sku: "BS-003",
    category: "Electronics",
    stock: 15,
    reserved: 5,
    image: "/images/product/product-03.jpg",
    status: "Low Stock",
  },
  {
    id: "4",
    name: "USB Cable",
    sku: "UC-004",
    category: "Accessories",
    stock: 0,
    reserved: 0,
    image: "/images/product/product-04.jpg",
    status: "Out of Stock",
  },
  {
    id: "5",
    name: "Phone Case",
    sku: "PC-005",
    category: "Accessories",
    stock: 156,
    reserved: 23,
    image: "/images/product/product-05.jpg",
    status: "In Stock",
  },
];

const getStatusColor = (status: Product["status"]) => {
  switch (status) {
    case "In Stock":
      return "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20";
    case "Low Stock":
      return "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20";
    case "Out of Stock":
      return "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20";
    default:
      return "text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/20";
  }
};

export default function TopProducts() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Top Products
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Most active products in inventory
        </p>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      SKU: {product.sku}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.stock} units
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {product.reserved} reserved
                  </div>
                </div>
                <div
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    product.status
                  )}`}
                >
                  {product.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}