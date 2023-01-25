import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="items-center hidden px-6 md:flex">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="items-center hidden px-6 md:flex">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">1-888-817-1234</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
