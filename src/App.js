import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Books from './components/Books/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
