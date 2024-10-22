'use client';

import Navbar from '@/components/Navigation/navbar';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface FormInput {
  _id: string;
  type: string;
  labelName: string;
  isRequired: boolean;
}

interface FormDetails {
  formName: string;
  userId: string;
  inputs: FormInput[];
}

const Page: React.FC = () => {
  const [formDetails, setFormDetails] = useState<FormDetails | null>(null);
  const [userInput, setUserInput] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { formid } = useParams();

  useEffect(() => {
    const fetchFormDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/form/getform/${formid}`);
        setFormDetails(data);

        // Initialize userInput with the form's fields
        const initialInputs = data.inputs.reduce((acc: Record<string, string>, input: FormInput) => {
          acc[input.labelName] = '';
          return acc;
        }, {});
        setUserInput(initialInputs);
      } catch (err) {
        setError('Failed to fetch form data.');
      } finally {
        setLoading(false);
      }
    };

    fetchFormDetails();
  }, [formid]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formDetails) return;

    const response = {
      userId: 'user123', // Replace this with the actual dynamic userId
      ownerId: formDetails.userId,
      formId: formid,
      formData: Object.keys(userInput).map((labelName) => ({
        labelName,
        ans: userInput[labelName],
      })),
    };

    try {
      const res = await fetch(`/api/response/${formid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      });

      const data = await res.json();
      if (data.success) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed:', data.message);
      }
    } catch (err) {
      console.error('Failed to submit the form:', err);
    }
  };

  if (loading) return <div className="h-screen bg-gray-200 text-center">Loading form...</div>;
  if (error) return <div className="h-screen bg-gray-200 text-center text-red-500">{error}</div>;

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full flex h-[calc(100vh-4rem)] overflow-y-auto bg-gray-100">
        <div className="w-10/12 mx-auto pt-10">
          <div className="flex justify-center mb-6">
            <h1 className="text-4xl font-bold text-center mb-4">{formDetails?.formName}</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            {formDetails?.inputs.map(({ _id, type, labelName, isRequired }) => (
              <FormInputField
                key={_id}
                type={type}
                labelName={labelName}
                isRequired={isRequired}
                value={userInput[labelName]}
                onChange={handleInputChange}
              />
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-lg mt-6 hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface FormInputFieldProps {
  type: string;
  labelName: string;
  isRequired: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ type, labelName, isRequired, value, onChange }) => (
  <div className="mb-6">
    <label htmlFor={labelName} className="block mb-2 text-lg font-medium text-gray-700">
      {labelName}
      {isRequired && <span className="text-red-500"> *</span>}
    </label>
    <input
      type={type}
      name={labelName}
      id={labelName}
      required={isRequired}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${labelName}`}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Page;
