import React from 'react';

interface DigilockerOptionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const DigilockerOption: React.FC<DigilockerOptionProps> = ({ checked, onChange }) => {
  return (
    <div className="mb-6">
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <span className="text-sm font-medium text-gray-700">
          Optional: Start Digilocker Flow
        </span>
      </label>
      <p className="ml-7 text-xs text-gray-500 mt-1">
        Enable this to fetch documents directly from Digilocker
      </p>
    </div>
  );
};

export default DigilockerOption;