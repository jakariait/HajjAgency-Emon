import React from 'react';
import Services from "@/components/Service";
import {getHomePageTitle} from "@/utils/brand";
import Testimonials from "@/components/Testimonial";

export const metadata = {
  title: `Services | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <Services />
      <Testimonials />
    </div>
  );
};

export default Page;