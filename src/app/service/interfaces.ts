export interface Transaction {
    timestamp: number;
    type: TransactionType;
    amount?: number;
    issuer: string;
}

export enum TransactionType {
    ADD = 'Add',
    REMOVE = 'Remove',
    RESET = 'Reset'
}