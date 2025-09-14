// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
export default Layout;
