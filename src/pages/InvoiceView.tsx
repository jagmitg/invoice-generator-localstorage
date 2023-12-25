import React from "react";
import { useParams } from "react-router-dom";
import { Invoice } from "../Interface";

interface InvoiceViewProps {
    invoices: Invoice[];
}

const InvoiceView: React.FC<InvoiceViewProps> = ({ invoices }) => {
    const { id } = useParams<{ id: string }>();
    const invoiceId = parseInt(id || "0");
    const invoice = invoices[invoiceId];

    if (!invoice) return <p>Invoice not found</p>;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="invoice-title">
                                    <h4 className="float-end font-size-15">
                                        Invoice #{invoiceId + 1}
                                        <span className="badge bg-success font-size-12 ms-2">Paid</span>
                                    </h4>
                                    <div className="mb-4">
                                        <h2 className="mb-1 text-muted">Bootdey.com</h2>
                                    </div>
                                    <div className="text-muted">
                                        <p className="mb-1">{invoice.billFrom}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="text-muted">
                                            <h5 className="font-size-16 mb-3">Billed To:</h5>
                                            <p className="mb-1">{invoice.billTo}</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="text-muted text-sm-end">
                                            <div>
                                                <h5 className="font-size-15 mb-1">Invoice No:</h5>
                                                <p>#{invoiceId + 1}</p>
                                            </div>
                                            <div className="mt-4">
                                                <h5 className="font-size-15 mb-1">Invoice Date:</h5>
                                                <p>{invoice.date}</p>
                                            </div>
                                            <div className="mt-4">
                                                <h5 className="font-size-15 mb-1">Order No:</h5>
                                                <p>{invoice.poNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-2">
                                    <h5 className="font-size-15">Order Summary</h5>

                                    <div className="table-responsive">
                                        <table className="table align-middle table-nowrap table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 70 }}>No.</th>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th className="text-end" style={{ width: 120 }}>
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoice.lineItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index}</th>
                                                        <td>
                                                            <div>
                                                                <h5 className="text-truncate font-size-14 mb-1">
                                                                    {item.description}
                                                                </h5>
                                                            </div>
                                                        </td>
                                                        <td>{item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td className="text-end">
                                                            £ {item.price * item.quantity}
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <th scope="row" colSpan={4} className="text-end">
                                                        Sub Total
                                                    </th>
                                                    <td className="text-end">$732.50</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan={4} className="border-0 text-end">
                                                        Discount :
                                                    </th>
                                                    <td className="border-0 text-end">
                                                        - {invoice.discount}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan={4} className="border-0 text-end">
                                                        Shipping Charge :
                                                    </th>
                                                    <td className="border-0 text-end">{invoice.shipping}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan={4} className="border-0 text-end">
                                                        Tax
                                                    </th>
                                                    <td className="border-0 text-end">{invoice.tax}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan={4} className="border-0 text-end">
                                                        Total
                                                    </th>
                                                    <td className="border-0 text-end">
                                                        <h4 className="m-0 fw-semibold">{invoice.total}</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceView;
