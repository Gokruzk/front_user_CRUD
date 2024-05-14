import axios from "axios";
import { UpdateButtonProps, UserWithoutId } from "@/types";

const usersApi = axios.create({
  baseURL: "http://127.0.0.1:5001",
});

// get users
export const getUsers = async () => {
  const res = await usersApi.get("/user");
  return res.data;
};

// get user
export const getUser = async (id: string) => {
  const res = await usersApi.get(`/user/${id}`);
  return res.data;
};

export const addUser = async (user: UserWithoutId) => {
  usersApi.post("/user", user);
};

// delete
export const deleteUser = async (id: string) => {
  const res = await usersApi.delete(`user/${id}`);
  if (res.status) {
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
  const user = {
    username: username,
    email: email,
  };
  usersApi
    .post(`/update_user/${userid}`, user)
    .then((res) => {
      alert("User updated successfully");
    })
    .catch((error) => {
      alert("Error while updating user");
    });
};

export const editUser = async (formData: FormData) => {
  const userid = formData.get("userid") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  updateUser({ userid, username, email });
};
