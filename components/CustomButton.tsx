"use client"
import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, handleClick, style }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={style}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
