import React from "react";
import Image from "next/image";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h6 className="mb-2 font-semibold text-gray dark:text-white">
        Powered By
      </h6>
      <div className="flex justify-center mb-4">
        <Image
          className="dark:hidden"
          src="/images/logo/helixiq.svg"
          alt="Logo"
          width={120}
          height={32}
        />
        <Image
          className="hidden dark:block"
          src="/images/logo/helixiq-d.svg"
          alt="Logo"
          width={120}
          height={32}
        />
      </div>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        The DNA of your business
      </p>
      
    </div>
  );
}
