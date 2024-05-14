"use server";
import { UpdateButtonProps, User, UserWithoutId } from "@/types";
import { redirect } from "next/navigation";

// get users
export const getUsers = async () => {
  const res = await fetch("http://127.0.0.1:5001/user");
  const users = await res.json();
  return users;
};

// get user
export const getUser = async (id: string) => {
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

const updateUser = async ({ userid, username, email }: UpdateButtonProps) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ username, email }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    `http://127.0.0.1:5001/update_user/${userid}`,
    options
  );

  if (res.ok) {
    alert("User updated successfully");
  } else {
    alert("Error while updatng user");
  }
};

export const editUser = async (formData: FormData) => {
  const userid = formData.get("userid") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  updateUser({ userid, username, email });
};
