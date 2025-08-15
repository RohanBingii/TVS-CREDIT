export interface Customer {
  customerId: number;
  name: string;
  phone: string;
  language: string;
  region: string;
  consentOptOut: boolean;
  loans: Loan[];
}

export interface Loan {
  loanId: number;
  productType: string;
  emiAmount: number;
  dueDate: string;
  lateFee: number;
  status: 'current' | 'overdue' | 'closed';
}

export interface CallAttempt {
  attemptId: number;
  loanId: number;
  bucket: string;
  scheduledAt: string;
  startedAt?: string;
  outcome: string;
  languageUsed: string;
  sentiment: string;
  transcript: string;
}

export interface Payment {
  paymentId: string;
  loanId: number;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  method: string;
  createdAt: string;
}

export interface PTCommitment {
  ptpId: number;
  loanId: number;
  amount: number;
  promisedDate: string;
  kept: boolean;
  createdAt: string;
}