"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function SearchParamsDisplay() {
  const searchParams = useSearchParams();
  
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
      <p className="mb-2"><strong>Search Params:</strong></p>
      <ul className="list-disc list-inside ml-4">
        {Array.from(searchParams.entries()).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
        {searchParams.toString() === "" && (
          <li className="text-gray-500">No query parameters</li>
        )}
      </ul>
    </div>
  );
}

export default function RoutingPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [dynamicId, setDynamicId] = useState("123");

  // Programmatic navigation
  const navigateToHome = () => {
    router.push("/");
  };

  const navigateWithQuery = () => {
    router.push("/routing?tab=example&id=456");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Routing in Next.js
        </h1>

        <div className="space-y-6">
          {/* Link Component */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Link Component (Declarative)
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Use the Link component for client-side navigation with prefetching.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Go to Home
              </Link>
              <Link
                href="/foundations/react-components"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                React Components
              </Link>
              <Link
                href={`/routing/dynamic/${dynamicId}`}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Dynamic Route
              </Link>
            </div>
          </div>

          {/* Programmatic Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. Programmatic Navigation (useRouter)
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Use the useRouter hook for programmatic navigation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={navigateToHome}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Navigate to Home
              </button>
              <button
                onClick={navigateWithQuery}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Navigate with Query Params
              </button>
              <button
                onClick={() => router.back()}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Go Back
              </button>
              <button
                onClick={() => router.forward()}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Go Forward
              </button>
            </div>
          </div>

          {/* Current Route Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              3. Route Information (usePathname, useSearchParams)
            </h2>
            <div>
              <p className="mb-2"><strong>Current Pathname:</strong> {pathname}</p>
              <Suspense fallback={<div className="text-gray-500">Loading search params...</div>}>
                <SearchParamsDisplay />
              </Suspense>
            </div>
          </div>

          {/* Dynamic Routes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              4. Dynamic Routes
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Create dynamic routes using brackets: [id], [...slug]
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Enter Dynamic ID:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={dynamicId}
                    onChange={(e) => setDynamicId(e.target.value)}
                    className="px-3 py-2 border rounded flex-1"
                    placeholder="Enter ID"
                  />
                  <Link
                    href={`/routing/dynamic/${dynamicId}`}
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Go to Dynamic Route
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// File structure:
app/
  routing/
    dynamic/
      [id]/
        page.tsx

// Access params:
export default function Page({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>;
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Route Types */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Route Types
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Static Routes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  /about, /contact - Fixed paths
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Dynamic Routes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  /users/[id] - Single parameter
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Catch-All Routes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  /docs/[...slug] - Multiple segments
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Optional Catch-All</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  /shop/[[...slug]] - Optional segments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
