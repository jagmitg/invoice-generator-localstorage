const FormInput = ({ label, value, onChange, type = "text", ...rest }) => (
    <tr>
        <td>{label}:</td>
        <td>
            <input type={type} value={value} onChange={onChange} {...rest} />
        </td>
    </tr>
);
export default FormInput;
