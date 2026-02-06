"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { useRouter, usePathname } from "next/navigation";
import useAuthAdminStore from "@/store/AuthAdminStore";
import { getBrandName } from "@/utils/brand";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { admin, logout } = useAuthAdminStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Packages", path: "/admin/dashboard/packages" },
		{ name: "Add Product", path: "/admin/dashboard/add-product" },
    { name: "View Products", path: "/admin/dashboard/view-products" },
    { name: "Testimonials", path: "/admin/dashboard/testimonials" },
    { name: "Gallery", path: "/admin/dashboard/gallery" },
    { name: "FAQ", path: "/admin/dashboard/faq" },
  ];

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
    setIsMobileDrawerOpen(false); // Close drawer on menu item click
  };

  const adminName = admin?.name || "John Doe";
  const adminEmail = admin?.email || "admin@example.com";

  return (
    <div className="min-h-screen bg-white flex">
      <AdminSidebar menuItems={menuItems} /> {/* Desktop sidebar */}
      {/* Mobile Header Bar with Hamburger */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-white text-gray-800 border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm z-30">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <h1 className="text-lg font-bold text-gray-900">
              {getBrandName()}
            </h1>
          </Link>
        </div>
        <button
          onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileDrawerOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>
      {/* Mobile Drawer (visible when isMobileDrawerOpen is true on small screens) */}
      {isMobileDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 w-64 h-full bg-white border-r border-gray-200 shadow-xl p-6 flex flex-col lg:hidden">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 truncate">
                {adminName}
              </h3>
              <p className="text-sm text-gray-600 truncate">{adminEmail}</p>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item.path)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                      isActive
                        ? "bg-orange-500/10 text-orange-600 border border-orange-500/30"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-600 text-sm rounded-lg"
              >
                {isLoggingOut ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          </div>
        </>
      )}
      {/* Main content area */}
      <main className="flex-1 lg:ml-64 relative text-gray-800 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
