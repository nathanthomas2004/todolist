import './InputField.css';

export default function InputField({info, setInfo}) {
    const onChange = (event) => {
        setInfo(event.target.value);
    }
    
    return (
        <input value={info} onChange={onChange}></input>
    );
}