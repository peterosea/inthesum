import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import cx from 'classnames';
import "./ScrollTop.scss";


const ScrollTop = () => {
  const { width } = useWindowSize();

  return (
    <div className="scrolltop relative h-px xl:bg-[#e6eaf2]">
      <a
        href="#list"
        className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] bg-[#f4f6fa] flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
      >
        <i
          className={cx(
            'text-[12px] xl:text-[28px] text-[#c3cad5]',
            {
              'icon-arrow rotate-180': width >= 1280,
              'icon-top-arrow': width < 1280,
            },
          )}
        ></i>
      </a>
    </div>
  );
};

export default ScrollTop;
