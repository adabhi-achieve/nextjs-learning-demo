export default function HTMLFlexboxPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          HTML + Flexbox
        </h1>

        <div className="space-y-8">
          {/* Flexbox Basics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Flexbox Container Properties
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Flex Direction (Row)</h3>
                <div className="flex flex-row gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                  <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
                  <div className="bg-blue-500 text-white p-4 rounded">Item 2</div>
                  <div className="bg-blue-500 text-white p-4 rounded">Item 3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Flex Direction (Column)</h3>
                <div className="flex flex-col gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                  <div className="bg-green-500 text-white p-4 rounded">Item 1</div>
                  <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
                  <div className="bg-green-500 text-white p-4 rounded">Item 3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Justify Content (Space Between)</h3>
                <div className="flex justify-between gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                  <div className="bg-purple-500 text-white p-4 rounded">Item 1</div>
                  <div className="bg-purple-500 text-white p-4 rounded">Item 2</div>
                  <div className="bg-purple-500 text-white p-4 rounded">Item 3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Justify Content (Center)</h3>
                <div className="flex justify-center gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                  <div className="bg-red-500 text-white p-4 rounded">Item 1</div>
                  <div className="bg-red-500 text-white p-4 rounded">Item 2</div>
                  <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Align Items (Center)</h3>
                <div className="flex items-center gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded h-32">
                  <div className="bg-yellow-500 text-white p-4 rounded">Item 1</div>
                  <div className="bg-yellow-500 text-white p-4 rounded">Item 2</div>
                  <div className="bg-yellow-500 text-white p-4 rounded">Item 3</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">6. Flex Wrap</h3>
                <div className="flex flex-wrap gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-indigo-500 text-white p-4 rounded">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* HTML5 Semantic Elements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              HTML5 Semantic Elements
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`<header> - Header content
<nav> - Navigation links
<main> - Main content
<article> - Independent content
<section> - Thematic grouping
<aside> - Sidebar content
<footer> - Footer content`}
              </pre>
            </div>
          </div>

          {/* Responsive Layout Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Responsive Layout Example
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-blue-100 dark:bg-blue-900 p-6 rounded">
                <h3 className="font-semibold mb-2">Sidebar</h3>
                <p>This sidebar stacks on mobile and sits beside content on desktop.</p>
              </div>
              <div className="flex-2 bg-green-100 dark:bg-green-900 p-6 rounded">
                <h3 className="font-semibold mb-2">Main Content</h3>
                <p>Main content area that takes up more space on desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
