import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { useEffect, useState } from 'react';

export function App() {
  const [titleList, setTitleList] = useState([]);

  const handleAddTitle = title => {
    const localStorageListRaw = localStorage.getItem("titleList") || "[]";
    const localStorageList = JSON.parse(localStorageListRaw);

    if (!localStorageList.map(entry => entry.id).includes(title.id)) {
      localStorageList.push(title);
      setTitleList([...localStorageList]);
      localStorage.setItem("titleList", JSON.stringify(localStorageList));
    } else {
      const filteredList = localStorageList.filter(entry => entry.id !== title.id);
      localStorage.setItem("titleList", JSON.stringify(filteredList));
      setTitleList([...filteredList]);
    }
  }

  useEffect(() => {
    const localStorageListRaw = localStorage.getItem("titleList");
    localStorageListRaw && setTitleList(JSON.parse(localStorageListRaw));
  }, []);

  return (
    <BrowserRouter>
      <Nav titleList={titleList} />
      <Routes>
        <Route path="/" 
        element={<HomePage titleList={titleList} handleAdd={handleAddTitle} />}/>
        <Route path="/search" 
        element={<SearchPage titleList={titleList} handleAdd={handleAddTitle} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
