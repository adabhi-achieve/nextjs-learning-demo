"use client";

import { useState, useEffect } from "react";

export default function ThirdPartyPage() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("London");

  // Example: Fetching from a third-party API (using Next.js API route as proxy)
  const fetchWeather = async () => {
    setLoading(true);
    try {
      // In production, you'd call the weather API directly or through your API route
      // For demo, we'll simulate it
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Third-Party Integration
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Integrating External APIs
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Next.js allows you to integrate with third-party services in both server and client components.
            </p>
          </div>

          {/* Weather API Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Weather API Integration Example
            </h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                  className="flex-1 px-3 py-2 border rounded"
                />
                <button
                  onClick={fetchWeather}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Get Weather"}
                </button>
              </div>
              {weather && (
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {JSON.stringify(weather, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Integration Patterns */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Integration Patterns
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Server-Side Integration</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// In Server Component or API Route
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    headers: { 'Authorization': 'Bearer token' }
  });
  return <div>{data}</div>;
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Client-Side Integration</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// In Client Component
"use client";

useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. API Route Proxy</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// app/api/external/route.ts
export async function GET() {
  const response = await fetch('https://api.example.com/data', {
    headers: { 'Authorization': process.env.API_KEY }
  });
  return Response.json(await response.json());
}

// Then call from client
fetch('/api/external')`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Store API keys in environment variables (never in client code)</li>
              <li>Use API routes as a proxy for sensitive requests</li>
              <li>Implement proper error handling and loading states</li>
              <li>Cache responses when appropriate (SSG/ISR)</li>
              <li>Handle rate limiting and API quotas</li>
              <li>Validate and sanitize external data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
