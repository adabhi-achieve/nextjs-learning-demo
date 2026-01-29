import Link from "next/link";

export default function FileRoutingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          File-Based Routing
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              How File-Based Routing Works
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Next.js uses the file system to create routes. Each file in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app</code> directory becomes a route.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              File Structure Examples
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Static Routes</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`app/
  page.tsx          → /
  about/
    page.tsx        → /about
  contact/
    page.tsx        → /contact`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dynamic Routes</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`app/
  users/
    [id]/
      page.tsx      → /users/123, /users/456, etc.`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Catch-All Routes</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`app/
  docs/
    [...slug]/
      page.tsx      → /docs/a, /docs/a/b, /docs/a/b/c, etc.`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Route Groups</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`app/
  (marketing)/
    about/
      page.tsx      → /about (group doesn't affect URL)
    contact/
      page.tsx      → /contact`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Special Files
            </h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">layout.tsx</span>
                <span className="text-gray-600 dark:text-gray-400">Shared layout for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">loading.tsx</span>
                <span className="text-gray-600 dark:text-gray-400">Loading UI for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">error.tsx</span>
                <span className="text-gray-600 dark:text-gray-400">Error UI for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">not-found.tsx</span>
                <span className="text-gray-600 dark:text-gray-400">404 page for a segment</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Try It Out
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Home (/)
              </Link>
              <Link
                href="/routing"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Routing (/routing)
              </Link>
              <Link
                href="/routing/dynamic/123"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Dynamic Route (/routing/dynamic/123)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
