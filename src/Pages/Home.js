function Home() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore my work, IUL MVPs, and financial literacy projects.
      </p>

      <div className="space-x-4">
        <a
          href="/agents"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          For Agents
        </a>
        <a
          href="/clients"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          For Clients
        </a>
        <a
          href="/financial-literacy"
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Financial Literacy
        </a>
      </div>
    </div>
  );
}

export default Home;
