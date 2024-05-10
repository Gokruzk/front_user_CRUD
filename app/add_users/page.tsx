import AddUserForm from "@/components/AddUserForm";
import CustomLinkButton from "@/components/CustomLinkButton";
import React from "react";

const AddProduct = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Register</h1>
      <AddUserForm />
      <CustomLinkButton title="Regresar" href="/" />
    </main>
  );
};

export default AddProduct;
