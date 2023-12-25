import React, { ChangeEvent, TextareaHTMLAttributes } from "react";

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ label, value, onChange, ...rest }) => (
    <tr>
        <td>{label}:</td>
        <td>
            <textarea value={value} onChange={onChange} {...rest}></textarea>
        </td>
    </tr>
);

export default FormTextArea;
