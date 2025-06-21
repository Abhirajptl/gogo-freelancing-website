// components/ReviewPage.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { KYCRequest}  from './kyc';
import StatusBadge from './StatusBadge';
import DocumentPreview from './DocumentPreview';
import ReviewActions from './ReviewActions';

interface ReviewPageProps {
  request: KYCRequest;
  onBack: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string, reason: string) => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ 
  request, 
  onBack, 
  onApprove, 
  onReject 
}) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const formatDocumentType = (type: string) => {
    return type.replace('_', ' ').toUpperCase();
  };

  const { date, time } = formatDate(request.timestamp);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Request List
        </button>
      </div>

      {/* Request Details Card */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Review KYC Request
          </h2>
          <StatusBadge status={request.status} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Editor Name
              </label>
              <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                {request.editor_name}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Document Type
              </label>
              <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                {formatDocumentType(request.document_type)}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Request ID
              </label>
              <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-md font-mono">
                #{request.id}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Submitted Date & Time
              </label>
              <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                {date} at {time}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {request.rejection_reason && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <h4 className="text-sm font-medium text-red-800 mb-2">
              Previous Rejection Reason:
            </h4>
            <p className="text-sm text-red-700">
              {request.rejection_reason}
            </p>
          </div>
        )}
      </div>

      {/* Document Preview */}
      {request.document_url && (
        <DocumentPreview 
          documentUrl={request.document_url}
          documentType={formatDocumentType(request.document_type)}
        />
      )}
      
      {/* Review Actions */}
      <ReviewActions
        request={request}
        onApprove={onApprove}
        onReject={onReject}
      />

      {/* Additional Notes Section */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-yellow-800 mb-2">
          Review Checklist:
        </h4>
        <ul className="text-xs text-yellow-700 space-y-1">
          <li>• Verify document is clear and legible</li>
          <li>• Check if document type matches the submitted category</li>
          <li>• Ensure all required information is visible</li>
          <li>• Look for signs of tampering or forgery</li>
          <li>• Confirm document appears to be valid and current</li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewPage;