import React from 'react';

export default function Footer() {
    return (
            <footer className='text-center p-[1rem] bg-gray-700'>
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Created by <a href='https://github.com/anwrsydd' className="text-blue-600">AnwrSyd</a></p>
        </footer>
    );
};
