import React from 'react';
import classnames from 'classnames';
import cardData from './Card.data';

// type props = {
//   isPin: boolean,
//   pin: boolean,
//   data: {
//     title: string,
//     content: JSX.Element,
//     thumbnailUrl: string, // image url
//   },
// };
const Card = ({ isPin = false, pin = false, data = cardData }) => {
  const { title, content, thumbnailUrl } = data;
  return (
    <div className={classnames('relative group', { 'p-[30px]': isPin })}>
      <div className="grid grid-cols-[140px,auto] gap-x-[30px] relative z-10">
        <div className="shadow-[20px_20px_40px_rgba(0,0,0,0.1)]">
          <a href="#" className="block relative w-full h-full">
            <img
              className="absolute object-cover object-center w-full h-full"
              src={thumbnailUrl}
              alt=""
            />
            {isPin && pin && (
              <div className="absolute flex items-center justify-center text-[19.2px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full pin bg-gradient-to-r from-[#7833DC] to-[#CF52E8]">
                <i className="icon-pin text-white"></i>
              </div>
            )}
          </a>
        </div>
        <div className="font-Pretendard flex flex-col">
          <div className="w-full">
            <a href="#" className="text-[24px] tracking-[-0.72px] line-clamp-1">
              {title}
            </a>
            <div className="text-[#54575d] mt-[12px] line-clamp-3">
              {content()}
            </div>
          </div>
          <div className="text-[14px] text-[#9ba0a8] mt-[18px]">
            2022년 4월 12일 오후 6시 53분
          </div>
        </div>
      </div>
      {isPin && (
        <div
          className={classnames(
            'absolute w-full h-full rounded-[10px] bg-[#f4f6fa] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity',
            { hidden: !pin },
          )}
        />
      )}
    </div>
  );
};

export default Card;
