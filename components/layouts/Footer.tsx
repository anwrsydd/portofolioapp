import React from 'react';

export default function Footer() {
    return (
            <footer className='text-center p-[1rem] bg-gray-700'>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};
