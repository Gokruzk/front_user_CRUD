import { DeleteButtonProps } from "@/types";
import React from "react";
import { removeUser } from "@/services/user_crud";

const DeleteButton = ({
    title,
    userid,
    style,
}: DeleteButtonProps) => {
  return (
    <form action={removeUser}>
      <input type="hidden" name="userid" value={userid} />
      <button className={style}>
        {title}
      </button>
    </form>
  );
};

export default DeleteButton;
