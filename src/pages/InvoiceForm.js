import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import LineItem from "../components/LineItem";

const InvoiceForm = ({ onSave }) => {
    const [invoice, setInvoice] = useState({
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

    const handleLineItemChange = (index, field, value) => {
        const newLineItems = [...invoice.lineItems];
        newLineItems[index][field] = value;
        setInvoice({ ...invoice, lineItems: newLineItems });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(invoice);
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
                    <FormTextArea
                        label="Bill From"
                        value={invoice.billFrom}
                        onChange={(e) => setInvoice({ ...invoice, billFrom: e.target.value })}
                    />
                    <FormTextArea
                        label="Bill To"
                        value={invoice.billTo}
                        onChange={(e) => setInvoice({ ...invoice, billTo: e.target.value })}
                    />
                    <FormTextArea
                        label="Ship To"
                        value={invoice.shipTo}
                        onChange={(e) => setInvoice({ ...invoice, shipTo: e.target.value })}
                    />
                    <FormInput
                        label="Date"
                        type="date"
                        value={invoice.date}
                        onChange={(e) => setInvoice({ ...invoice, date: e.target.value })}
                    />
                    <FormInput
                        label="Payment Terms"
                        value={invoice.paymentTerms}
                        onChange={(e) => setInvoice({ ...invoice, paymentTerms: e.target.value })}
                    />
                    <FormInput
                        label="Due Date"
                        type="date"
                        value={invoice.dueDate}
                        onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
                    />
                    <FormInput
                        label="PO Number"
                        value={invoice.poNumber}
                        onChange={(e) => setInvoice({ ...invoice, poNumber: e.target.value })}
                    />
                    {invoice.lineItems.map((item, index) => (
                        <LineItem
                            key={index}
                            item={item}
                            index={index}
                            handleLineItemChange={handleLineItemChange}
                        />
                    ))}
                    <FormInput
                        label="Tax"
                        type="number"
                        value={invoice.tax}
                        onChange={(e) => setInvoice({ ...invoice, tax: parseFloat(e.target.value) })}
                    />
                    <FormInput
                        label="Shipping"
                        type="number"
                        value={invoice.shipping}
                        onChange={(e) => setInvoice({ ...invoice, shipping: parseFloat(e.target.value) })}
                    />
                    <FormInput
                        label="Discount"
                        type="number"
                        value={invoice.discount}
                        onChange={(e) => setInvoice({ ...invoice, discount: parseFloat(e.target.value) })}
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
