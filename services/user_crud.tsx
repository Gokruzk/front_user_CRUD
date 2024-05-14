"use server";
import { UserWithoutId } from "@/types";
import { redirect } from "next/navigation";

// get users
export const getUsers = async () => {
  const res = await fetch("http://127.0.0.1:5001/user");
  const users = await res.json();
  return users;
};

// get user
export const getUser = async (id: number) => {
  const res = await fetch(`http://127.0.0.1:5001/user/${id}`);
  const user = await res.json();
  return user;
};

export const addUser = async ({ username, email }: UserWithoutId) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ username, email }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("http://127.0.0.1:5001/user", options);

  if (res.ok) {
    alert("User added successfully");
  } else {
    alert("Error while adding user");
  }
};

export const createUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  addUser({ username, email });
  redirect("/view_users");
};

// delete
export const deleteUser = async (id: string) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(`http://127.0.0.1:5001/user/${id}`, options);
  if (res.ok) {
    alert("User deleted");
  } else {
    alert("Error while deleting user");
  }
};

export const removeUser = async (formData: FormData) => {
  const userid = formData.get("userid") as string;
  deleteUser(userid);
};
