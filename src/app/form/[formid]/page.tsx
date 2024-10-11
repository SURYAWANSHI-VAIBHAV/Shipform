'use client'
import Navbar from '@/components/Navigation/navbar';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { formid } = useParams();

  useEffect(() => {
    const getForm = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/form/getform/${formid}`);
        setFormData(data);
      } catch (err) {
        setError('Failed to fetch form data.');
      } finally {
        setLoading(false);
      }
    };

    getForm();
  }, [formid]);

  if (loading) {
    return <div className="h-screen bg-[#f3f4f6d1] text-center">Loading form...</div>;
  }

  if (error) {
    return <div className="h-screen bg-[#f3f4f6d1] text-center text-red-500">{error}</div>;
  }

  return (
    <div className='w-full h-screen'>\
    <Navbar/>
      <div className='w-full flex h-[calc(100vh-4rem)] overflow-y-auto bg-[#f3f4f6d1]'>
        <div className='w-10/12 mx-auto pt-10'>
          <div className='flex w-full justify-center'>
            <h1 className='text-3xl text-center'>{formData?.formName}</h1>
          </div>
          <div>
            <div className='w-1/2 mx-auto flex flex-col'>
              {formData?.inputs?.map(({ _id, type, labelName, isRequired }: any) => (
                <div key={_id} className="mb-4">
                  <label htmlFor={labelName} className="block mb-2">
                    {labelName}{isRequired && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={type}
                    name={labelName}
                    id={labelName}
                    required={isRequired}
                    placeholder={`Enter your ${labelName}`}
                    className='bg-transparent input input-bordered w-full'
                  />
                </div>
              ))}
              <button type='submit' className='btn btn-success w-1/2 mt-4'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
