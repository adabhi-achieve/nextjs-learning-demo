"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function HooksPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [timer, setTimer] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect - runs after every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useEffect - runs once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // useMemo - memoized value
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value...");
    return count * 2;
  }, [count]);

  // useCallback - memoized function
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // useRef example
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          React Hooks
        </h1>

        <div className="space-y-6">
          {/* useState */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. useState Hook
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Manages component state. Returns the current state and a function to update it.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-lg mb-2">Count: {count}</p>
                <button
                  onClick={handleClick}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Increment
                </button>
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="px-3 py-2 border rounded w-full"
                />
                <p className="mt-2">Hello, {name || "Guest"}!</p>
              </div>
            </div>
          </div>

          {/* useEffect */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. useEffect Hook
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Handles side effects like API calls, subscriptions, or DOM manipulation.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-lg mb-2">Timer: {timer} seconds</p>
                <p className="text-sm text-gray-500">
                  Check the browser tab title - it updates with the count!
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`useEffect(() => {
  // Runs after every render
  document.title = \`Count: \${count}\`;
}, [count]); // Dependency array`}
                </pre>
              </div>
            </div>
          </div>

          {/* useRef */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              3. useRef Hook
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Creates a mutable reference that persists across renders without causing re-renders.
            </p>
            <div className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Click button to focus"
                className="px-3 py-2 border rounded w-full"
              />
              <button
                onClick={focusInput}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Focus Input
              </button>
            </div>
          </div>

          {/* useMemo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              4. useMemo Hook
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Memoizes expensive calculations to avoid recomputing on every render.
            </p>
            <div>
              <p className="text-lg mb-2">Count: {count}</p>
              <p className="text-lg mb-2">Expensive Value (count * 2): {expensiveValue}</p>
              <p className="text-sm text-gray-500">
                Check console - value only recomputes when count changes
              </p>
            </div>
          </div>

          {/* useCallback */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              5. useCallback Hook
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Memoizes functions to prevent unnecessary re-renders of child components.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []); // Empty deps = function never changes`}
              </pre>
            </div>
          </div>

          {/* Hook Rules */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Rules of Hooks
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Only call hooks at the top level (not inside loops, conditions, or nested functions)</li>
              <li>Only call hooks from React function components or custom hooks</li>
              <li>Hooks must be called in the same order every render</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
