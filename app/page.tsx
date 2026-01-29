export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bloopa Agency OS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive operating system for managing your agency&apos;s projects, 
            clients, team members, and operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Project Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track and manage all your agency projects with status updates, timelines, and budgets.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-green-600 dark:text-green-400 text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Client Portal
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage client relationships, track communications, and maintain detailed client profiles.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-purple-600 dark:text-purple-400 text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Time Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Log hours, track team productivity, and generate accurate reports for billing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-orange-600 dark:text-orange-400 text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Task Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Assign tasks, set priorities, and track progress across all your projects.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-red-600 dark:text-red-400 text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Invoice Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create, send, and track invoices with automated reminders and payment tracking.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-teal-600 dark:text-teal-400 text-3xl mb-4">📁</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Document Storage
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Store and organize project documents, contracts, and deliverables securely.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
