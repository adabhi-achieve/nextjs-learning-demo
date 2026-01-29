export default function LazyComponent() {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
      <p className="text-green-800 dark:text-green-200">
        This component was loaded lazily! Check the Network tab to see it loaded separately.
      </p>
    </div>
  );
}
