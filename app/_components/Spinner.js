"use client";

import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/spinner.png"
        alt="Loading"
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
  );
};

export default Spinner;
