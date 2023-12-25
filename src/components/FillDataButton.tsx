import React from "react";

const getRandomNumber = (min: number = 0, max: number = 100): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomDate = (): string => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + getRandomNumber(1, 30));
    return futureDate.toISOString().slice(0, 10);
};

const FillDataButton: React.FC = () => {
    const fetchDataAndSaveToLocalStorage = async () => {
        try {
            const response = await fetch("https://random-data-api.com/api/v2/users?size=10&is_xml=true");
            const data = await response.json();

            const enrichedData = data.map((user: any) => ({
                billFrom: `${user.first_name} ${user.last_name}, ${user.address.street_address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`,
                billTo: `Random Co., Street ${getRandomNumber(1, 100)}, City ${getRandomNumber(1, 100)}`,
                shipTo: `Ship Co., Avenue ${getRandomNumber(1, 100)}, City ${getRandomNumber(1, 100)}`,
                date: new Date().toISOString().slice(0, 10),
                paymentTerms: `Net ${getRandomNumber(15, 30)}`,
                dueDate: getRandomDate(),
                poNumber: `${getRandomNumber(1000, 9999)}-${getRandomNumber(1000, 9999)}`,
                lineItems: [
                    {
                        description: `Item ${getRandomNumber(1, 100)}`,
                        quantity: getRandomNumber(1, 10),
                        price: getRandomNumber(10, 200)
                    },
                    {
                        description: `Item ${getRandomNumber(1, 100)}`,
                        quantity: getRandomNumber(1, 10),
                        price: getRandomNumber(10, 200)
                    }
                ],
                tax: getRandomNumber(5, 15),
                shipping: getRandomNumber(5, 20),
                discount: getRandomNumber(1, 10),
                total: 0 // Placeholder, this can be calculated based on the above
            }));

            const existingInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");
            localStorage.setItem("invoices", JSON.stringify([...existingInvoices, ...enrichedData]));

            alert('Data saved to localStorage under key "invoices"');
        } catch (error) {
            console.error("Error fetching the data:", error);
            alert("Failed to fetch and save data.");
        }
    };

    return <button onClick={fetchDataAndSaveToLocalStorage}>Insert Test Data to LocalStorage</button>;
};

export default FillDataButton;
