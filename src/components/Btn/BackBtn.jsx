import React from 'react';
import cx from 'classnames';

const BackBtn = () => {
  return (
    <div className="scrolltop relative h-px">
      <a
        href="#"
        className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] bg-[#f4f6fa] flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 rounded-full pt-[2px]"
      >
        <i
          className={cx(
            'text-[12px] xl:text-[16px] text-[#2c333e]',
            'icon-top-arrow -rotate-90',
          )}
        ></i>
      </a>
    </div>
  );
};

export default BackBtn;
