import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Customer, CallAttempt, Payment, PTCommitment } from '../types';

interface VoiceBotState {
  customers: Customer[];
  callAttempts: CallAttempt[];
  payments: Payment[];
  ptpCommitments: PTCommitment[];
  activeCalls: number;
  totalCustomers: number;
  successfulPayments: number;
  collectionRate: number;
}

type Action = 
  | { type: 'ADD_CUSTOMER'; payload: Customer }
  | { type: 'ADD_CALL_ATTEMPT'; payload: CallAttempt }
  | { type: 'ADD_PAYMENT'; payload: Payment }
  | { type: 'ADD_PTP'; payload: PTCommitment }
  | { type: 'UPDATE_METRICS' };

const initialState: VoiceBotState = {
  customers: [
    {
      customerId: 1,
      name: 'Raj Sharma',
      phone: '+919876543210',
      language: 'hi',
      region: 'North',
      consentOptOut: false,
      loans: [{
        loanId: 101,
        productType: 'bike',
        emiAmount: 7500,
        dueDate: '2025-01-25',
        lateFee: 200,
        status: 'current'
      }]
    },
    {
      customerId: 2,
      name: 'Priya Reddy',
      phone: '+919876543211',
      language: 'te',
      region: 'South',
      consentOptOut: false,
      loans: [{
        loanId: 102,
        productType: 'consumer_durable',
        emiAmount: 5200,
        dueDate: '2025-01-23',
        lateFee: 150,
        status: 'overdue'
      }]
    },
    {
      customerId: 3,
      name: 'Amit Patel',
      phone: '+919876543212',
      language: 'hi',
      region: 'West',
      consentOptOut: false,
      loans: [{
        loanId: 103,
        productType: 'bike',
        emiAmount: 8900,
        dueDate: '2025-01-26',
        lateFee: 250,
        status: 'current'
      }]
    }
  ],
  callAttempts: [
    {
      attemptId: 1,
      loanId: 101,
      bucket: 'pre_due',
      scheduledAt: '2025-01-22T10:00:00Z',
      startedAt: '2025-01-22T10:02:00Z',
      outcome: 'rpc',
      languageUsed: 'hi',
      sentiment: 'positive',
      transcript: 'Customer agreed to pay on time'
    },
    {
      attemptId: 2,
      loanId: 102,
      bucket: 'd+1_7',
      scheduledAt: '2025-01-22T14:00:00Z',
      startedAt: '2025-01-22T14:01:00Z',
      outcome: 'ptp',
      languageUsed: 'te',
      sentiment: 'neutral',
      transcript: 'Customer committed to pay by tomorrow'
    }
  ],
  payments: [
    {
      paymentId: 'PAY001',
      loanId: 101,
      amount: 7500,
      status: 'success',
      method: 'UPI',
      createdAt: '2025-01-22T10:05:00Z'
    }
  ],
  ptpCommitments: [
    {
      ptpId: 1,
      loanId: 102,
      amount: 5200,
      promisedDate: '2025-01-24',
      kept: false,
      createdAt: '2025-01-22T14:05:00Z'
    }
  ],
  activeCalls: 24,
  totalCustomers: 125842,
  successfulPayments: 8932,
  collectionRate: 68.4
};

const voiceBotReducer = (state: VoiceBotState, action: Action): VoiceBotState => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        customers: [...state.customers, action.payload]
      };
    case 'ADD_CALL_ATTEMPT':
      return {
        ...state,
        callAttempts: [...state.callAttempts, action.payload]
      };
    case 'ADD_PAYMENT':
      return {
        ...state,
        payments: [...state.payments, action.payload]
      };
    case 'ADD_PTP':
      return {
        ...state,
        ptpCommitments: [...state.ptpCommitments, action.payload]
      };
    default:
      return state;
  }
};

const VoiceBotContext = createContext<{
  state: VoiceBotState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const VoiceBotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(voiceBotReducer, initialState);

  return (
    <VoiceBotContext.Provider value={{ state, dispatch }}>
      {children}
    </VoiceBotContext.Provider>
  );
};

export const useVoiceBot = () => {
  const context = useContext(VoiceBotContext);
  if (context === undefined) {
    throw new Error('useVoiceBot must be used within a VoiceBotProvider');
  }
  return context;
};