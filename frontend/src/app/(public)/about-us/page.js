import React from "react";
import AboutUs from "@/components/AboutUs";
import { getHomePageTitle } from "@/utils/brand";
export const metadata = {
  title: `About Us | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default Page;
