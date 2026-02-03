import React from "react";
import Link from "next/link";

const Registration = () => {
  return (
    <div className="flex justify-center items-center ">
      <Link href="/registration">
        <button className="bg-secondary text-accent font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary transition-colors duration-300 uppercase cursor-pointer">
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default Registration;
