import React from 'react';
import classnames from 'classnames';
// mockup
import cardData from './Card.data';

/**
 *
 * @property {boolean} pin
 * @property {{
 *  title: string
 *  content: JSX.Element
 *  thumbnailUrl: JSX.Element
 * }} data
 */
const Card = ({ pin = false, data = cardData }) => {
  const { title, content, thumbnailUrl } = data;
  const ModifyThumbnail = () =>
    React.cloneElement(thumbnailUrl(), {
      className: 'absolute object-cover object-center w-full h-full',
    });
  return (
    <div className={classnames('relative group', 'px-[30px]')}>
      <div
        className={classnames(
          'grid grid-cols-[80px,auto] gap-x-[30px] relative z-10 h-full',
          'xl:grid-cols-[140px,auto]',
        )}
      >
        <div>
          <a href="#" className="block relative w-full aspect-1 shadow-[20px_20px_40px_rgba(0,0,0,0.1)]">
            <ModifyThumbnail />
            {pin && (
              <div className="absolute flex items-center justify-center text-[19.2px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full pin bg-gradient-to-r from-[#7833DC] to-[#CF52E8]">
                <i className="icon-pin text-white"></i>
              </div>
            )}
          </a>
        </div>
        <div className="font-Pretendard flex flex-col justify-between">
          <div className="w-full">
            <a
              href="#"
              className={classnames(
                'text-[16px] tracking-[-0.72px]',
                'xl:text-[24px] ',
              )}
            >
              {title}
            </a>
            <div
              className={classnames(
                'text-[12px] text-[#6f737a] mt-[5px] line-clamp-2 font-normal',
                'xl:mt-[12px] xl:text-[16px] xl:line-clamp-3 xl:text-[#54575d] min-h-[3.8em]',
              )}
            >
              {content()}
            </div>
          </div>
          <div
            className={classnames(
              'text-[10px] text-[#9ba0a8] mt-[5px]',
              'xl:text-[14px] xl:mt-[18px]',
            )}
          >
            2022년 4월 12일 오후 6시 53분
          </div>
        </div>
      </div>
      <div
        className={classnames(
          'absolute w-full h-[calc(100%+40px)] bg-[#f4f6fa] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity',
          'xl:rounded-[10px] xl:h-[calc(100%+60px)]',
        )}
      />
    </div>
  );
};

export default Card;
