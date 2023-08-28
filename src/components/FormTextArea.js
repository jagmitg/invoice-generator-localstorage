// Reusable TextArea Component
const FormTextArea = ({ label, value, onChange, ...rest }) => (
    <tr>
        <td>{label}:</td>
        <td>
            <textarea value={value} onChange={onChange} {...rest}></textarea>
        </td>
    </tr>
);
export default FormTextArea;
