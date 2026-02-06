import React from "react";
import Packages from "@/components/Package";
import {getHomePageTitle} from "@/utils/brand";
import Testimonials from "@/components/Testimonial";

export const metadata = {
  title: `Packages | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <Packages />
      <Testimonials />
    </div>
  );
};

export default Page;
