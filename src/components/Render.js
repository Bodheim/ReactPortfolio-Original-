import React, { useState } from 'react';
import NavTabs from './Nav';
import Footer from './Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function SelectPage() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <main>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {renderPage()}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default SelectPage;
