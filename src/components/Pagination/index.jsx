import React from 'react';

const Pagination = () => {
  return (
    <div className="text-[#c3cad5] flex gap-x-[20px] items-center justify-center">
      <a href="#">
        <i className="icon-paging-first text-[12px]" />
      </a>
      <a href="#">
        <i className="icon-paging-prev text-[12px]" />
      </a>
      <a
        href="#"
        className="font-Pretendard font-bold inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#822ce5] text-white"
      >
        1
      </a>
      {[2, 3, 4, 6].map((i) => (
        <a
          href="#"
          className="font-Pretendard font-bold inline-flex items-center justify-center w-[36px] h-[36px] rounded-full"
        >
          {i}
        </a>
      ))}
      <a href="#">
        <i className="icon-paging-next text-[12px]" />
      </a>
      <a href="#">
        <i className="icon-paging-last text-[12px]" />
      </a>
    </div>
  );
};

export default Pagination;
