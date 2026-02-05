import React from "react";
import Packages from "@/components/Package";
import {getHomePageTitle} from "@/utils/brand";

export const metadata = {
  title: `Packages | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <Packages />
    </div>
  );
};

export default Page;
