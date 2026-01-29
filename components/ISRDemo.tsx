// This component demonstrates ISR
export const revalidate = 60; // Revalidate every 60 seconds

export default async function ISRDemo() {
  // This fetch will be cached and revalidated every 60 seconds
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/3', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const post = await response.json();
  const renderTime = new Date().toISOString();

  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
      <p className="text-purple-800 dark:text-purple-200 mb-2">
        <strong>ISR Example:</strong> This data is cached and revalidated every 60 seconds
      </p>
      <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
        <p className="text-sm"><strong>Title:</strong> {post.title}</p>
        <p className="text-sm"><strong>Rendered at:</strong> {renderTime}</p>
      </div>
      <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
        Content updates automatically every 60 seconds without rebuild
      </p>
    </div>
  );
}
