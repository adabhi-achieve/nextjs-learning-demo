import { Suspense } from "react";
import SSRDemo from "@/components/SSRDemo";
import SSGDemo from "@/components/SSGDemo";
import ISRDemo from "@/components/ISRDemo";

export default function SSRSSGPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          SSR / SSG / ISR
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Rendering Strategies
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">SSR</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Server-Side Rendering: Rendered on each request
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">SSG</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Static Site Generation: Pre-rendered at build time
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <h3 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">ISR</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Incremental Static Regeneration: Revalidates periodically
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Server-Side Rendering (SSR)
            </h2>
            <Suspense fallback={<div>Loading SSR data...</div>}>
              <SSRDemo />
            </Suspense>
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Force SSR
export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetch('...', { cache: 'no-store' });
  return <div>{data}</div>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Static Site Generation (SSG)
            </h2>
            <SSGDemo />
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Force SSG (default)
export const dynamic = 'force-static';

export default async function Page() {
  const data = await fetch('...'); // Cached at build time
  return <div>{data}</div>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Incremental Static Regeneration (ISR)
            </h2>
            <ISRDemo />
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// ISR with revalidation
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const data = await fetch('...', { next: { revalidate: 60 } });
  return <div>{data}</div>;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              When to Use Each
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Use SSR when:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Data changes frequently</li>
                  <li>Content is user-specific</li>
                  <li>You need real-time data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Use SSG when:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Content is static or rarely changes</li>
                  <li>You want the best performance</li>
                  <li>SEO is important</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Use ISR when:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Content updates periodically</li>
                  <li>You want performance of SSG with freshness of SSR</li>
                  <li>You have thousands of pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
