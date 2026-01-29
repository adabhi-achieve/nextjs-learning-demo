import ServerComponent from "@/components/ServerComponent";
import ClientComponent from "@/components/ClientComponent";
import ServerClientMix from "@/components/ServerClientMix";

export default function ServerClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Server vs Client Components
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Key Differences
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Server Components</h3>
                <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                  <li>✓ Rendered on the server</li>
                  <li>✓ No JavaScript sent to client</li>
                  <li>✓ Can access backend resources directly</li>
                  <li>✓ Cannot use hooks or browser APIs</li>
                  <li>✓ Default in Next.js App Router</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Client Components</h3>
                <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                  <li>✓ Rendered in the browser</li>
                  <li>✓ Can use hooks (useState, useEffect)</li>
                  <li>✓ Can use browser APIs</li>
                  <li>✓ Can handle user interactions</li>
                  <li>✓ Requires "use client" directive</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Server Component Example
            </h2>
            <ServerComponent />
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Server Component (default)
export default function ServerComponent() {
  // Can directly access server resources
  const data = await fetch('...');
  return <div>Server rendered content</div>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Client Component Example
            </h2>
            <ClientComponent />
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Client Component
"use client";

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Mixing Server and Client Components
            </h2>
            <ServerClientMix />
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Server Component can import Client Component
import ClientComponent from './ClientComponent';

export default function ServerComponent() {
  return (
    <div>
      <p>Server content</p>
      <ClientComponent />
    </div>
  );
}

// Client Component CANNOT import Server Component
// But can pass Server Component as children`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              When to Use Each
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Use Server Components for:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Fetching data from databases or APIs</li>
                  <li>Accessing backend resources</li>
                  <li>Keeping sensitive information on the server</li>
                  <li>Large dependencies that should not be in client bundle</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Use Client Components for:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Interactivity (onClick, onChange, etc.)</li>
                  <li>State management (useState, useReducer)</li>
                  <li>Browser APIs (localStorage, window, etc.)</li>
                  <li>Effects (useEffect)</li>
                  <li>Custom hooks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
