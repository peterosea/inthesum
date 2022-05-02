import React from 'react';
import cx from 'classnames';

const GooglePlayBtn = () => {
  return (
    <a
      href=""
      className="w-[50px] h-[50px] hug:w-[80px] hug:h-[80px] bg-[#f4f6fa] flex items-center justify-center rounded-full"
    >
      <div className={cx('w-[20px] h-[21px]', 'hug:w-[29px] hug:h-[39px] flex')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.715 34"
          className="pl-[3px] hug:pl-[5px]"
        >
          <defs>
            <linearGradient
              id="s9n8k5iyba"
              y1=".5"
              x2="1"
              y2=".5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#63be6b" />
              <stop offset=".506" stopColor="#5bbc6a" />
              <stop offset="1" stopColor="#4ab96a" />
            </linearGradient>
            <linearGradient
              id="iohiiwte0b"
              y1=".5"
              x2=".999"
              y2=".5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#3ec6f2" />
              <stop offset="1" stopColor="#45afe3" />
            </linearGradient>
            <linearGradient
              id="phvh2ryyuc"
              y1=".5"
              x2="1"
              y2=".5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#faa51a" />
              <stop offset=".387" stopColor="#fab716" />
              <stop offset=".741" stopColor="#fac412" />
              <stop offset="1" stopColor="#fac80f" />
            </linearGradient>
            <linearGradient
              id="2obv18v6od"
              y1=".5"
              x2="1"
              y2=".5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#ec3b50" />
              <stop offset="1" stopColor="#e7515b" />
            </linearGradient>
          </defs>
          <g data-name="google play store">
            <path
              data-name="Path 138"
              d="M19.059 10.363 1.093.094A.724.724 0 0 0 .364.1.72.72 0 0 0 0 .727s.007.947.014 2.505L13.1 16.32z"
              style={{ fill: 'url(#s9n8k5iyba)' }}
              transform="translate(0 .001)"
            />
            <path
              data-name="Path 139"
              d="M.2 44.4c.022 5.622.087 19.27.117 26.066L13.3 57.487z"
              transform="translate(-.186 -41.166)"
              style={{ fill: 'url(#iohiiwte0b)' }}
            />
            <path
              data-name="Path 140"
              d="m196.048 148.177-10.283-5.877-5.965 5.959 6.729 6.729 9.527-5.55a.728.728 0 0 0 .364-.626.738.738 0 0 0-.372-.635z"
              transform="translate(-166.706 -131.936)"
              style={{ fill: 'url(#phvh2ryyuc)' }}
            />
            <path
              data-name="Path 141"
              d="m1.7 237.171.022 3.977a.71.71 0 0 0 .364.626.724.724 0 0 0 .728 0l18.593-10.844-6.729-6.73z"
              transform="translate(-1.576 -207.872)"
              style={{ fill: 'url(#2obv18v6od)' }}
            />
          </g>
        </svg>
      </div>
    </a>
  );
};

export default GooglePlayBtn;
