import CustomButton from "@/components/CustomLinkButton";

export default function Home() {
  var cors = require("cors");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Register</h1>
      <CustomButton title="User Register" href="/add_users" />
      <CustomButton title="View users" href="/view_users" />
    </main>
  );
}
