import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Журнал промышленной безопасности</h2>
        <Link to="/add">Зафиксировать новый инцидент</Link>
        <ul>
            <li><Link to="/detail/1">Инцидент №1: Утечка масла</Link></li>
        </ul>
    </div>
);
export default Home;