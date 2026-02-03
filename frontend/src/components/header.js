"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { getBrandLogo, getBrandName, getSlogan } from "@/utils/brand";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Amazon",
    path: "/amazon",
    // subItems: [
    //   { name: "Amazon", path: "/amazon" },
    //   { name: "Shopify", path: "/shopify" },
    //   { name: "Meta", path: "/meta" },
    // ],
  },
  { name: "Success Story", path: "/success-story" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Blogs", path: "/blogs" },
];

export default function Header() {
  // Desktop submenu state
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const timeoutRef = useRef(null);

  // Mobile drawer and submenu states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSubmenuOpenIndex, setMobileSubmenuOpenIndex] = useState(null);

  // Improved desktop hover handlers
  const handleMenuEnter = (idx) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenuIndex(idx);
  };

  const handleMenuItemLeave = (idx) => {
    // Set a longer timeout to allow mouse movement to submenu
    timeoutRef.current = setTimeout(() => {
      setOpenMenuIndex(null);
    }, 300); // Increased timeout for better UX
  };

  const handleSubmenuEnter = () => {
    // Clear timeout when entering submenu
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleSubmenuLeave = () => {
    // Immediate close when leaving submenu
    timeoutRef.current = setTimeout(() => {
      setOpenMenuIndex(null);
    }, 150);
  };

  // Mobile submenu toggle
  const toggleMobileSubmenu = (idx) => {
    if (mobileSubmenuOpenIndex === idx) {
      setMobileSubmenuOpenIndex(null);
    } else {
      setMobileSubmenuOpenIndex(idx);
    }
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerOpen && !event.target.closest(".mobile-drawer")) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className=" border-b border-gray-200 px-4 sticky top-0 z-50 bg-white ">
      <div className="xl:container xl:mx-auto flex justify-between py-3 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex-col items-center justify-center gap-4">
            <img
              src={getBrandLogo()}
              alt={getBrandName()}
              className="w-40   cursor-pointer hover:opacity-90 transition-opacity duration-200"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative">
              {item.subItems ? (
                <div
                  onMouseEnter={() => handleMenuEnter(idx)}
                  onMouseLeave={() => handleMenuItemLeave(idx)}
                >
                  <button
                    className="text-black uppercase font-medium py-2 px-3 rounded transition-colors duration-200 hover:text-orange-500 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                    aria-expanded={openMenuIndex === idx}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 inline-block w-4 h-4 transition-transform duration-200 ${
                        openMenuIndex === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Desktop Submenu with improved positioning */}
                  <div
                    className={`absolute top-full left-0 bg-white rounded shadow-lg border border-gray-100 transition-all duration-200 transform ${
                      openMenuIndex === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    style={{
                      minWidth: "192px",
                      marginTop: "0px", // Remove gap between menu and submenu
                    }}
                    onMouseEnter={handleSubmenuEnter}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setOpenMenuIndex(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={`${item.path}`}
                  className="text-black uppercase font-medium py-2 px-3 rounded transition-colors duration-200 hover:text-orange-500 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="p-2 bg-orange-500 text-white rounded-full transition-colors duration-200 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`mobile-drawer fixed top-0 right-0 h-full w-72 bg-white shadow text-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="p-2 bg-orange-500 text-white rounded-full transition-colors cursor-pointer duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="px-4">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-700 last:border-b-0"
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(idx)}
                      className="w-full flex justify-between items-center py-4 px-2 text-left uppercase font-medium hover:text-orange-400 focus:outline-none focus:text-orange-400 transition-colors duration-200"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileSubmenuOpenIndex === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileSubmenuOpenIndex === idx
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-6 pb-2">
                        {item.subItems.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.path}
                            onClick={() => setDrawerOpen(false)}
                            className="block py-3 px-2 text-black hover:text-orange-400 focus:text-orange-400 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={`${item.path}`}
                    onClick={() => setDrawerOpen(false)}
                    className="block py-4 px-2 uppercase font-medium hover:text-orange-400 focus:text-orange-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
