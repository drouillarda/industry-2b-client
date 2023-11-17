import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { SearchPage } from './pages/SearchPage/SearchPage';

export function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" 
        element={<HomePage />}/>
        <Route path="/search" 
        element={<SearchPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
