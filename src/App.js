import logo from './logo.svg';

import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
