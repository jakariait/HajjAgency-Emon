"use client";
import React from "react";
import AdminList from "@/components/AdminList";
import ContactTable from "@/components/ContactTable";
import AdminPackage from "@/components/AdminPackage";

const Page = () => {
  return (
    <div className={"grid grid-cols-1 gap-4 xl:container xl:mx-auto"}>
      <AdminList />
      <ContactTable />
      <AdminPackage/>
    </div>
  );
};

export default Page;
