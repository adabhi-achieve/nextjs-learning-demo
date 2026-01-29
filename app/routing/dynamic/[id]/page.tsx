import Link from "next/link";

export default function DynamicRoutePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Dynamic Route Example
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-lg mb-4">
            This is a dynamic route. The ID parameter is: <strong className="text-blue-600">{params.id}</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This page was generated for the dynamic segment: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[id]</code>
          </p>
          <Link
            href="/routing"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Routing
          </Link>
        </div>
      </div>
    </div>
  );
}
