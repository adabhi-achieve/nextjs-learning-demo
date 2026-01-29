"use client";

import { useState } from "react";

// Functional Component Example
function Greeting({ name }: { name: string }) {
  return <h2 className="text-xl font-semibold">Hello, {name}!</h2>;
}

// Component with Children
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

// Component Composition
function UserProfile({ name, email, role }: { name: string; email: string; role: string }) {
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <Greeting name={name} />
      <p className="text-gray-600 dark:text-gray-400">Email: {email}</p>
      <p className="text-gray-600 dark:text-gray-400">Role: {role}</p>
    </div>
  );
}

// Conditional Rendering Component
function ConditionalComponent({ isVisible }: { isVisible: boolean }) {
  return (
    <div>
      {isVisible ? (
        <p className="text-green-600 dark:text-green-400">Component is visible!</p>
      ) : (
        <p className="text-gray-400">Component is hidden</p>
      )}
    </div>
  );
}

// List Rendering Component
function UserList({ users }: { users: Array<{ id: number; name: string }> }) {
  return (
    <ul className="list-disc list-inside">
      {users.map((user) => (
        <li key={user.id} className="text-gray-700 dark:text-gray-300">
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default function ReactComponentsPage() {
  const [isVisible, setIsVisible] = useState(true);
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          React Components
        </h1>

        <div className="space-y-6">
          <Card title="1. Basic Functional Component">
            <Greeting name="React Developer" />
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This is a simple functional component that accepts props.
            </p>
          </Card>

          <Card title="2. Component with Children">
            <Card title="Nested Card">
              <p className="text-gray-600 dark:text-gray-400">
                This card component accepts children and renders them inside.
              </p>
            </Card>
          </Card>

          <Card title="3. Component Composition">
            <UserProfile name="John Doe" email="john@example.com" role="Developer" />
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This component is composed of multiple smaller components.
            </p>
          </Card>

          <Card title="4. Conditional Rendering">
            <ConditionalComponent isVisible={isVisible} />
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Toggle Visibility
            </button>
          </Card>

          <Card title="5. List Rendering">
            <UserList users={users} />
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Components can render lists of items using the map function.
            </p>
          </Card>

          <Card title="6. Component Structure Example">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`// Component Definition
function MyComponent({ prop1, prop2 }) {
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{prop2}</p>
    </div>
  );
}

// Component Usage
<MyComponent prop1="Title" prop2="Description" />`}
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
