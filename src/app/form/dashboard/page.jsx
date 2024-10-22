'use client';
import { PlusIcon } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation'; // Use useRouter for client-side navigation
import React from 'react';
import TempleteCard from '@/components/cards/card'
import { Input } from '@/components/ui/input';

const formTemplates= [
    {
      "id": 1,
      "category": "Student",
      "title": "Student Registration Form",
      "description": "A form template for students to register for academic events or programs.",
      "image": "student_form_image_url",
      "formLink": "https://example.com/student-registration"
    },
    {
      "id": 2,
      "category": "Personal",
      "title": "Personal Information Form",
      "description": "A form template for collecting personal details for various purposes.",
      "image": "personal_form_image_url",
      "formLink": "https://example.com/personal-info"
    },
    {
      "id": 3,
      "category": "Industry",
      "title": "Industry Feedback Form",
      "description": "A form template for gathering feedback from industry professionals.",
      "image": "industry_form_image_url",
      "formLink": "https://example.com/industry-feedback"
    },
    {
      "id": 4,
      "category": "Industry",
      "title": "Industry Feedback Form",
      "description": "A form template for gathering feedback from industry professionals.",
      "image": "industry_form_image_url",
      "formLink": "https://example.com/industry-feedback"
    }
  ]


function Page() {
  const router = useRouter();

  const handleCreateFormClick = () => {
    const id = nanoid();
    router.push(`/createform/${id}`); // Redirect to form creation page with the unique ID
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-4 items-center mb-6">
          <button
            onClick={handleCreateFormClick}
            className="flex items-center justify-center bg-blue-500 text-white w-20 h-20 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <PlusIcon className="h-10 w-10" />
          </button>
          <h1 className='text-2xl'>create Form</h1>
        </div>
      </div>
      <div className='flex gap-20 justify-between mt-10 px-10 '>
        <div className='flex gap-10'>
          <div>
            <select name="formType" id="formType" class="w-56 py-2 border-none rounded-lg text-black">
              <option value="" disabled selected>All Type</option>
              <option value="registration">Registration Form</option>
              <option value="feedback">Feedback Form</option>
              <option value="survey">Survey Form</option>
              <option value="contact">Contact Us Form</option>
            </select>
          </div>
          <div>
            <select name="orgFormType" id="orgFormType" class="w-56 py-2 border-none rounded-lg text-black">
              <option value="industry">All Industries</option>
              <option value="student">Student Form</option>
              <option value="personal">Personal Form</option>
            </select>
          </div>
        </div>

        <Input placeholder='Search' className='w-60' />

      </div>
      <div className='mt-10'>
        <h1 className='text-center text-4xl font-bold'>Form Templetes</h1>
        <p className='text-center text-xl mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nam.</p>
        <div className='flex gap-10 flex-wrap justify-center'>
        {formTemplates.map((form, index) => ((

          <TempleteCard id={form.id} title={form.title} category={form.category} description={form.description} formLink={form.formLink} />
        )))}
        </div>
      </div>
    </div>
  );
}

export default Page;
