"use client";

import { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

function ComponentWithError({ shouldError }: { shouldError: boolean }) {
  if (shouldError) {
    throw new Error("This is a test error!");
  }
  return <p className="text-green-600">Component rendered successfully!</p>;
}

export default function ErrorHandlingPage() {
  const [shouldError, setShouldError] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const triggerApiError = async () => {
    setLoading(true);
    setApiError(null);
    try {
      const response = await fetch("/api/error-example");
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Error Handling
        </h1>

        <div className="space-y-6">
          {/* Error Boundary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Error Boundaries
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Error boundaries catch JavaScript errors in component trees and display fallback UI.
            </p>
            <ErrorBoundary>
              <div className="space-y-4">
                <button
                  onClick={() => setShouldError(!shouldError)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  {shouldError ? "Reset" : "Trigger Error"}
                </button>
                <ComponentWithError shouldError={shouldError} />
              </div>
            </ErrorBoundary>
          </div>

          {/* Try-Catch */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. Try-Catch for Async Operations
            </h2>
            <div className="space-y-4">
              <button
                onClick={triggerApiError}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Trigger API Error"}
              </button>
              {apiError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-4">
                  <p className="text-red-800 dark:text-red-200">{apiError}</p>
                </div>
              )}
            </div>
          </div>

          {/* Error Types */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Error Handling Patterns
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Error Boundaries (React)</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Try-Catch (Async)</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`try {
  const data = await fetch('/api/data');
  if (!data.ok) throw new Error('API Error');
  return await data.json();
} catch (error) {
  console.error(error);
  // Handle error (show message, retry, etc.)
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Error Pages (Next.js)</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// app/error.tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}`}
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
              <li>Always handle errors gracefully with user-friendly messages</li>
              <li>Log errors to monitoring services (Sentry, LogRocket, etc.)</li>
              <li>Provide retry mechanisms for transient failures</li>
              <li>Use error boundaries to prevent entire app crashes</li>
              <li>Validate user input before processing</li>
              <li>Handle network errors and timeouts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
