"use client";

import { useState } from "react";

export default function APIRoutesPage() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async (endpoint: string) => {
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setResponse({ endpoint, data, status: res.status });
    } catch (error) {
      setResponse({ endpoint, error: "Failed to fetch", status: 500 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          API Routes in Next.js
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              What are API Routes?
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              API Routes allow you to create API endpoints as Node.js serverless functions. 
              Files in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/api</code> directory become API endpoints.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Test API Routes
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <button
                onClick={() => testAPI("/api/hello")}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                GET /api/hello
              </button>
              <button
                onClick={() => testAPI("/api/users")}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              >
                GET /api/users
              </button>
              <button
                onClick={() => testAPI("/api/posts")}
                disabled={loading}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
              >
                GET /api/posts
              </button>
            </div>

            {loading && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <p>Loading...</p>
              </div>
            )}

            {response && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Response from {response.endpoint}:</h3>
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              File Structure
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`app/
  api/
    hello/
      route.ts       → GET/POST /api/hello
    users/
      route.ts       → GET/POST /api/users
    posts/
      [id]/
        route.ts     → GET/POST /api/posts/:id`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              HTTP Methods
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ received: body });
}

export async function PUT(request: Request) {
  // Handle PUT request
}

export async function DELETE(request: Request) {
  // Handle DELETE request
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
