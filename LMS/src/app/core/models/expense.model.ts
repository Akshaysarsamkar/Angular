export interface expence {
    id: string;
    amount: number;
    category: string;
    note: string;
    date: string;
}

export type CategoryData = Record<string, { amount: number }>;
