import React from "react";
import ResultsUpload from "@/components/ResultsUpload";
import AdminVideoLink from "@/components/AdminVideoLink";

const Page = () => {
  return (
    <div className={"xl:container xl:mx-auto"}>
      <AdminVideoLink />
      <ResultsUpload />
    </div>
  );
};

export default Page;
