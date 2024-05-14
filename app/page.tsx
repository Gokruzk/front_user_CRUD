import CustomLinkButton from "@/components/CustomLinkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Register</h1>
      <CustomLinkButton
        title="User Register"
        href="/add_users"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
      <CustomLinkButton
        title="View users"
        href="/view_users"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </main>
  );
}
