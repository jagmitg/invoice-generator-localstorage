import React from "react";

const InvoiceList = ({ invoices = [] }) => (
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
