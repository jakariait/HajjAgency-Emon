import React from "react";
import CaseStudies from "@/components/CaseStudies";
import { getHomePageTitle } from "@/utils/brand";
export const metadata = {
  title: `Success Story | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <CaseStudies />
    </div>
  );
};

export default Page;
