import { useState } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal/modal'; // Import the Modal component
import { FaPlus, FaTrash } from 'react-icons/fa';

const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [fields, setFields] = useState([{ label: '', type: 'text', isEditingLabel: false }]);
  const [editFormName, setEditFormName] = useState(false);
  const [formName, setFormName] = useState('');
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [shareLink, setShareLink] = useState(''); // To store the generated share link

  const addField = (index: number) => {
    const newField = { label: '', type: 'text', isEditingLabel: false };
    const newFields = [...fields];
    newFields.splice(index +1, 0, newField); 
    setFields(newFields);
  };
  

  const handleFieldChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newFields = [...fields];
    newFields[index].label = event.target.value;
    setFields(newFields);
  };

  const handleFieldTypeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFields = [...fields];
    newFields[index].type = event.target.value;
    setFields(newFields);
  };

  const handleLabelClick = (index: number) => {
    const newFields = [...fields];
    newFields[index].isEditingLabel = true;
    setFields(newFields);
  };

  const handleLabelBlur = (index: number) => {
    const newFields = [...fields];
    newFields[index].isEditingLabel = false;
    setFields(newFields);
  };

  const renderField = (field: { label: string; type: string }, index: number) => {
    const commonProps = {
      value: field.label,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleFieldChange(index, e),
      className: "text-gray-500 border border-gray-300 bg-transparent rounded-md p-2 mb-2 w-full",
      disabled: true, 
      required: true
    };

    switch (field.type) {
      case 'email':
        return <input type="email" {...commonProps} placeholder="Field Label" />;
      case 'textarea':
        return <textarea {...commonProps} placeholder="Field Label" />;
      case 'number':
        return <input type="number" {...commonProps} placeholder="Field Label" />;
      default:
        return <input type="text" {...commonProps} placeholder="Field Label" />;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formTitle = title || formName;

    if (!formTitle) {
      alert("Form title is required!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/forms', { title: formTitle, fields });

      const formId = response.data._id;

      const generatedLink = `http://localhost:3000/view/${formId}`;
      setShareLink(generatedLink);

      setShowModal(true);

      setTitle('');
      setFields([{ label: '', type: 'text', isEditingLabel: false }]);
      setFormName('');
      setEditFormName(false);
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };

  const handleFormNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
  };

  const handleDeleteField = (index: number) => {
    const newFields = fields.filter((_, fieldIndex) => fieldIndex !== index);
    setFields(newFields);
  };

  return (
    <div className="w-full flex h-screen overflow-y-auto bg-[#F0EBF8] text-black">
      <div className="w-full mx-auto">
        <div className='w-1/2 mx-auto '>
          <div className="flex w-full pl-8 items-center bg-white h-28 rounded-xl my-4">
            {editFormName ? (
              <div className="flex  items-center text-3xl text-center  ">
                <input
                  type="text"
                  className=" bg-transparent w-full border-b"
                  placeholder='Untitled Form'
                  value={formName}
                  onChange={handleFormNameChange}
                  onBlur={() => setEditFormName(false)}  // Disable editing onBlur
                  onClick={() => setEditFormName(true)}  // Enable editing onClick
                />
              </div>
            ) : (
              <h1
                className="text-3xl text-start cursor-pointer border-b w-full"
                onClick={() => setEditFormName(true)}  // Enable editing onClick
              >
                {formName || "Untitled Form"}
              </h1>
            )}
          </div>

          <div className="mx-auto flex flex-col">
            {fields.map((field, index) => (
              <div key={index} className="mb-4 bg-white w-full p-4 rounded-xl relative">
                <div>
                  <div className="flex mb-2 justify-between items-center pb-2">
                    <div onClick={() => handleLabelClick(index)} className="flex items-center w-full pr-3 ">
                      {field.isEditingLabel ? (
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) => handleFieldChange(index, e)}
                          onBlur={() => handleLabelBlur(index)}
                          className="w-full bg-transparent border-b pl-2 mb-2"
                        />
                      ) : (
                        <h3 className="cursor-pointer border-b w-full ">{field.label || 'Untitled Field'}</h3>
                      )}
                    </div>

                    <select
                      value={field.type}
                      onChange={(e) => handleFieldTypeChange(index, e)}
                      className="border border-gray-300 p-1 bg-transparent rounded-md"
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="number">Number</option>
                      <option value="textarea">Textarea</option>
                    </select>

                  </div>
                  {renderField(field, index)}
                </div>

                <div className=" bottom-2 right-2 flex space-x-2 justify-end">
                  <button
                    type="button"
                    className=" text-blue-500 p-2 rounded-md"
                    onClick={()=>addField(index)}
                  >
                    <FaPlus size={20}/>
                  </button>
                  <button
                    type="button"
                    className=" text-red-500 p-2 rounded-md"
                    onClick={() => handleDeleteField(index)}
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-success w-1/2 text-xl text-white mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)} shareLink={shareLink} />
      </div>
    </div>
  );
};

export default FormBuilder;
