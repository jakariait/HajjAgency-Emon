import React from "react";
import ContactSection from "@/components/ContactSection";
import {getHomePageTitle} from "@/utils/brand";
export const metadata = {
  title: `Contact Us | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <ContactSection />
    </div>
  );
};

export default Page;
