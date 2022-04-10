import React from 'react';

const ScrollTop = () => {
  return (
    <div className="relative h-px xl:bg-[#e6eaf2]">
      <a
        href="#"
        className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] bg-[#f4f6fa] flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
      >
        <i className="icon-arrow rotate-180 text-[12px] xl:text-[28px] text-[#c3cad5]"></i>
      </a>
    </div>
  );
};

export default ScrollTop;
