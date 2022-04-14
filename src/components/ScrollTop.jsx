import React from 'react';
import './ScrollTop.scss';

const ScrollTop = ({ link }) => {
  return (
    <a
      href={`#${link ?? ''}`}
      className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] bg-[#000000] flex items-center justify-center rounded-full"
    >
      <div className="fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.205"
          height="12"
          viewBox="0 0 20.205 12"
        >
          <path
            d="M26.437 17.588 18.2 9.442a1.921 1.921 0 0 0-2.728 0l-8.15 8.146a1.922 1.922 0 0 0 2.709 2.728l6.8-6.8 6.8 6.8a1.957 1.957 0 0 0 2.8-2.728z"
            transform="translate(-6.754 -8.874)"
          />
        </svg>
      </div>
    </a>
  );
};

export default ScrollTop;
