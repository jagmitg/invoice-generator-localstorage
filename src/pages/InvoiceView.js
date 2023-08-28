import React from "react";
import { useParams } from "react-router-dom";

const InvoiceView = ({ invoices }) => {
    const { id } = useParams();
    const invoice = invoices[id];

    if (!invoice) return <p>Invoice not found</p>;

    return (
        <div>
            <h2>Invoice {parseInt(id) + 1}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Bill From:</td>
                        <td>{invoice.billFrom}</td>
                    </tr>
                    <tr>
                        <td>Bill To:</td>
                        <td>{invoice.billTo}</td>
                    </tr>
                    {/* ... other fields ... */}
                    {invoice.lineItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    {/* ... other fields like tax, shipping, etc ... */}
                    <tr>
                        <td>Total:</td>
                        <td>${invoice.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceView;
