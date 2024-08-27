import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import ViewAllProducts from './components/ViewAllProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProducts/>}/>
      <Route path="/search" element={<SearchProducts/>}/>
      <Route path="/viewall" element={<ViewAllProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
