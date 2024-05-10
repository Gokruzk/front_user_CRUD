"use client";
import React from "react";
import { useState } from "react";

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const options = {
    method: "POST",
    body: JSON.stringify({ username, email }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const addUser = async () => {
    const res = await fetch("http://127.0.0.1:5001/user", options);

    if (res.ok) {
      console.log("Usuario agregado exitosamente");
      alert('User added')
      setUsername("");
      setEmail("");
    } else {
      alert("Error while adding user");
    }
  };
  return (
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        onClick={addUser}
      >
        Add
      </button>
    </form>
  );
};

export default AddUserForm;
