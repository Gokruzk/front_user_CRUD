import { CustomLinkButtonProps } from "@/types";
import React from "react";
import Link from "next/link";

const CustomLinkButton = ({ title, href }: CustomLinkButtonProps) => {
  return (
    <Link href={href}>
      <button
        disabled={false}
        type={"button"}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        {title}
      </button>
    </Link>
  );
};

export default CustomLinkButton;
