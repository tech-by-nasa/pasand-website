import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleCanvas from './ParticleCanvas';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleCanvas />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
