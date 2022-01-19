import React from 'react';

export const Layout = ({ children }) => (
    <main className="max-w-laptop-xl mx-auto lg:pt-35 pt-10 lg:px-21 md:px-10 px-6 pb-10 w-full">
        {children}
    </main>
);