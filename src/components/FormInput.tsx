import React, { ChangeEvent, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string; // Ensure this is always a string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string; // Optional with default "text"
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, type = "text", ...rest }) => (
    <tr>
        <td>{label}:</td>
        <td>
            <input type={type} value={value} onChange={onChange} {...rest} />
        </td>
    </tr>
);

export default FormInput;
