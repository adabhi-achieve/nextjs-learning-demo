// This is a Server Component (no "use client" directive)
export default function ServerComponent() {
  // This runs on the server
  const serverTime = new Date().toLocaleString();
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <p className="text-blue-800 dark:text-blue-200">
        <strong>Server Component:</strong> This was rendered on the server at {serverTime}
      </p>
      <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
        Check the page source - this content is in the initial HTML!
      </p>
    </div>
  );
}
