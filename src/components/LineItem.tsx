import React, { ChangeEvent } from "react";
import { LineItem as LineItemType } from "../Interface"; // adjust the import path as necessary

interface LineItemProps {
    item: LineItemType;
    index: number;
    handleLineItemChange: (index: number, field: keyof LineItemType, value: string | number) => void;
}

const LineItem: React.FC<LineItemProps> = ({ item, index, handleLineItemChange }) => (
    <tr key={index}>
        <td>
            <input
                placeholder="Description"
                value={item.description}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleLineItemChange(index, "description", e.target.value)
                }
            />
        </td>
        <td>
            <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleLineItemChange(index, "quantity", parseFloat(e.target.value))
                }
            />
        </td>
        <td>
            <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleLineItemChange(index, "price", parseFloat(e.target.value))
                }
            />
        </td>
    </tr>
);

export default LineItem;
