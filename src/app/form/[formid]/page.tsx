'use client';
import Navbar from '@/components/Navigation/navbar';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
  const [formDetails, setFormDetails] = useState<any>(null);
  const [userInput, setUserInput] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { formid } = useParams();

  useEffect(() => {
    const getForm = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/form/getform/${formid}`);
        setFormDetails(data);
        // Initialize user input state with form field ids and empty values
        const initialInputState = data.inputs.reduce((acc: any, input: any) => {
          acc[input.labelName] = '';
          return acc;
        }, {});
        setUserInput(initialInputState);
      } catch (err) {
        setError('Failed to fetch form data.');
      } finally {
        setLoading(false);
      }
    };

    getForm();
  }, [formid]);
  console.log(formDetails)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = {
        userId: 'user123',  // Replace with actual userId
        ownerId: formDetails.userId,
        formId: formid,
        formData: Object.keys(userInput).map((labelName) => ({
          labelName,
          ans: userInput[labelName],
        })),
      };

      const res = await fetch(`/api/response/${formid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
      });
      const data = await res.json();
      if (data.success) {
        // handle success
        console.log('Form submitted successfully!');
      }
    } catch (err) {
      console.error('Failed to submit the form:', err);
    }
  };

  if (loading) {
    return <div className="h-screen bg-[#f3f4f6d1] text-center">Loading form...</div>;
  }

  if (error) {
    return <div className="h-screen bg-[#f3f4f6d1] text-center text-red-500">{error}</div>;
  }

  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='w-full flex h-[calc(100vh-4rem)] overflow-y-auto bg-[#f3f4f6d1]'>
        <div className='w-10/12 mx-auto pt-10'>
          <div className='flex w-full justify-center'>
            <h1 className='text-3xl text-center'>{formDetails?.formName}</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit} className='w-1/2 mx-auto flex flex-col'>
              {formDetails?.inputs?.map(({ _id, type, labelName, isRequired }: any) => (
                <div key={_id} className="mb-4">
                  <label htmlFor={labelName} className="block mb-2">
                    {labelName}{isRequired && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={type}
                    name={labelName}
                    id={labelName}
                    required={isRequired}
                    value={userInput[labelName]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${labelName}`}
                    className='bg-transparent input input-bordered w-full'
                  />
                </div>
              ))}
              <button type='submit' className='btn btn-success w-1/2 mt-4'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
