import * as React from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param   {React.ButtonHTMLAttributes<HTMLButtonElement>}
 * @returns {JSX.Element}
*/
export const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        "rounded-sm whitespace-nowrap px-4 py-1.5 hover:bg-[#ebebeb] cursor-pointer text-base transition-colors duration-200",
        "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none inline-flex items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
