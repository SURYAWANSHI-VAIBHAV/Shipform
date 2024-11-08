'use client';
import React, { useEffect, useState } from 'react';
import TemplateGrid from '@/components/TemplateGrid/templategrid';
import { FaPlus } from 'react-icons/fa';
import Nav from '@/components/Navigation/nav';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Form {
    _id: string;
    title: string;
    fields: any[];  // Adjust the type of fields based on the structure, e.g., `Array<Field>`
    createdAt: string;
}

function DashboardPage() {
    const router = useRouter();
    const [forms, setForms] = useState<Form[]>([]);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get<Form[]>('/api/forms');
                if (response.status === 200) {
                    setForms(response.data); 
                }
            } catch (error) {
                console.error('Error fetching forms:', error);
            }
        };

        fetchForms();
    }, []);

    const handleCreateBlankForm = async () => {
        try {
            const response = await axios.post<Form>('/api/forms', { title: '', fields: [] });
            if (response.status === 201) {
                router.push(`/forms/${response.data._id}`);
            }
        } catch (error) {
            console.error('Error creating blank form:', error);
        }
    };

    

    return (
        <div className="h-screen bg-gray-50 dark:bg-neutral-900 text-black">
            <Nav />

            <main className="flex-1 overflow-y-auto pt-24 px-20">
                    <div className='flex gap-4'>
                
                <section className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2 mb-8">
                    <button
                        onClick={handleCreateBlankForm}
                        className="w-36 h-36 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                    >
                        <FaPlus size={32} className="text-gray-500" />
                    </button>
                    <p className="text-lg font-semibold">Create Blank Form</p>

                </div>
                        {forms.map((form) => (
                            <div
                                key={form._id}
                                className=" "
                                onClick={() => router.push(`/forms/${form._id}`)}
                            >
                                <div className=' p-4 bg-white border w-36 h-36 flex flex-col items-center justify-center border-gray-300  rounded-lg shadow-md hover:shadow-lg cursor-pointer'>
                                <h3 className="text-lg font-bold">{form.title || 'Untitled Form'}</h3>
                                <p className="text-sm text-gray-600">
                                    {form.fields.length} Fields
                                </p>
                                </div>
                                <p className="text-lg font-semibold mt-2">
                                    Created at: {new Date(form.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
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
