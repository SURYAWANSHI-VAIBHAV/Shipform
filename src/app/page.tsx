import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Image
            className="mx-auto"
            src="/logo.svg" // Replace with your logo
            alt="SaaS Logo"
            width={100}
            height={100}
          />
          <h1 className="text-5xl font-bold mt-6">
            The Ultimate SaaS Solution for Your Business
          </h1>
          <p className="text-lg mt-4">
            Empower your team with modern tools and simplify your operations.
          </p>
          <a
            href="#get-started"
            className="inline-block mt-8 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-10">Features</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="text-center">
              <Image
                src="/feature1.svg" // Replace with your feature icon
                alt="Feature 1"
                width={80}
                height={80}
              />
              <h3 className="mt-6 text-2xl font-semibold">Feature One</h3>
              <p className="mt-4 text-gray-600">
                Streamline your workflow with feature one.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/feature2.svg" // Replace with your feature icon
                alt="Feature 2"
                width={80}
                height={80}
              />
              <h3 className="mt-6 text-2xl font-semibold">Feature Two</h3>
              <p className="mt-4 text-gray-600">
                Increase productivity with feature two.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/feature3.svg" // Replace with your feature icon
                alt="Feature 3"
                width={80}
                height={80}
              />
              <h3 className="mt-6 text-2xl font-semibold">Feature Three</h3>
              <p className="mt-4 text-gray-600">
                Collaborate seamlessly with feature three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="get-started"
        className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white"
      >
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="text-lg mt-4">
          Join thousands of businesses who trust us with their operations.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Sign Up for Free
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Your SaaS Company. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
