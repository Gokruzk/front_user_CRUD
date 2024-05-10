import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
