import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image
            alt="logo"
            src='/logo.svg'
            height={50}
            width={40}
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ml-3">
            Audio Trimmer
          </span>
        </div>
        <div className="flex space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Chek It now!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
