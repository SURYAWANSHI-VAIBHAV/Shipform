'use client'
import { useState } from "react";

export function Input({ id, type, labelName, isRequired, isMultiple, onRequiredChange, onLabelChange ,onTypeChange,ondelete}: any) {
    const [isEdit, setEdit] = useState(false); // Toggle for edit mode
    const [value, setValue] = useState(labelName);
    const [isRequiredInput, setIsRequiredInput] = useState(isRequired); // Initialize with isRequired
    const [inptype, setType] = useState(type); // Initialize with isRequired

    // Handle the checkbox state change
    const handleRequired = (event: any) => {
        const newRequired = event.target.checked;
        setIsRequiredInput(newRequired);
        onRequiredChange(id, newRequired); // Update isRequired in parent state
    };

    const handleLabelChange = (event: any) => {
        const newLabel = event.target.value;
        setValue(newLabel);
        onLabelChange(id, newLabel); // Call the parent's function to update the label in the state
    };
    const handleType = (newType:string) => {
        setType(newType);
        onTypeChange(id, newType); // Call the parent's function to update the label in the state
    };
    const handleDelete=(id:any)=>{
        ondelete(id)
    }

    return (
        <div key={id}>
            <div className="label">
                <label htmlFor={labelName} className='label-text'>
                    {isEdit ? (
                        <input
                            type="text"
                            className='bg-transparent'
                            value={value}
                            onChange={handleLabelChange}
                            onBlur={() => setEdit(false)} // Switch to read-only on blur
                        />
                    ) : (
                        <>
                            <span>{labelName}</span>
                            <span className="text-red-500">*</span>
                        </>
                    )}
                </label>

                <button onClick={() => setEdit(true)} className="ml-2 text-lg">
                    📝
                </button>
            </div>
            <div className="flex gap-4">
                <input
                    type={inptype}
                    name={labelName}
                    id={labelName}
                    className='input input-bordered w-full bg-transparent border-2'
                    placeholder={`Enter your ${labelName}`}
                    readOnly
                />
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn">Type</div>
                    <ul tabIndex={0} className="ml-2 dropdown-content menu bg-base-900 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleType("text")}><a>text</a></li>
                        <li onClick={()=>handleType("number")}><a>Number</a></li>
                    </ul>
                </div>
                <div className="pt-2">
                    <button onClick={()=>handleDelete(id)}>
                        ❌
                    </button>
                </div>
            </div>
            <div className="label">
                <div className="label-text-alt">
                    <span>Is Required</span>
                    <input
                        type="checkbox"
                        checked={isRequiredInput} // Use the state for checkbox
                        onChange={handleRequired} // Handle checkbox change
                    />
                </div>
            </div>
        </div>
    );
}