import HeroSection from "@/components/heroSection/herosection";
import Navbar from "@/components/Navigation/navbar";
import Image from "next/image";

const features = [
  {
    imgSrc: "/feature1.svg",
    alt: "Automation feature icon",
    title: "Feature One",
    description:
      "Streamline your workflow with intelligent automation and integrated processes.",
  },
  {
    imgSrc: "/feature2.svg",
    alt: "Collaboration feature icon",
    title: "Feature Two",
    description:
      "Enhance team productivity with advanced collaboration tools.",
  },
  {
    imgSrc: "/feature3.svg",
    alt: "Data Insights feature icon",
    title: "Feature Three",
    description:
      "Collaborate seamlessly with real-time data insights and analytics.",
  },
];

const FeatureCard = ({ imgSrc, alt, title, description }:any) => (
  <div className="text-center">
    <Image src={imgSrc} alt={alt} width={80} height={80} />
    <h3 className="mt-6 text-3xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-4 text-gray-500 max-w-md mx-auto">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-5xl font-bold text-gray-800 mb-12">
              Our Key Features
            </h2>
            <div className="grid sm:grid-cols-3 gap-12">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  imgSrc={feature.imgSrc}
                  alt={feature.alt}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          id="get-started"
          className="py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-white"
        >
          <h2 className="text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg mt-6 opacity-90">
            Join thousands of businesses who trust our platform to scale their
            operations.
          </p>
          <a
            href="/signup"
            className="mt-10 inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Sign Up for Free
          </a>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Your SaaS Company. All rights reserved.</p>
          <div className="flex justify-center gap-8 mt-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
