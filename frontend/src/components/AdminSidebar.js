"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuthAdminStore from "@/store/AuthAdminStore";
import { getBrandName } from "@/utils/brand";
import Link from "next/link";

const AdminSidebar = ({menuItems}) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { admin, logout } = useAuthAdminStore();
  const router = useRouter();
  const pathname = usePathname();



  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleMenuClick = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  const adminName = admin?.name || "John Doe";
  const adminEmail = admin?.email || "admin@example.com";

  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 shadow-lg hidden lg:flex flex-col z-30">
      <div className="p-4 border-b border-gray-200">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900">{getBrandName()}</h1>
        </Link>
      </div>

      <nav className="flex-grow p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.path)}
              className={`w-full cursor-pointer text-left px-4 py-2 rounded-lg text-sm transition-all ${
                isActive
                  ? "bg-orange-500/10 text-orange-600 border border-orange-500/30 shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 truncate">{adminName}</h3>
          <p className="text-sm text-gray-600 truncate">{adminEmail}</p>
        </div>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full px-4 py-2 cursor-pointer text-sm bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-600 rounded-lg disabled:opacity-50"
        >
          {isLoggingOut ? "Signing Out..." : "Sign Out"}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
