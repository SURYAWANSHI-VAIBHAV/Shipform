// src/components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto tracking-widest">
                <h1 className="text-7xl font-bold mb-4">
                    Build
                    <span className='text-[#4E90F5]'> customize forms </span>
                    in seconds
                </h1>
                <p className="text-xl mb-6">

                    Create beautiful forms and share them anywhere. It super fast, you don't need to know how to code. Get started for free!
                </p>
                <Link href="/form/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
                    Create form
                </Link>

                <div className='flex gap-4 justify-center mt-10'>
                    <p>✅ Unlimited forms </p>  
                    <p>✅ Unlimited fields </p>
                    <p>✅ Unlimited responses</p>
                </div>
            </div>
        </section>
    );
}
