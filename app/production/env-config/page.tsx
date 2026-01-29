export default function EnvConfigPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Environment Configuration
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Environment Variables in Next.js
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Next.js supports environment variables for configuration. Variables prefixed with <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">NEXT_PUBLIC_</code> are exposed to the browser.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Environment Files
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">.env.local</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Local development variables (gitignored)
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">.env.example</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Template file (committed to git) showing required variables
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`DATABASE_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_API_URL=`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">.env.production</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Production environment variables
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Accessing Environment Variables
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Server-Side (API Routes, Server Components)</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// app/api/route.ts
export async function GET() {
  const secret = process.env.SECRET_KEY;
  // Only accessible on server
  return Response.json({ message: 'Server-side only' });
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Client-Side (Client Components)</h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <pre className="text-sm overflow-x-auto">
                    {`// Must prefix with NEXT_PUBLIC_
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com

// Component
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// Accessible in browser`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Never commit <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.env.local</code> to git</li>
              <li>Always provide <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.env.example</code> as a template</li>
              <li>Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">NEXT_PUBLIC_</code> prefix only for variables needed in the browser</li>
              <li>Keep sensitive keys (API secrets, database URLs) server-side only</li>
              <li>Use different values for development and production</li>
              <li>Validate environment variables at startup</li>
              <li>Use TypeScript types for environment variables when possible</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Example Configuration
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                {`# .env.local (Development)
DATABASE_URL=postgresql://localhost:5432/mydb
NEXTAUTH_SECRET=dev-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000

# .env.production (Production)
DATABASE_URL=postgresql://prod-server:5432/mydb
NEXTAUTH_SECRET=prod-secret-key-change-this
NEXT_PUBLIC_API_URL=https://api.myapp.com`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
