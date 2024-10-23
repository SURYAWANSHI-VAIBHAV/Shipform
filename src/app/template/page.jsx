import TempleteCard from '@/components/cards/card';
import Navbar from '@/components/Navigation/navbar';
import React from 'react';

const formTemplates = [
  {
    id: 1,
    category: 'Student',
    title: 'Student Registration Form',
    description: 'A form template for students to register for academic events or programs.',
    image: 'student_form_image_url',
    formLink: 'https://example.com/student-registration',
  },
  {
    id: 2,
    category: 'Personal',
    title: 'Personal Information Form',
    description: 'A form template for collecting personal details for various purposes.',
    image: 'personal_form_image_url',
    formLink: 'https://example.com/personal-info',
  },
  {
    id: 3,
    category: 'Industry',
    title: 'Industry Feedback Form',
    description: 'A form template for gathering feedback from industry professionals.',
    image: 'industry_form_image_url',
    formLink: 'https://example.com/industry-feedback',
  },
  {
    id: 4,
    category: 'Industry',
    title: 'Industry Feedback Form',
    description: 'A form template for gathering feedback from industry professionals.',
    image: 'industry_form_image_url',
    formLink: 'https://example.com/industry-feedback',
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-6">Form Templates</h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Explore a variety of form templates tailored for different needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {formTemplates.map((form) => (
            <TempleteCard
              key={form.id}
              id={form.id}
              title={form.title}
              category={form.category}
              description={form.description}
              formLink={form.formLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
