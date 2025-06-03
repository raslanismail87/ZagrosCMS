export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to ZagrosCMS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern headless CMS built with FastAPI and Next.js
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Admin Panel
            </a>
            <a
              href="http://localhost:8000/docs"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              API Documentation
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Fast API
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              High-performance backend built with FastAPI and PostgreSQL
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Modern Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              React-based admin interface with Next.js and TypeScript
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Headless CMS
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Flexible content management with REST API access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
