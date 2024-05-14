"use client"
import * as React from "react";
import { CustomLinkButton } from "@/components";
import { createUser } from "@/services/user_crud";

const AddUser = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Register</h1>
      <form className="w-full max-w-lg" action={createUser}>
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
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              aria-required
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="email"
              name="email"
              required
            />
          </div>
        </div>
        <button
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-greeb-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
        >
          Add
        </button>
      </form>
      <CustomLinkButton
        title="Regresar"
        href="/"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </main>
  );
};

export default AddUser;
