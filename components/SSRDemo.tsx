// This component demonstrates SSR
export const dynamic = 'force-dynamic';

export default async function SSRDemo() {
  // This fetch happens on every request (SSR)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store', // Force fresh data on each request
  });
  const post = await response.json();
  const serverTime = new Date().toISOString();

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <p className="text-blue-800 dark:text-blue-200 mb-2">
        <strong>SSR Example:</strong> This data is fetched on each request
      </p>
      <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
        <p className="text-sm"><strong>Title:</strong> {post.title}</p>
        <p className="text-sm"><strong>Rendered at:</strong> {serverTime}</p>
      </div>
      <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
        Refresh the page to see the timestamp update
      </p>
    </div>
  );
}
