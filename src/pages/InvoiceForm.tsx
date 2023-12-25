import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import LineItemComponent from "../components/LineItem";
import { Invoice, LineItem } from "../Interface";

interface InvoiceFormProps {
    onSave: (invoice: Invoice) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSave }) => {
    const [invoice, setInvoice] = useState<Invoice>({
        billFrom: "",
        billTo: "",
        shipTo: "",
        date: "",
        paymentTerms: "",
        dueDate: "",
        poNumber: "",
        lineItems: [{ description: "", quantity: 0, price: 0 }],
        tax: 0,
        shipping: 0,
        discount: 0,
        total: 0
    });

    useEffect(() => {
        const subtotal = invoice.lineItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
        const total = subtotal + invoice.tax + invoice.shipping - invoice.discount;
        setInvoice((prev) => ({ ...prev, total }));
    }, [invoice.lineItems, invoice.tax, invoice.shipping, invoice.discount]);

    const addLineItem = () => {
        setInvoice({
            ...invoice,
            lineItems: [...invoice.lineItems, { description: "", quantity: 0, price: 0 }]
        });
    };

    const handleLineItemChange = (index: number, field: keyof LineItem, value: string | number) => {
        const newLineItems = [...invoice.lineItems];
        const updatedItem = { ...newLineItems[index], [field]: value }; // Handle value type inside LineItem component
        newLineItems[index] = updatedItem;
        setInvoice({ ...invoice, lineItems: newLineItems });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement; // Correctly typecast the target
        setInvoice((invoice) => ({ ...invoice, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(invoice);
        // Reset invoice after save
        setInvoice({
            billFrom: "",
            billTo: "",
            shipTo: "",
            date: "",
            paymentTerms: "",
            dueDate: "",
            poNumber: "",
            lineItems: [{ description: "", quantity: 0, price: 0 }],
            tax: 0,
            shipping: 0,
            discount: 0,
            total: 0
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <FormTextArea label="Bill From" value={invoice.billFrom} onChange={handleChange} />
                    <FormTextArea label="Bill To" value={invoice.billTo} onChange={handleChange} />
                    <FormTextArea label="Ship To" value={invoice.shipTo} onChange={handleChange} />
                    <FormInput label="Date" type="date" value={invoice.date} onChange={handleChange} />
                    <FormInput label="Payment Terms" value={invoice.paymentTerms} onChange={handleChange} />
                    <FormInput label="Due Date" type="date" value={invoice.dueDate} onChange={handleChange} />
                    <FormInput label="PO Number" value={invoice.poNumber} onChange={handleChange} />
                    {invoice.lineItems.map((item, index) => (
                        <LineItemComponent
                            key={index}
                            item={item}
                            index={index}
                            handleLineItemChange={handleLineItemChange}
                        />
                    ))}
                    <FormInput label="Tax" type="number" value={invoice.tax} onChange={handleChange} />
                    <FormInput
                        label="Shipping"
                        type="number"
                        value={invoice.shipping}
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Discount"
                        type="number"
                        value={invoice.discount}
                        onChange={handleChange}
                    />
                    <tr>
                        <td>Total:</td>
                        <td>${invoice.total}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={addLineItem}>
                Add another item
            </button>
            <button type="submit">Save Invoice</button>
        </form>
    );
};

export default InvoiceForm;
