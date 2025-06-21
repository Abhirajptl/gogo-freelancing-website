// types/kyc.ts
export interface KYCRequest {
  id: string;
  editor_name: string;
  document_type: 'passport' | 'driver_license' | 'national_id';
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  timestamp: string;
  document_url?: string;
  rejection_reason?: string;
}

export type KYCStatus = KYCRequest['status'];
export type DocumentType = KYCRequest['document_type'];