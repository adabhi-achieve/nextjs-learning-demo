"use client";

import { useState } from "react";

// Props Example Component
function UserCard({ name, age, email }: { name: string; age: number; email: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400">Age: {age}</p>
      <p className="text-gray-600 dark:text-gray-400">Email: {email}</p>
    </div>
  );
}

// State Example Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Counter: {count}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

// Props with State Example
function TodoItem({ initialText }: { initialText: string }) {
  const [text, setText] = useState(initialText);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
          className="w-5 h-5"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`flex-1 px-3 py-2 border rounded ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default function PropsStatePage() {
  const [userName, setUserName] = useState("John Doe");
  const [userAge, setUserAge] = useState(30);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Props & State
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Props (Properties)
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Props are read-only data passed from parent to child components.
            </p>
            <div className="space-y-4">
              <UserCard name="Alice" age={25} email="alice@example.com" />
              <UserCard name="Bob" age={30} email="bob@example.com" />
              <UserCard name="Charlie" age={35} email="charlie@example.com" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. State
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              State is mutable data that belongs to a component and can change over time.
            </p>
            <Counter />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              3. Props + State Together
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Components can receive props and manage their own state.
            </p>
            <div className="space-y-4">
              <TodoItem initialText="Learn React" />
              <TodoItem initialText="Build a Next.js app" />
              <TodoItem initialText="Deploy to production" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              4. Dynamic Props with State
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter name"
                  className="flex-1 px-3 py-2 border rounded"
                />
                <input
                  type="number"
                  value={userAge}
                  onChange={(e) => setUserAge(Number(e.target.value))}
                  placeholder="Enter age"
                  className="w-32 px-3 py-2 border rounded"
                />
              </div>
              <UserCard name={userName} age={userAge} email={`${userName.toLowerCase().replace(" ", ".")}@example.com`} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Key Differences
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Props</th>
                    <th className="text-left p-2">State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Read-only</td>
                    <td className="p-2">Mutable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Passed from parent</td>
                    <td className="p-2">Managed within component</td>
                  </tr>
                  <tr>
                    <td className="p-2">Cannot be changed</td>
                    <td className="p-2">Can be updated with setState</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
