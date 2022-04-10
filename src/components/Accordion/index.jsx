import classnames from 'classnames';
import React from 'react';
import './index.scss';

const Accordion = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((i) => (
        <li>
          <input
            className="accordion-input hidden"
            type="checkbox"
            id={`accordion-${i}`}
          />
          <label
            htmlFor={`accordion-${i}`}
            className={classnames(
              'accordion__label',
              'gap-x-[5px] cursor-pointer gap-y-[5px] py-[24px] items-center bg-white relative',
              'xl:gap-x-[16px] xl:py-[30px]',
            )}
          >
            <div className={classnames('accordion__label-icon')}>
              <div
                className={classnames(
                  'w-[23px] h-[23px] bg-primary rounded-full text-white font-TmoneyRoundWind font-bold items-center justify-center flex text-[12px]',
                  'xl:w-[55px] xl:h-[55px] xl:text-[24px]',
                )}
              >
                <span className="leading-1">Q</span>
              </div>
            </div>
            <div className={classnames('accordion__label-title')}>
              <div className="font-TmoneyRoundWind font-bold text-primary">
                게임플레이
              </div>
            </div>
            <div
              className={classnames(
                'accordion__label-content',
                'text-[14px] font-Pretendard font-bold tracking-[-0.07px]',
                'xl:text-[20px]',
              )}
            >
              서버 목록이 보이지 않거나 방화벽 오류 메시지가 떠요
            </div>
            <div className={classnames('accordion__label-arrow')}>
              <div className={classnames('text-[18px]', 'xl:text-[28px]')}>
                <i className="icon-arrow text-[#CECECE] inline-block"></i>
              </div>
            </div>
            <div className="accordion__label-divider absolute bottom-0 left-0 h-px bg-[#f4f6fa]"></div>
          </label>
          <div className="accordion-content bg-[#f4f6fa]">
            <div className="p-[30px] xl:p-[40px] flex gap-x-[20px] gap-y-[13px] flex-col xl:flex-row">
              <div>
                <div className="w-[23px] h-[23px] xl:w-[55px] xl:h-[55px] bg-black rounded-full text-white font-Pretendard font-bold items-center justify-center flex text-[12px] xl:text-[24px]">
                  <span className="leading-1">A</span>
                </div>
              </div>
              <div className="prose prose-sm xl:prose-base">
                <p>
                  1.0.1 패치가 업데이트 되었어요.
                  <br />
                  1.0.1 버전에서는 칼테일바와 미니게임 3종(슬롯, 룰렛, 주사위)가
                  추가되었어요.
                  <br />
                  미니게임을 하다보면 대박의 찬스가 있을지도?
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
