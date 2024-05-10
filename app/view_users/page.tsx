import React, { useState } from "react";
import CustomLinkButton from "@/components/CustomLinkButton";
import { User } from "@/types";
import UserCard from "@/components/UserCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ViewUsers = async () => {
  const data = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users</h1>
      {data.map((user: User) => {
        return (
          <div key={user._id.$oid}>
            <UserCard user={user} />
          </div>
        );
      })}
      <CustomLinkButton title="Regresar" href="/" />
    </main>
  );
};

export default ViewUsers;

export const getUsers = async () => {
  const res = await fetch("http://127.0.0.1:5001/user");
  const users = await res.json();
  return users;
};
