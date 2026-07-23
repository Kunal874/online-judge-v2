import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";

export default function HomePage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["health"],
    queryFn: async () => (await apiClient.get<{ status: string }>("/health")).data,
  });

  const status = isPending ? "checking..." : isError ? "unreachable" : data?.status;

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Online Judge</h1>
      <p className="text-slate-500 dark:text-slate-400">
        API status:{" "}
        <span
          className={
            status === "ok"
              ? "font-medium text-green-600 dark:text-green-400"
              : "font-medium text-red-600 dark:text-red-400"
          }
        >
          {status}
        </span>
      </p>
    </main>
  );
}
