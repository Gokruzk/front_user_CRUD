import React from "react";
import { User } from "@/types";
import { CustomLinkButton, CustomButton, UserCard } from "@/components";
import { getUsers, deleteUser } from "@/services/user_crud";

const ViewUsers = async () => {
  const data = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users</h1>
      <div className="rounded overflow-hidden p-1 w-80">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {data.map((user: User) => {
            return (
              <div key={user._id.$oid}>
                <UserCard user={user} />
                <div className="flex">
                  <div className="pr-1">
                    <CustomLinkButton
                      title="Update"
                      href={`/view_users/${user._id.$oid}`}
                      style="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-greeb-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <CustomButton
                      title="Delete"
                      handleClick={(e: any) => deleteUser(user._id.$oid)}
                      style="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CustomLinkButton
        title="Regresar"
        href="/"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </main>
  );
};

export default ViewUsers;
