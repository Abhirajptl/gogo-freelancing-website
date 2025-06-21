// components/KYCRequestRow.tsx
import React from 'react';
import { Eye } from 'lucide-react';
import type { KYCRequest } from './kyc';
import StatusBadge from  './StatusBadge';

interface KYCRequestRowProps {
  request: KYCRequest;
  onView: (request: KYCRequest) => void;
}

const KYCRequestRow: React.FC<KYCRequestRowProps> = ({ request, onView }) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + 
           date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDocumentType = (type: string) => {
    return type.replace('_', ' ').toUpperCase();
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {request.editor_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDocumentType(request.document_type)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={request.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(request.timestamp)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onView(request)}
          className="text-blue-600 hover:text-blue-900 flex items-center gap-1 transition-colors"
        >
          <Eye className="w-4 h-4" />
          View
        </button>
      </td>
    </tr>
  );
};

export default KYCRequestRow;
//npm install lucide-react
