import Navbar from './Components/Navbar/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Hamburger from './Components/hamburger/hamburger';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';

function App() {
  const location = useLocation();
  const currentPage = location.pathname.slice(1)
  const [selectedPage, setSelectedPage] = useState(
    currentPage
  );
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    const newPage = location.pathname.slice(1)
    setSelectedPage(
      newPage
    )
  }, [location.pathname])


  return (
    <div className="App">
    
      <div className='top-nav'>
        <span className='header1'>
        <Header />
        <Navbar selectedPage={selectedPage} onPageChange={handlePageChange} />
        <Hamburger selectedPage={selectedPage} onPageChange={handlePageChange} />
        </span>
      </div>
      <main>
        <Main />
      </main>

      <footer>
        <Footer />

      </footer>

    </div>
  );
}

export default App;
