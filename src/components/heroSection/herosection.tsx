// src/components/LandingPage.tsx
import Link from 'next/link';
import { LucideIcon, Star, CheckCircle, Users, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Utility for conditional classes

export default function LandingPage() {
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <Section title="Features">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard
                        title="Drag & Drop Builder"
                        description="Easily build forms with our drag-and-drop builder."
                        icon={Star}
                    />
                    <FeatureCard
                        title="Real-Time Analytics"
                        description="Track form submissions and responses in real-time."
                        icon={CheckCircle}
                    />
                    <FeatureCard
                        title="Seamless Integrations"
                        description="Integrate with tools like Google Sheets, Slack, and more."
                        icon={Users}
                    />
                </div>
            </Section>

            {/* Pricing Section */}
            <Section title="Pricing">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="Free"
                        price="Free"
                        features={['Unlimited forms', 'Basic analytics']}
                    />
                    <PricingCard
                        title="Pro"
                        price="$15/month"
                        features={['Custom themes', 'Advanced integrations']}
                    />
                    <PricingCard
                        title="Enterprise"
                        price="$49/month"
                        features={['Priority support', 'Custom solutions']}
                    />
                </div>
            </Section>

            {/* Testimonials Section */}
            <Section title="What Our Users Say">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Testimonial
                        name="John Doe"
                        feedback="The drag-and-drop builder is amazing!"
                        image="/images/user1.jpg"
                    />
                    <Testimonial
                        name="Jane Smith"
                        feedback="The real-time analytics have helped me grow my business."
                        image="/images/user2.jpg"
                    />
                </div>
            </Section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Hero Section
function HeroSection() {
    return (
        <section className="h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center max-w-2xl mx-auto tracking-widest">
                <h1 className="text-7xl font-bold mb-4">
                    Build
                    <span className="text-blue-600"> customize forms </span>
                    in seconds
                </h1>
                <p className="text-lg mb-6 text-gray-700">
                    Create forms and share them. No coding required. Start for free!
                </p>
                <Link href={'/form/dashboard'}> <button className='btn bg-transparent text-blue-600'>Create a form <span><ArrowUpRight /></span></button></Link>

                <div className="flex gap-4 justify-center mt-10 text-md text-gray-600">
                    <p>✅ Unlimited forms</p>
                    <p>✅ Unlimited fields</p>
                    <p>✅ Unlimited responses</p>
                </div>
            </div>
        </section>
    );
}

// Section Component
function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
            {children}
        </section>
    );
}

// Feature Card Component
function FeatureCard({ title, description, icon: Icon }: { title: string, description: string, icon: LucideIcon }) {
    return (
        <Card className="bg-white shadow p-6">
            <CardTitle className="flex items-center space-x-3">
                <Icon className="text-blue-600" />
                <h3 className="text-xl font-semibold">{title}</h3>
            </CardTitle>
            <CardContent className="mt-4 text-gray-700">{description}</CardContent>
        </Card>
    );
}

// Pricing Card Component
function PricingCard({ title, price, features }: { title: string, price: string, features: string[] }) {
    return (
        <Card className="bg-white shadow p-6">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardContent className="mt-2 text-4xl font-bold text-gray-800">{price}</CardContent>
            <ul className="mt-4 space-y-2 text-gray-700">
                {features.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                ))}
            </ul>
            <Button variant="primary" className="mt-6 w-full">Get Started</Button>
        </Card>
    );
}

// Testimonial Component
function Testimonial({ name, feedback, image }: { name: string, feedback: string, image: string }) {
    return (
        <Card className="bg-white shadow p-6">
            <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="italic mb-4 text-gray-700">"{feedback}"</p>
            <p className="font-bold text-gray-800">{name}</p>
        </Card>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="py-8 bg-gray-100 text-center">
            <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
            <div className="mt-4 space-x-4">
                <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
            </div>
        </footer>
    );
}
