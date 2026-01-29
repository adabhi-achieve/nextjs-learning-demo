import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js Learning Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive guide covering all essential Next.js and React topics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Phase 1 - Foundations */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Phase 1 – Foundations
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/foundations/modern-javascript" className="text-blue-600 hover:underline">
                  Modern JavaScript (ES6)
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/foundations/html-flexbox" className="text-blue-600 hover:underline">
                  HTML + Flexbox
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/foundations/react-components" className="text-blue-600 hover:underline">
                  React Components
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/foundations/props-state" className="text-blue-600 hover:underline">
                  Props & State
                </Link>
              </li>
            </ul>
          </div>

          {/* Phase 2 - Core React */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Phase 2 – Core React
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/core/hooks" className="text-blue-600 hover:underline">
                  Hooks (useState, useEffect)
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/core/api-integration" className="text-blue-600 hover:underline">
                  API Integration
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/routing" className="text-blue-600 hover:underline">
                  Routing
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/core/forms-validation" className="text-blue-600 hover:underline">
                  Forms & Validation
                </Link>
              </li>
            </ul>
          </div>

          {/* Phase 3 - Production React */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Phase 3 – Production React
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/production/error-handling" className="text-blue-600 hover:underline">
                  Error Handling
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/production/performance" className="text-blue-600 hover:underline">
                  Performance Basics
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/production/folder-structure" className="text-blue-600 hover:underline">
                  Folder Structure
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/production/env-config" className="text-blue-600 hover:underline">
                  Environment Configs
                </Link>
              </li>
            </ul>
          </div>

          {/* Next.js Features */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">
              Next.js Features
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/nextjs/file-routing" className="text-blue-600 hover:underline">
                  File-Based Routing
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/nextjs/api-routes" className="text-blue-600 hover:underline">
                  API Routes
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/nextjs/server-client" className="text-blue-600 hover:underline">
                  Server vs Client Components
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/nextjs/ssr-ssg" className="text-blue-600 hover:underline">
                  SSR / SSG
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/nextjs/third-party" className="text-blue-600 hover:underline">
                  Third-Party Integration
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <Link href="/auth" className="text-blue-600 hover:underline">
                  Authentication & Routing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            This demo application covers all essential topics for learning Next.js and React.
            Navigate through the sections above to explore each concept with working examples.
          </p>
        </div>
      </div>
    </div>
  );
}
