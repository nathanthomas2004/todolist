import './Button.css';

export default function Button({handleSubmit}) {
    return (
        <div>
            <button onClick={handleSubmit} type='submit'></button>
        </div>
    );
}