"use client";
import { getUsers } from "@/api/userAPI";
import { CustomLinkButton, DeleteButton, UserCard } from "@/components";
import { User } from "@/types";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Userss() {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewUsers />
    </QueryClientProvider>
  );
}

const ViewUsers = () => {
  const {
    isLoading,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
    refetchInterval: 2000, // Obtención en tiempo real cada 2 segundos
  });
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error {error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1>Users</h1>
      <main className="flex items-center justify-between">
        <div className="rounded overflow-hidden w-100">
          {users.map((user: User) => {
            return (
              <div
                className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10"
                key={user._id.$oid}
              >
                <UserCard user={user} />
                <div className="flex">
                  <div className="pr-1">
                    <CustomLinkButton
                      title="Update"
                      href={`/view_users/${user._id.$oid}`}
                      style="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-greeb-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <DeleteButton
                      title="Delete"
                      userid={user._id.$oid}
                      style="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* <Users /> */}
      <CustomLinkButton
        title="Regresar"
        href="/"
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </main>
  );
};
