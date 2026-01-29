// This component demonstrates SSG
export const dynamic = 'force-static';

export default async function SSGDemo() {
  // This fetch happens at build time (SSG)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
    // No cache: 'no-store' means it will be cached at build time
  });
  const post = await response.json();
  const buildTime = new Date().toISOString();

  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <p className="text-green-800 dark:text-green-200 mb-2">
        <strong>SSG Example:</strong> This data was fetched at build time
      </p>
      <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
        <p className="text-sm"><strong>Title:</strong> {post.title}</p>
        <p className="text-sm"><strong>Build time:</strong> {buildTime}</p>
      </div>
      <p className="text-xs text-green-600 dark:text-green-400 mt-2">
        This content is static and won't change until rebuild
      </p>
    </div>
  );
}
