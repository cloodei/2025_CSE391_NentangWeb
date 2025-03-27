import React from "react";
import { twMerge } from "tailwind-merge";

/** @param {React.HTMLAttributes<HTMLDivElement>} */
export default function Toast({ className, children, ...props }) {
  return (
    <div 
      className={twMerge(
        "fixed bottom-4 right-4 bg-[#273133] text-white px-6 py-2 rounded-lg transform transition-all ease-in-out duration-[350ms] z-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
