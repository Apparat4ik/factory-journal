import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    const navigate = useNavigate();
    
    // Локальные состояния для полей формы
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState('Средний');

    // метод POST
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newIncident = { 
            title, 
            severity, 
            status: 'Открыт' 
        };

        try {
            await axios.post("http://localhost:5001/incidents", newIncident);
            navigate('/');
        } catch (error) {
            console.error("Ошибка сохранения:", error);
        }
    };

    return (
        <div>
            <h2>Добавить новый инцидент</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Описание нарушения: </label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Уровень угрозы: </label>
                    <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                        <option value="Низкий">Низкий</option>
                        <option value="Средний">Средний</option>
                        <option value="Высокий">Высокий</option>
                        <option value="Критический">Критический</option>
                    </select>
                </div>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default Form;