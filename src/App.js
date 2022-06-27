import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BooksPage from './components/BooksPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
