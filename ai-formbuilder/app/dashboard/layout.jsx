"use client";

import { SignIn, SignedIn } from '@clerk/nextjs';
import React from 'react';
import SideNav from './_components/SideNav';

function DashboardLayout({ children }) {
  return (
    <SignedIn>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 md:w-72 lg:w-80 h-screen bg-gray-900 text-white fixed">
          <SideNav />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 md:ml-72 lg:ml-80 p-4">
          {children}
        </div>
      </div>
    </SignedIn>
  );
}

export default DashboardLayout;
