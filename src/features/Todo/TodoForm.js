import { useState } from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import './TodoForm.css';

export default function TodoForm({listItem, setListItem}) {
    const [info, setInfo] = useState('');
    
    const handleSubmit = () => {
        console.log(info);
        setListItem([...listItem, info]);
        setInfo('');
    }

    return (
        <div className='form'>
            <InputField info={info} setInfo={setInfo}/>
            <Button handleSubmit={handleSubmit}/>
        </div>
    );
}