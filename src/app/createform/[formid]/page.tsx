'use client'
import Formnav from '@/components/Navigation/formnav';
import { Input } from '@/components/Input/input';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'next/navigation';
import axios from 'axios';

interface input {
    id: string,
    type: string,
    labelName: string,
    isRequired: boolean,
    isMultiple: boolean
}
export default function Page() {
    const [formName, setFormName] = useState("form name");
    const [editFormName, setEditFormName] = useState(false);
    const [value, setValue] = useState(formName)
    const [inputs, setInputs] = useState([
        {
            inputId: 1,
            type: "email",
            labelName: "Email",
            isRequired: true,
            isMultiple: false
        }
    ]);
    const { formid } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const [formData,setFormData]=useState()



    const createForm = async () => {
        try {
            const { data } = await axios.post(`http://localhost:3000/api/form/createform/${formid}`, {
                userId: "123",
                inputs: inputs,
                isLive: true,
                formName: value
            });
        } catch (err) {
            setError('Failed to fetch form data.');
        } finally {
            setLoading(false);
        }
    };


    // Function to update labelName in the state
    const handleLabelChange = (id: number, newLabel: string) => {
        setInputs(prevInputs =>
            prevInputs.map(input =>
                input.inputId === id ? { ...input, labelName: newLabel } : input
            )
        );
    };

    // Function to update isRequired in the state
    const handleRequiredChange = (id: number, newRequired: boolean) => {
        setInputs(prevInputs =>
            prevInputs.map(input =>
                input.inputId === id ? { ...input, isRequired: newRequired } : input
            )
        );
    };
    const handleFormNameChange = (e: any) => {
        setValue(e.target.value)
    };
    const handleTypeChange = (id: number, newType: string) => {
        setInputs(prevInputs =>
            prevInputs.map(input =>
                input.inputId === id ? { ...input, type: newType } : input
            )
        );
    };

    const addfield = () => {
        setInputs(prevInputs => [
            ...prevInputs, // Spread the existing inputs
            {
                inputId: nanoid(),
                type: "text",
                labelName: "Email",
                isRequired: true,
                isMultiple: false
            }
        ]);
    };

    const deleteField = (id: any) => {
        setInputs(prevInputs => prevInputs.filter(input => input.inputId !== id));
    };




    return (
        <div className='w-full h-screen'>
            <Formnav />
            <div className='w-full flex h-[calc(100vh-4rem)]  overflow-y-auto bg-[#f3f4f6d1]'>
                <div className='w-10/12 mx-auto pt-10'>
                    <div className='flex w-full justify-center '>
                        {editFormName ?

                            <div className='flex justify-center  text-3xl text-center'>
                                <input
                                    type="text"
                                    className='bg-transparent pl-20'
                                    value={value}
                                    onChange={handleFormNameChange}
                                    onBlur={() => setEditFormName(false)}
                                />
                            </div> : <h1 className='text-3xl text-center'>{value}</h1>

                        }
                        <button onClick={() => setEditFormName(true)} className="ml-2 text-lg">
                            📝
                        </button>
                    </div>
                    <div >
                        <div className='w-1/2 mx-auto flex flex-col'>
                            <button className='btn  w-40' onClick={addfield}>Add Field</button>
                            {inputs.map(({ inputId, type, labelName, isRequired, isMultiple }) => (
                                <Input
                                    key={inputId}
                                    id={inputId}
                                    type={type}
                                    labelName={labelName}
                                    isRequired={isRequired}
                                    isMultiple={isMultiple}
                                    onLabelChange={handleLabelChange}
                                    onRequiredChange={handleRequiredChange}
                                    onTypeChange={handleTypeChange}
                                    ondelete={deleteField}
                                />
                            ))}
                            <button type='submit' className='btn btn-success w-1/2 mt-4' onClick={createForm}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
