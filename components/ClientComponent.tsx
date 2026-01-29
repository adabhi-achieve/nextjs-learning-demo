"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const clientTime = new Date().toLocaleString();

  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <p className="text-green-800 dark:text-green-200 mb-4">
        <strong>Client Component:</strong> This was rendered in the browser at {clientTime}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>
        <p className="text-green-800 dark:text-green-200">
          Count: <strong>{count}</strong>
        </p>
      </div>
      <p className="text-sm text-green-600 dark:text-green-400 mt-2">
        This component uses useState hook and handles user interactions!
      </p>
    </div>
  );
}
