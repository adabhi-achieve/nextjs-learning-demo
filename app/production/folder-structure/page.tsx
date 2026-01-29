import Link from "next/link";

export default function FolderStructurePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Folder Structure
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Next.js App Router Structure
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`nextjs-learning-demo/
├── app/                      # App Router directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (/)
│   ├── globals.css          # Global styles
│   ├── api/                 # API routes
│   │   ├── hello/
│   │   │   └── route.ts
│   │   └── users/
│   │       └── route.ts
│   ├── foundations/         # Feature pages
│   │   ├── modern-javascript/
│   │   │   └── page.tsx
│   │   └── ...
│   ├── core/
│   │   ├── hooks/
│   │   │   └── page.tsx
│   │   └── ...
│   ├── nextjs/
│   │   ├── file-routing/
│   │   │   └── page.tsx
│   │   └── ...
│   └── production/
│       ├── error-handling/
│       │   └── page.tsx
│       └── ...
├── components/              # Reusable components
│   ├── Navigation.tsx
│   ├── ServerComponent.tsx
│   └── ...
├── public/                 # Static assets
│   ├── images/
│   └── ...
├── .env.local             # Environment variables
├── .env.example           # Environment template
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Key Directories
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">app/</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Contains all routes, layouts, and pages. Uses file-based routing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">components/</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Reusable React components shared across the application.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">public/</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Static files served at the root URL (images, fonts, etc.).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">app/api/</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  API routes that create backend endpoints.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Special Files
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">layout.tsx</code>
                <span className="text-gray-600 dark:text-gray-400">Shared UI for a segment and its children</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">page.tsx</code>
                <span className="text-gray-600 dark:text-gray-400">Unique UI for a route</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">loading.tsx</code>
                <span className="text-gray-600 dark:text-gray-400">Loading UI for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">error.tsx</code>
                <span className="text-gray-600 dark:text-gray-400">Error UI for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">not-found.tsx</code>
                <span className="text-gray-600 dark:text-gray-400">404 UI for a segment</span>
              </div>
              <div className="flex items-start gap-2">
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">route.ts</code>
                <span className="text-gray-600 dark:text-gray-400">API endpoint handler</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Keep components in a dedicated <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">components/</code> directory</li>
              <li>Group related features in their own directories</li>
              <li>Use colocation for component-specific files (styles, tests)</li>
              <li>Keep API routes in <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">app/api/</code></li>
              <li>Store utilities and helpers in a <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">lib/</code> or <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">utils/</code> directory</li>
              <li>Use TypeScript for type safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
