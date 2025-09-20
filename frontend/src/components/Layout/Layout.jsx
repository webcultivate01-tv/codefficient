// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import Highlights from '../Navbar/Highlights.jsx'
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Navbar />
    <br />
     <Highlights />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
export default Layout;
