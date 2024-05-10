import { MouseEventHandler } from "react";

export interface CustomLinkButtonProps {
  title: string;
  href: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface User {
  _id: {
    $oid: number;
  };
  username: string;
  email: string;
}
