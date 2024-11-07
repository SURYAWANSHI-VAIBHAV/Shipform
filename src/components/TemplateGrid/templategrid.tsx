import React from 'react';

const templates = [
  {
    id: 1,
    title: 'Blank Form',
    description: 'Start from scratch',
    color: 'bg-blue-200',
    imageUrl: 'https://source.unsplash.com/400x300/?notebook'
  },
  {
    id: 2,
    title: 'Contact Information',
    description: 'Collect contact details',
    color: 'bg-green-200',
    imageUrl: 'https://source.unsplash.com/400x300/?contact'
  },
  {
    id: 3,
    title: 'RSVP Form',
    description: 'Gather responses for events',
    color: 'bg-purple-200',
    imageUrl: 'https://source.unsplash.com/400x300/?event'
  },
  {
    id: 4,
    title: 'Feedback Form',
    description: 'Get feedback on products or services',
    color: 'bg-yellow-200',
    imageUrl: 'https://source.unsplash.com/400x300/?feedback'
  },
  // Add more templates as needed
];

const TemplateGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {templates.map(template => (
      <div
        key={template.id}
        className={`p-4 rounded-lg shadow-lg cursor-pointer ${template.color} relative overflow-hidden`}>
        
        {/* Background Image */}
        <img 
          src={template.imageUrl} 
          alt={`${template.title} background`} 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        
        {/* Template Content */}
        <div className="p-4 bg-white rounded-lg shadow-md mt-[-4rem] relative z-10">
          <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
          <p className="text-gray-700">{template.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TemplateGrid;
