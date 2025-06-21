import React, { useState } from 'react';

import DocumentTypeDropdown from './DocumentTypeDropdown';
import DocumentNumberInput from './DocumentNumberInput';
import FileUpload from './FileUpload';
import DigilockerOption from './DigilockerOption';
import SubmitButton from './SubmitButton';

interface KYCFormData {
  documentType: string;
  documentNumber: string;
  uploadedFile: File | null;
  startDigilocker: boolean;
}

const KYCForm: React.FC = () => {
  const [formData, setFormData] = useState<KYCFormData>({
    documentType: '',
    documentNumber: '',
    uploadedFile: null,
    startDigilocker: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (updates: Partial<KYCFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append('documentType', formData.documentType);
      formDataToSend.append('documentNumber', formData.documentNumber);
      formDataToSend.append('startDigilocker', formData.startDigilocker.toString());

      if (formData.uploadedFile) {
        formDataToSend.append('document', formData.uploadedFile);
      }

      const response = await fetch('/kyc/upload', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('KYC document uploaded successfully!');
        setFormData({
          documentType: '',
          documentNumber: '',
          uploadedFile: null,
          startDigilocker: false,
        });
      } else {
        throw new Error('Failed to upload KYC document');
      }
    } catch (error) {
      console.error('Error uploading document:', error); // ✅ fixes unused warning
      alert('Error uploading document. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-yellow-100 px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔒</span>
          <h2 className="text-lg font-semibold text-gray-800">Editor Flow</h2>
        </div>
      </div>

      <div className="px-6 py-6">
        <h3 className="text-md font-medium text-gray-800 mb-4">1. KYC Form</h3>

        <DocumentTypeDropdown
          value={formData.documentType}
          onChange={(value) => updateFormData({ documentType: value })}
        />

        <DocumentNumberInput
          value={formData.documentNumber}
          onChange={(value) => updateFormData({ documentNumber: value })}
          documentType={formData.documentType}
        />

        <FileUpload
          file={formData.uploadedFile}
          onFileSelect={(file) => updateFormData({ uploadedFile: file })}
        />

        <DigilockerOption
          checked={formData.startDigilocker}
          onChange={(checked) => updateFormData({ startDigilocker: checked })}
        />

        <SubmitButton
          formData={formData}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default KYCForm;
