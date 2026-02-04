import React from 'react';
import PrivacyPolicy from "@/components/PrivacyPolicy";
import {getHomePageTitle} from "@/utils/brand";


export const metadata = {
  title: `Privacy Policy | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  );
};

export default Page;