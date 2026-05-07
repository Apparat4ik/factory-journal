import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Form from './pages/Form';

const App = () => {
    return (
        <Router>
            <div className="container">
                <nav>
                    <h1>Система промышленной безопасности</h1>
                </nav>
                <Routes>
                    {/* Главная: список инцидентов */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Детализация конкретного случая */}
                    <Route path="/detail/:id" element={<Detail />} />
                    
                    {/* Добавление новой записи */}
                    <Route path="/add" element={<Form />} />
                    
                    {/* Редактирование существующей записи */}
                    <Route path="/edit/:id" element={<Form />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;