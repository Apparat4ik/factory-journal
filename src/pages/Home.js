import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [incidents, setIncidents] = useState([]);

    // 1. Получаем JSON и преобразуем в массив объектов
    useEffect(() => {
        axios.get("http://localhost:5001/incidents")
            .then(response => setIncidents(response.data))
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/incidents/${id}`);
            setIncidents(incidents.filter(item => item.id !== id));
        } catch (error) {
            console.error("Ошибка удаления:", error);
        }
    };

    return (
        <div>
            <h2>Журнал промышленной безопасности</h2>
            <Link to="/add">
                <button style={{ marginBottom: '15px', padding: '5px 10px' }}>
                    + Зафиксировать новый инцидент
                </button>
            </Link>
            
            {/* 3. Отображаем данные в виде таблицы */}
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                    <tr>
                        <th>ID</th>
                        <th>Описание нарушения</th>
                        <th>Уровень угрозы</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>
                                <strong style={{ color: item.severity === 'Критический' ? 'red' : 'inherit' }}>
                                    {item.severity}
                                </strong>
                            </td>
                            <td>{item.status}</td>
                            <td>
                                <Link to={`/detail/${item.id}`} style={{ marginRight: '15px' }}>Изменить</Link>
                                <button onClick={() => handleDelete(item.id)} style={{ color: 'red', cursor: 'pointer' }}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;