import ClientComponent from "./ClientComponent";

// Server Component that uses a Client Component
export default function ServerClientMix() {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
      <p className="text-purple-800 dark:text-purple-200 mb-4">
        <strong>Server Component</strong> that contains a <strong>Client Component</strong>:
      </p>
      <div className="mt-4">
        <ClientComponent />
      </div>
      <p className="text-sm text-purple-600 dark:text-purple-400 mt-4">
        Server components can import and render client components, but not vice versa.
      </p>
    </div>
  );
}
