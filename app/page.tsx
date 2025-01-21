export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">Hi, I'm Jana! A passionate developer building modern web experiences.</p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a Computer Science graduate with a strong work ethic and a passion for technology. 
          My expertise lies in creating efficient solutions and bringing ideas to life with code.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">A brief description of Project 1.</p>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">A brief description of Project 2.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-8">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
          <a
            href="/contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
