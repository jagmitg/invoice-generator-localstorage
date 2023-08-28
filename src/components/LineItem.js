const LineItem = ({ item, index, handleLineItemChange }) => (
    <tr key={index}>
        <td>
            <input
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleLineItemChange(index, "description", e.target.value)}
            />
        </td>
        <td>
            <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleLineItemChange(index, "quantity", parseFloat(e.target.value))}
            />
        </td>
        <td>
            <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleLineItemChange(index, "price", parseFloat(e.target.value))}
            />
        </td>
    </tr>
);
export default LineItem;
