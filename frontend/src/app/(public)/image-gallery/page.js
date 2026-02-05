import React from 'react';
import Gallery from "@/components/Gallery";
import {getHomePageTitle} from "@/utils/brand";

export const metadata = {
  title: `Image Gallery | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default Page;