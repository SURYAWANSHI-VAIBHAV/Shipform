// src/app/view/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { use } from 'react';

const ViewForm = ({ params }: { params: Promise<{ id: string }> }) => {
  // Use `React.use` to unwrap `params` before accessing `id`
  const { id } = use(params);
  const [form, setForm] = useState<any>(null);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(`/api/forms/${id}`);
        setForm(response.data);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };
    fetchForm();
  }, [id]);

  const handleResponseChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    setResponses({ ...responses, [index]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formattedResponses = Object.keys(responses).map((index) => ({
      label: form.fields[parseInt(index)].label,
      value: responses[parseInt(index)],
    }));

    try {
      await axios.post('/api/forms/response', { formId: id, responses: formattedResponses });
      alert("Response submitted successfully!");
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };

  if (!form) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">{form.title}</h2>
        {form.fields.map((field: any, index: number) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">{field.label}</label>
            <input
              type={field.type}
              value={responses[index] || ''}
              onChange={(e) => handleResponseChange(index, e)}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
        >
          Submit Response
        </button>
      </form>
    </div>
  );
};

export default ViewForm;
