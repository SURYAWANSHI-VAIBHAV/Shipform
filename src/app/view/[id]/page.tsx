'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import Nav from '@/components/Navigation/nav';

interface FormField {
  label: string;
  type: string;
}

interface Form {
  title: string;
  fields: FormField[];
}

const ViewForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState<Form | null>(null);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formattedResponses = Object.keys(responses).map((index) => ({
      label: form?.fields[parseInt(index)].label,
      value: responses[parseInt(index)],
    }));

    try {
      await axios.post(`/api/forms/response`, { formId: id, responses: formattedResponses });

      setModalMessage("You have successfully submitted the form! 🎉");
      setModalVisible(true);

      const currentCount = parseInt(Cookies.get('submissionCount') || '0', 10);

      const newCount = currentCount + 1;

      Cookies.set('submissionCount', newCount.toString(), { expires: 7 }); // Store the count for 7 days
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };

  useEffect(() => {
    const currentImpressionCount = parseInt(Cookies.get('impressionCount') || '0', 10);
    const newImpressionCount = currentImpressionCount + 1;

    Cookies.set('impressionCount', newImpressionCount.toString(), { expires: 7 });

    console.log("Total impressions: ", newImpressionCount);

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

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (!form) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="flex justify-center py-12 px-4 bg-[#F0EBF8] min-h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 flex w-full pl-8 items-center bg-white h-28 rounded-xl my-8">
            {form?.title}
          </h2>
          {form?.fields?.map((field, index) => (
            <div key={index} className="mb-4 bg-white w-full p-4 rounded-xl">
              <label className="block text-sm font-medium text-gray-600 mb-2">{field.label}</label>
              <input
                type={field.type || 'text'}
                value={responses[index] || ''}
                onChange={(e) => handleResponseChange(index, e)}
                className="block w-full px-4 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500 focus:border-transparent"
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

      {modalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-xl font-semibold text-gray-700">{modalMessage}</h3>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewForm;
