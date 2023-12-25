// InvoiceList.tsx
import React from "react";
import { Invoice } from "../Interface"; // adjust the import path as necessary

interface InvoiceListProps {
    invoices?: Invoice[]; // invoices is an optional prop of an array of Invoice objects
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices = [] }) => (
    <div>
        <h2>Saved Invoices</h2>
        {invoices.map((invoice, index) => (
            <div key={index}>
                <strong>Bill From: {invoice.billFrom}</strong>
                <table>
                    <tbody>
                        {invoice.lineItems &&
                            invoice.lineItems.map((item, itemIndex) => (
                                <tr key={itemIndex}>
                                    <td>{item.description}</td>
                                    <td>x{item.quantity}</td>
                                    <td>${item.price} each</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        ))}
    </div>
);

export default InvoiceList;
