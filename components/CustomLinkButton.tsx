import { CustomLinkButtonProps } from "@/types";
import React from "react";
import Link from "next/link";
import { styleText } from "util";

const CustomLinkButton = ({ title, href, style }: CustomLinkButtonProps) => {
  return (
    <Link href={href}>
      <button
        disabled={false}
        type={"button"}
        className={style}
      >
        {title}
      </button>
    </Link>
  );
};

export default CustomLinkButton;
