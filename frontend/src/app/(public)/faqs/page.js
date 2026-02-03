import React from 'react';
import FAQ from "@/components/FAQ";
import {getHomePageTitle} from "@/utils/brand";
export const metadata = {
  title: `FAQs | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <FAQ/>

    </div>
  );
};

export default Page;