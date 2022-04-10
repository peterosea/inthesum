import React from 'react';

const PaginationBar = ({ all = 1, current = 1 }) => {
  return (
    <div className="flex gap-x-[18px] items-center">
      <span className="font-bold text-[12px] font-Pretendard text-primary">
        1/9
      </span>
      <div className="h-px bg-[#ddd] w-full">
        <div
          className={`h-full bg-primary transition-all`}
          style={{ width: Math.floor(100 * (current / all)) + '%' }}
        ></div>
      </div>
    </div>
  );
};

export default PaginationBar;
