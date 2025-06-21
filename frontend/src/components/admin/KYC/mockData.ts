// data/mockData.ts
import  type { KYCRequest } from './kyc';

export const mockKYCRequests: KYCRequest[] = [
  {
    id: '1',
    editor_name: 'John Smith',
    document_type: 'passport',
    status: 'pending',
    timestamp: '2024-06-20T10:30:00Z',
    document_url: 'https://via.placeholder.com/400x300/0066cc/ffffff?text=Passport+Document'
  },
  {
    id: '2',
    editor_name: 'Sarah Johnson',
    document_type: 'driver_license',
    status: 'under_review',
    timestamp: '2024-06-20T09:15:00Z',
    document_url: 'https://via.placeholder.com/400x300/cc6600/ffffff?text=Driver+License'
  },
  {
    id: '3',
    editor_name: 'Mike Davis',
    document_type: 'national_id',
    status: 'approved',
    timestamp: '2024-06-19T14:20:00Z',
    document_url: 'https://via.placeholder.com/400x300/00cc66/ffffff?text=National+ID'
  },
  {
    id: '4',
    editor_name: 'Lisa Wilson',
    document_type: 'passport',
    status: 'rejected',
    timestamp: '2024-06-19T11:45:00Z',
    document_url: 'https://via.placeholder.com/400x300/cc0066/ffffff?text=Rejected+Passport',
    rejection_reason: 'Document is blurry and unreadable'
  }
];