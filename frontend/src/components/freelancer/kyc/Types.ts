export interface KYCFormData {
  documentType: string;
  documentNumber: string;
  uploadedFile: File | null;
  startDigilocker: boolean;
}

export interface DocumentTypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export interface DocumentNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  documentType: string;
}

export interface FileUploadProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export interface DigilockerOptionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface SubmitButtonProps {
  formData: KYCFormData;
  onSubmit: () => void;
  isLoading?: boolean;
}