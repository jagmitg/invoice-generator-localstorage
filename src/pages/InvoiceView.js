import React from "react";
import { useParams } from "react-router-dom";

const InvoiceView = ({ invoices }) => {
    const { id } = useParams();
    const invoice = invoices[id];

    if (!invoice) return <p>Invoice not found</p>;

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="invoice-title">
                                    <h4 class="float-end font-size-15">
                                        Invoice #{parseInt(id) + 1}
                                        <span class="badge bg-success font-size-12 ms-2">Paid</span>
                                    </h4>
                                    <div class="mb-4">
                                        <h2 class="mb-1 text-muted">Bootdey.com</h2>
                                    </div>
                                    <div class="text-muted">
                                        <p class="mb-1">{invoice.billFrom}</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="text-muted">
                                            <h5 class="font-size-16 mb-3">Billed To:</h5>
                                            <p class="mb-1">{invoice.billTo}</p>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="text-muted text-sm-end">
                                            <div>
                                                <h5 class="font-size-15 mb-1">Invoice No:</h5>
                                                <p>#{parseInt(id) + 1}</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Invoice Date:</h5>
                                                <p>{invoice.date}</p>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Order No:</h5>
                                                <p>{invoice.poNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-2">
                                    <h5 class="font-size-15">Order Summary</h5>

                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 70 }}>No.</th>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th class="text-end" style={{ width: 120 }}>
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
                                                                <h5 class="text-truncate font-size-14 mb-1">
                                                                    {item.description}
                                                                </h5>
                                                            </div>
                                                        </td>
                                                        <td>{item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td class="text-end">
                                                            £ {item.price * item.quantity}
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <th scope="row" colspan="4" class="text-end">
                                                        Sub Total
                                                    </th>
                                                    <td class="text-end">$732.50</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Discount :
                                                    </th>
                                                    <td class="border-0 text-end">- {invoice.discount}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Shipping Charge :
                                                    </th>
                                                    <td class="border-0 text-end">{invoice.shipping}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Tax
                                                    </th>
                                                    <td class="border-0 text-end">{invoice.tax}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Total
                                                    </th>
                                                    <td class="border-0 text-end">
                                                        <h4 class="m-0 fw-semibold">{invoice.total}</h4>
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
