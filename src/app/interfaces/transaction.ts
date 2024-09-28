export interface Transaction {
    id: number; 
    amount: number; 
    date: Date; 
    description: string; 
    category: string; 
    type: 'income' | 'expense'; 
    paymentMethod: string;
    account: string; 
    status: 'pending' | 'confirmed' | 'canceled'; 
    tags?: string[]; 
    recurring?: boolean;
}
