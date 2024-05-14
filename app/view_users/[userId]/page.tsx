"use client"
import { CustomButton, CustomLinkButton } from "@/components";
import React, { useState, useEffect } from "react";
import { Params } from "@/types";
import { getUser } from "@/services/user_crud";

const UpdateUser = async ({ params: { userId } }: Params) => {
  const data = await getUser(userId);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const options = {
  //   method: "PUT",
  //   body: JSON.stringify({ username, email }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const updateUser = async () => {
  //   const res = await fetch(`http://127.0.0.1:5001/user/${userId}`, options);

  //   if (res.ok) {
  //     alert("User updated successfully");
  //   } else {
  //     alert("Error while updatng user");
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Update User</h1>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="username"
              name="username"
              value={data.username}
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="email"
              name="email"
              value={data.email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <CustomButton
          title="Update"
          style="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-greeb-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          // handleClick={updateUser}
        />
      </form>
      <CustomLinkButton
        title="Regresar"
        href="/view_users"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </main>
  );
};

export default UpdateUser;


