// import React from 'react';
// // import   KYCForm  from './components/freelancer/kyc/KYCForm';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         {/* <KYCForm /> */}
         
//       </div>
//     </div>
//   );
// };

// export default App;


// src/App.tsx
// App.tsx
import React, { useState } from 'react';
import './App.css';

// Import your components
import KYCRequestList from './components/admin/KYC/KYCRequestList';
import ReviewPage from './components/admin/KYC/ReviewPage';

// Import types and mock data
import type { KYCRequest, KYCStatus } from './components/admin/KYC/kyc';
import { mockKYCRequests } from './components/admin/KYC/mockData';

function App() {
  const [currentView, setCurrentView] = useState<'list' | 'review'>('list');
  const [selectedRequest, setSelectedRequest] = useState<KYCRequest | null>(null);
  const [requests, setRequests] = useState<KYCRequest[]>(mockKYCRequests);

  const handleViewRequest = (request: KYCRequest) => {
    setSelectedRequest(request);
    setCurrentView('review');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedRequest(null);
  };

  const handleApprove = (id: string) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id 
          ? { ...request, status: 'approved' as KYCStatus }
          : request
      )
    );
    alert(`Request ${id} has been approved!`);
  };

  const handleReject = (id: string, reason: string) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id 
          ? { 
              ...request, 
              status: 'rejected' as KYCStatus, 
              rejection_reason: reason 
            }
          : request
      )
    );
    alert(`Request ${id} has been rejected!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                KYC Management System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Total Requests: {requests.length}
              </span>
              <span className="text-sm text-green-600">
                Approved: {requests.filter(r => r.status === 'approved').length}
              </span>
              <span className="text-sm text-red-600">
                Rejected: {requests.filter(r => r.status === 'rejected').length}
              </span>
              <span className="text-sm text-yellow-600">
                Pending: {requests.filter(r => r.status === 'pending').length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'list' ? (
          <KYCRequestList
            requests={requests}
            onViewRequest={handleViewRequest}
          />
        ) : (
          selectedRequest && (
            <ReviewPage
              request={selectedRequest}
              onBack={handleBackToList}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          )
        )}
      </main>
    </div>
  );
}

export default App;