import React from 'react';
import TemplateGrid from '@/components/TemplateGrid/templategrid';
import { FaPlus } from 'react-icons/fa';
import Nav from '@/components/Navigation/nav';
import Link from 'next/link';

function DashboardPage() {
    return (
        <div className="h-screen bg-gray-50 dark:bg-neutral-900 text-black ">
            <Nav />

            <main className="flex-1 overflow-y-auto pt-24 px-20">
                <div className="flex flex-col gap-2 mb-8">
                    <Link href={'./forms'} className="w-28 h-28 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
                        <FaPlus size={32} className="text-gray-500" />
                    </Link>
                    <p className="text-lg font-semibold">Create Blank Form</p>
                </div>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
                    <TemplateGrid />
                </section>
            </main>
        </div>
    );
}

export default DashboardPage;
