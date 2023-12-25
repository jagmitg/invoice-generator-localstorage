import React, { useState, useEffect, FC } from "react";
import InvoiceForm from "./pages/InvoiceForm";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import InvoiceView from "./pages/InvoiceView";
import FillDataButton from "./components/FillDataButton";
import { Invoice } from "./Interface";

const App: FC = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        const savedInvoices = localStorage.getItem("invoices");
        if (savedInvoices) {
            setInvoices(JSON.parse(savedInvoices) as Invoice[]);
        }
    }, []);

    const saveInvoice = (invoice: Invoice) => {
        const newInvoices = [...invoices, invoice];
        setInvoices(newInvoices);
        localStorage.setItem("invoices", JSON.stringify(newInvoices));
    };

    return (
        <Router>
            <div>
                <h1>Create Invoice</h1>
                <Routes>
                    <Route path="/invoice/:id" element={<InvoiceView invoices={invoices} />} />
                    <Route
                        path="/"
                        element={
                            <>
                                <InvoiceForm onSave={saveInvoice} />
                                <h2>Saved Invoices</h2>
                                <ul>
                                    {invoices.map((invoice, index) => (
                                        <li key={index}>
                                            <Link to={`/invoice/${index}`}>View Invoice {index + 1}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <FillDataButton />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
