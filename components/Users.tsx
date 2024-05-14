import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { User } from "@/types";
import { getUsers } from "@/api/userAPI";
import CustomLinkButton from "./CustomLinkButton";
import DeleteButton from "./DeleteButton";
import UserCard from "./UserCard";

const queryClient = new QueryClient();

export default function Users() {
  return (
    <QueryClientProvider client={queryClient}>
      <Vuser />
    </QueryClientProvider>
  );
}
export const Vuser = () => {
  const {
    isLoading,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Demora exponencial entre reintentos
    refetchInterval: 2000, // Obtención en tiempo real cada 5 segundos
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error {error.message}</div>;

  return (
    <main className="flex items-center justify-between">
      <div className="rounded overflow-hidden w-100">
        {users.map((user: User) => {
          return (
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10">
              <div key={user._id.$oid}>
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
            </div>
          );
        })}
      </div>
    </main>
  );
};
