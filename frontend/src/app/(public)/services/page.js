import React from 'react';
import Services from "@/components/Service";
import {getHomePageTitle} from "@/utils/brand";

export const metadata = {
  title: `Services | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default Page;