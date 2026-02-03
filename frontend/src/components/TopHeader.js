import React from "react";
import ContactInfo from "@/components/ContactInfo";
import SocialMediaLink from "@/components/SocialMediaLink";

const TopHeader = () => {
  return (
    <div className={"bg-primary px-4"}>
      <div
        className={
          "xl:container xl:mx-auto py-2 flex flex-col md:flex-row gap-2 items-center justify-between"
        }
      >
        <ContactInfo />
        <SocialMediaLink />
      </div>
    </div>
  );
};

export default TopHeader;
