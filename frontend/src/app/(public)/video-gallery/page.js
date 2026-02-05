import React from "react";
import VideoGallery from "@/components/VideoGallery";
import { getHomePageTitle } from "@/utils/brand";

export const metadata = {
  title: `Video Gallery | ${getHomePageTitle()}`,
};

const Page = () => {
  return (
    <div>
      <VideoGallery />
    </div>
  );
};

export default Page;
