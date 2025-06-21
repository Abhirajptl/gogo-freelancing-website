import React from 'react';

 interface DocumentTypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}


const DocumentTypeDropdown: React.FC<DocumentTypeDropdownProps> = ({ value, onChange }) => {
  const documentTypes = [
    { value: '', label: 'Select Document Type' },
    { value: 'aadhar', label: 'Aadhar Card' },
    { value: 'pan', label: 'PAN Card' },
    { value: 'passport', label: 'Passport' },
    { value: 'license', label: 'Driving License' },
    { value: 'voter', label: 'Voter ID' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Document type (dropdown)
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {documentTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DocumentTypeDropdown;