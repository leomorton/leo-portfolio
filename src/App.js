import './App.css';
import PageLayout from './components/PageLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<PageLayout />} />;
            </Routes>
        </div>
    );
}

export default App;
