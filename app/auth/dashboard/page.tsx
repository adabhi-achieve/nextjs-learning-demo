"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/auth");
      return;
    }

    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth");
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome, {user.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Protected Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is a protected route. Only authenticated users can access this page.
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <h3 className="font-semibold mb-2">Authentication Flow:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>User registers/logs in</li>
              <li>Server validates credentials</li>
              <li>JWT token is issued and stored</li>
              <li>Token is checked on protected routes</li>
              <li>User is redirected if not authenticated</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
