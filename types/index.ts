import { MouseEventHandler } from "react";

export interface CustomLinkButtonProps {
  title: string;
  href: string;
  style?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  style?: string;
}

export interface User {
  _id: {
    $oid: number;
  };
  username: string;
  email: string;
}

export interface UserWithoutId extends Omit<User, "_id"> {}

export interface Params {
  params: {
    userId: number;
  };
}
