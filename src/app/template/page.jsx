import TempleteCard from '@/components/cards/card'
import Navbar from '@/components/Navigation/navbar'
import React from 'react'
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
function page() {
  return (

   <div className=''>
    <Navbar/>
        <h1 className='text-center text-4xl font-bold mt-10'>Form Templetes</h1>
        <p className='text-center text-xl mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nam.</p>
        <div className='flex gap-10 flex-wrap justify-center'>
        {formTemplates.map((form, index) => ((

          <TempleteCard id={form.id} title={form.title} category={form.category} description={form.description} formLink={form.formLink} />
        )))}
        </div>
      </div>
  )
}

export default page