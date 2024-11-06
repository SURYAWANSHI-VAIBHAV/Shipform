// src/app/components/FormBuilder.tsx
'use client'
import { useState } from 'react';
import axios from 'axios';

const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [fields, setFields] = useState([{ label: '', type: 'text' }]);

  const addField = () => {
    setFields([...fields, { label: '', type: 'text' }]);
  };

  const handleFieldChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newFields = [...fields];
    newFields[index].label = event.target.value;
    setFields(newFields);
  };

  const handleTypeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFields = [...fields];
    newFields[index].type = event.target.value;
    setFields(newFields);
  };

  const renderField = (field: { label: string; type: string }, index: number) => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={field.label}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Field Label"
            required
            className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          />
        );
      case 'number':
        return (
          <input
            type="number"
            value={field.label}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Field Label"
            required
            className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          />
        );
      default:
        return (
          <input
            type="text"
            value={field.label}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Field Label"
            required
            className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          />
        );
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/forms', { title, fields });
      // Clear the form or show a success message
      setTitle('');
      setFields([{ label: '', type: 'text' }]);
    } catch (error) {
      console.error("Error publishing form:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-semibold mb-4">Create Form</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Form Title"
        required
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          {renderField(field, index)}
          <select
            value={field.type}
            onChange={(e) => handleTypeChange(index, e)}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
          </select>
        </div>
      ))}
      <button
        type="button"
        onClick={addField}
        className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600 transition"
      >
        Add Field
      </button>
      <button
        type="submit"
        className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
      >
        Publish Form
      </button>
    </form>
  );
};

export default FormBuilder;
