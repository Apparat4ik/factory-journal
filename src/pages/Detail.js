import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Детализация происшествия №{id}</h2>
            <p>Потом здесь будут данные с БД</p>
            <Link to="/">Вернуться к списку</Link>
        </div>
    );
};
export default Detail;