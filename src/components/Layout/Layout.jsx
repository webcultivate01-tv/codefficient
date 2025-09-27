// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import Highlights from '../Navbar/Highlights.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Navbar />
    <Highlights />
    <main className="pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
