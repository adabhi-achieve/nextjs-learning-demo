"use client";

import { useState } from "react";

export default function ModernJavaScriptPage() {
  const [examples, setExamples] = useState({
    arrowFunctions: false,
    destructuring: false,
    spread: false,
    templateLiterals: false,
    promises: false,
    asyncAwait: false,
  });

  // ES6 Examples
  const toggleExample = (key: keyof typeof examples) => {
    setExamples((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Arrow Functions Example
  const arrowFunctionExample = () => {
    return "Arrow function executed!";
  };

  // Destructuring Example
  const user = { name: "John", age: 30, city: "New York" };
  const { name, age } = user;

  // Spread Operator Example
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];

  // Template Literals Example
  const greeting = `Hello, ${name}! You are ${age} years old.`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Modern JavaScript (ES6+)
        </h1>

        <div className="space-y-6">
          {/* Arrow Functions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Arrow Functions
            </h2>
            <button
              onClick={() => toggleExample("arrowFunctions")}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {examples.arrowFunctions ? "Hide" : "Show"} Example
            </button>
            {examples.arrowFunctions && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// Traditional function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function
const greet = (name) => {
  return "Hello, " + name;
}

// Arrow function (implicit return)
const greet = (name) => "Hello, " + name;

// Result: ${arrowFunctionExample()}`}
                </pre>
              </div>
            )}
          </div>

          {/* Destructuring */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. Destructuring
            </h2>
            <button
              onClick={() => toggleExample("destructuring")}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {examples.destructuring ? "Hide" : "Show"} Example
            </button>
            {examples.destructuring && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// Object destructuring
const user = { name: "John", age: 30, city: "New York" };
const { name, age } = user;

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;

// Current values:
// name: ${name}
// age: ${age}`}
                </pre>
              </div>
            )}
          </div>

          {/* Spread Operator */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              3. Spread Operator
            </h2>
            <button
              onClick={() => toggleExample("spread")}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {examples.spread ? "Hide" : "Show"} Example
            </button>
            {examples.spread && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
// Result: [${arr2.join(", ")}]

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// Result: { a: 1, b: 2, c: 3 }`}
                </pre>
              </div>
            )}
          </div>

          {/* Template Literals */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              4. Template Literals
            </h2>
            <button
              onClick={() => toggleExample("templateLiterals")}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {examples.templateLiterals ? "Hide" : "Show"} Example
            </button>
            {examples.templateLiterals && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// Old way
const message = "Hello, " + name + "! You are " + age + " years old.";

// Template literals
const message = \`Hello, \${name}! You are \${age} years old.\`;

// Current result: ${greeting}`}
                </pre>
              </div>
            )}
          </div>

          {/* Promises */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              5. Promises & Async/Await
            </h2>
            <button
              onClick={() => toggleExample("promises")}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {examples.promises ? "Hide" : "Show"} Example
            </button>
            {examples.promises && (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`// Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
};

// Async/Await
const getData = async () => {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error(error);
  }
};`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
