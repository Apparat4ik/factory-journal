import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Редактирование / Создание записи</h2>
            <form onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
                <input type="text" placeholder="Наименование объекта" required />
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};
export default Form;