// components/DocumentPreview.tsx
import React from 'react';

interface DocumentPreviewProps {
  documentUrl: string;
  documentType?: string;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ 
  documentUrl, 
  documentType = 'Document' 
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Document Preview
      </h3>
      
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={documentUrl}
            alt={`KYC ${documentType}`}
            className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
            onError={(e) => {
              // Handle image load error
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300/cccccc/666666?text=Image+Not+Available';
            }}
          />
          
          {/* Optional: Add zoom functionality or download button */}
          <div className="absolute top-2 right-2">
            <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 text-center mt-2">
        Click to view full size
      </p>
    </div>
  );
};

export default DocumentPreview;