// components/KYCRequestList.tsx
import React from 'react';
import  type { KYCRequest } from './kyc';
import KYCRequestRow from './KYCRequestRow';

interface KYCRequestListProps {
  requests: KYCRequest[];
  onViewRequest: (request: KYCRequest) => void;
}

const KYCRequestList: React.FC<KYCRequestListProps> = ({ 
  requests, 
  onViewRequest 
}) => {
  return (
    <div className="bg-white shadow rounded-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">KYC Request List</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage and review KYC document submissions
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Editor Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No KYC requests found
                </td>
              </tr>
            ) : (
              requests.map((request) => (
                <KYCRequestRow
                  key={request.id}
                  request={request}
                  onView={onViewRequest}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KYCRequestList;