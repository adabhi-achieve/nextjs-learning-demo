"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Lazy load a component
const LazyComponent = dynamic(() => import("@/components/LazyComponent"), {
  loading: () => <p>Loading lazy component...</p>,
});

// Expensive computation
function expensiveComputation(n: number): number {
  console.log("Computing...");
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
}

export default function PerformancePage() {
  const [count, setCount] = useState(0);
  const [showLazy, setShowLazy] = useState(false);
  const [computeValue, setComputeValue] = useState(100);

  // Memoized expensive computation
  const memoizedResult = useMemo(
    () => expensiveComputation(computeValue),
    [computeValue]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Performance Optimization
        </h1>

        <div className="space-y-6">
          {/* Code Splitting */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Code Splitting (Dynamic Imports)
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Load components only when needed to reduce initial bundle size.
            </p>
            <button
              onClick={() => setShowLazy(!showLazy)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {showLazy ? "Hide" : "Load"} Lazy Component
            </button>
            {showLazy && (
              <div className="mt-4">
                <LazyComponent />
              </div>
            )}
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Dynamic import
const LazyComponent = dynamic(() => import('./LazyComponent'), {
  loading: () => <p>Loading...</p>
});`}
              </pre>
            </div>
          </div>

          {/* useMemo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. Memoization (useMemo)
            </h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2">Count: {count}</p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Increment Count
                </button>
              </div>
              <div>
                <label className="block mb-2">
                  Compute Value: {computeValue}
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={computeValue}
                  onChange={(e) => setComputeValue(Number(e.target.value))}
                  className="w-full"
                />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Result: {memoizedResult} (check console - only computes when value changes)
                </p>
              </div>
            </div>
          </div>

          {/* Image Optimization */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              3. Image Optimization
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Next.js Image component automatically optimizes images
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // For above-the-fold images
/>`}
              </pre>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Performance Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Code Splitting:</strong> Use dynamic imports for large components</li>
              <li><strong>Memoization:</strong> Use useMemo and useCallback to prevent unnecessary recalculations</li>
              <li><strong>Image Optimization:</strong> Always use Next.js Image component</li>
              <li><strong>Lazy Loading:</strong> Load components and data on demand</li>
              <li><strong>Bundle Analysis:</strong> Use @next/bundle-analyzer to identify large dependencies</li>
              <li><strong>Server Components:</strong> Use server components to reduce client bundle size</li>
              <li><strong>Caching:</strong> Implement proper caching strategies (SSG, ISR)</li>
              <li><strong>Minimize Re-renders:</strong> Use React.memo for expensive components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
