import React from "react";
import AboutUs from "@/components/AboutUs";
import { getHomePageTitle } from "@/utils/brand";
import Testimonials from "@/components/Testimonial";
export const metadata = {
  title: `About Us | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Page;
