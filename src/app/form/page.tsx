'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'; // Import nanoid
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Formnav from '@/components/Navigation/formnav';

function Page() {
    const [inputs, setInputs] = useState([{ id: 'ertftyftyftyf', type: 'text', data: '' }]);
    const [inputType, setInputType] = useState('text'); // State for selected input type

    const createInput = () => {
        setInputs([...inputs, { id: nanoid(), type: inputType, data: '' }]); // Use the selected input type
    };

    const handleInputChange = (index: any, value: any) => {
        const newInputs = [...inputs];
        newInputs[index].data = value; // Update the specific input field
        setInputs(newInputs);
    };

    const submitForm = () => {
        console.log('Submitted Inputs:', inputs);
    };

    const deleteItem = (inputId: any) => {
        const newInputs = inputs.filter(input => input.id !== inputId);
        setInputs(newInputs);
    };

    const handleTypeSelect = (type: any) => {
        setInputType(type); // Update the selected input type
    };

    return (
        <div className='w-full h-screen'>
            <Formnav />
            <div className='w-full flex h-[calc(100vh-4rem)] bg-[#f3f4f6d1]'>
                <div className='w-10/12 mx-auto pt-10  '>
                    <div className='w-1/2 mx-auto'>
                        <div className='flex gap-4'>
                            <DropdownMenu >
                                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Custom Inputs</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => handleTypeSelect('text')}>Text</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleTypeSelect('password')}>Password</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleTypeSelect('file')}>File</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleTypeSelect('checkbox')}>Checkbox</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleTypeSelect('radio')}>Radio</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <button onClick={createInput} className='px-4 py-2 rounded-md bg-black text-white mt-4'>
                                Create
                            </button>
                        </div>
                        <div className="grid w-full max-w-xl items-center gap-1.5 mt-4">
                            {inputs.map((input, index) => (
                                <div key={input.id} className='flex w-full items-center'>
                                    <div className='flex-shrink-0 w-full pr-2'>
                                        <Label htmlFor={`input-${input.id}`}>Input {index + 1}</Label>

                                        <div className=''>
                                            <Input
                                                type={input.type}
                                                id={`input-${input.id}`}
                                                placeholder={`Input ${index + 1}`}
                                                value={input.data}
                                                onChange={(e) => handleInputChange(index, e.target.value)}
                                            />
                                        </div>

                                    </div>
                                    <div className='translate-y-3'>
                                        <button onClick={() => deleteItem(input.id)}>
                                            ❌
                                        </button>
                                      
                                    </div>
                                    <div className="dropdown">
                                            <div tabIndex={0} role="button" className="btn btn-ghost m-1">Click</div>
                                            <ul tabIndex={0} className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </div>
                                </div>
                            ))}
                            <button onClick={submitForm} className='px-4 py-2 mt-4 rounded-md bg-black text-white'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
