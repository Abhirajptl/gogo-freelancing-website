// components/StatusBadge.tsx
import React from 'react';
import  type { KYCStatus } from './kyc';

interface StatusBadgeProps {
  status: KYCStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': 
        return 'bg-yellow-100 text-yellow-800';
      case 'under_review': 
        return 'bg-blue-100 text-blue-800';
      case 'approved': 
        return 'bg-green-100 text-green-800';
      case 'rejected': 
        return 'bg-red-100 text-red-800';
      default: 
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ');
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {formatStatus(status)}
    </span>
  );
};

export default StatusBadge;