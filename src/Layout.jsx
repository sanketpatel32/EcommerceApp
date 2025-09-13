import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layout = () => {
  const [cartDisplay, setCartDisplay] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setCartOpen={setCartDisplay} cartDisplay={cartDisplay} />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
