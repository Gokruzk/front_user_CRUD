import { User } from "@/types";
import React from "react";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="m-6">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {user.username}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {user.email}
      </p>
    </div>
  );
};

export default UserCard;
