import React from 'react';
import TermsCondition from "@/components/TermsCondition";
import {getHomePageTitle} from "@/utils/brand";

export const metadata = {
  title: `Terms and Condition | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <TermsCondition/>
    </div>
  );
};

export default Page;