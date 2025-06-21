import React from 'react';

interface DocumentNumberInputProps {
  value: string;
  onChange: (value: string) => void; // changed this line
  documentType: 'aadhar' | 'pan' | 'passport' | 'license' | 'voter' | string;
}

const DocumentNumberInput: React.FC<DocumentNumberInputProps> = ({ value, onChange, documentType }) => {
  const getPlaceholder = () => {
    switch (documentType) {
      case 'aadhar': return 'Enter 12-digit Aadhar number';
      case 'pan': return 'Enter 10-character PAN number';
      case 'passport': return 'Enter passport number';
      case 'license': return 'Enter license number';
      case 'voter': return 'Enter voter ID number';
      default: return 'Enter document number';
    }
  };

  const handleInputChange = (inputValue: string) => {
    let formattedValue = inputValue;
    switch (documentType) {
      case 'aadhar':
        formattedValue = inputValue.replace(/\D/g, '').slice(0, 12);
        break;
      case 'pan':
        formattedValue = inputValue.toUpperCase().slice(0, 10);
        break;
      default:
        formattedValue = inputValue;
    }
    onChange(formattedValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Document number
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={getPlaceholder()}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DocumentNumberInput;
