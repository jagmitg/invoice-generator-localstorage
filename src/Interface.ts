export interface LineItem {
    description: string;
    quantity: number;
    price: number;
}

export interface Invoice {
    billFrom: string;
    billTo: string;
    shipTo: string;
    date: string;
    paymentTerms: string;
    dueDate: string;
    poNumber: string;
    lineItems: LineItem[];
    tax: number;
    shipping: number;
    discount: number;
    total: number;
}
