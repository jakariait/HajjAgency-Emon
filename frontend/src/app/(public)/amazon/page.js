import React from "react";
import FullServiceAmazonAgency from "@/components/FullServiceAmazonAgency";
import {getHomePageTitle} from "@/utils/brand";
export const metadata = {
  title: `Amazon | ${getHomePageTitle()}`,
};


const Page = () => {
  return (
    <div>
      <FullServiceAmazonAgency />
    </div>
  );
};

export default Page;
