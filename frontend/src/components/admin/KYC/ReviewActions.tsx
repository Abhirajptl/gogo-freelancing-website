// components/ReviewActions.tsx
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import type { KYCRequest } from './kyc';

interface ReviewActionsProps {
  request: KYCRequest;
  onApprove: (id: string) => void;
  onReject: (id: string, reason: string) => void;
}

const ReviewActions: React.FC<ReviewActionsProps> = ({ 
  request, 
  onApprove, 
  onReject 
}) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = async () => {
    setIsProcessing(true);
    try {
      onApprove(request.id);
    } catch (error) {
      console.error('Error approving request:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }

    setIsProcessing(true);
    try {
      onReject(request.id, rejectionReason);
      setRejectionReason('');
      setShowRejectForm(false);
    } catch (error) {
      console.error('Error rejecting request:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancelReject = () => {
    setShowRejectForm(false);
    setRejectionReason('');
  };

  // Show status if already processed
  if (request.status === 'approved' || request.status === 'rejected') {
    return (
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Request Status
        </h3>
        <p className="text-sm text-gray-600">
          This request has been <strong>{request.status}</strong>.
        </p>
        {request.rejection_reason && (
          <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">
              <strong>Rejection Reason:</strong> {request.rejection_reason}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Review Actions
      </h3>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleApprove}
          disabled={isProcessing}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <Check className="w-4 h-4" />
          {isProcessing ? 'Processing...' : 'Approve'}
        </button>
        
        <button
          onClick={() => setShowRejectForm(!showRejectForm)}
          disabled={isProcessing}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <X className="w-4 h-4" />
          Reject
        </button>
      </div>

      {/* Rejection Form */}
      {showRejectForm && (
        <div className="border-t pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rejection Reason *
          </label>
          <textarea
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            placeholder="Please provide a clear reason for rejection (e.g., 'Document is blurry', 'Invalid document type', etc.)"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={3}
            maxLength={500}
            disabled={isProcessing}
          />
          <p className="text-xs text-gray-500 mt-1">
            {rejectionReason.length}/500 characters
          </p>
          
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleReject}
              disabled={!rejectionReason.trim() || isProcessing}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Confirm Rejection'}
            </button>
            <button
              onClick={handleCancelReject}
              disabled={isProcessing}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 disabled:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Helper Text */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-xs text-blue-800">
          <strong>Review Guidelines:</strong> Check document clarity, validity, and ensure all required information is visible and legible.
        </p>
      </div>
    </div>
  );
};

export default ReviewActions;