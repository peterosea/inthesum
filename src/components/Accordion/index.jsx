import React from 'react';
import './index.scss';

const Accordion = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((i) => (
        <li className="border-b border-[#e6eaf2] overflow-hidden">
          <input
            className="accordion-input hidden"
            type="checkbox"
            id={`accordion-${i}`}
          />
          <label
            htmlFor{`accordion-${i}`}
            className="tab-label cursor-pointer flex justify-between gap-x-4 py-[30px] items-center bg-white hover:bg-gray-50"
          >
            <div className="flex gap-x-[16px]">
              <div className="w-[55px] h-[55px] bg-primary rounded-full text-white font-TmoneyRoundWind font-bold items-center justify-center flex text-[24px]">
                <span className="leading-1">Q</span>
              </div>
              <div>
                <div className="font-TmoneyRoundWind font-bold text-primary">
                  게임플레이
                </div>
                <div className="text-[20px] font-Pretendard font-bold tracking-[-0.07px]">
                  서버 목록이 보이지 않거나 방화벽 오류 메시지가 떠요
                </div>
              </div>
            </div>
            <div>
              <div className="text-[28px]">
                <i className="icon-arrow text-[#CECECE] inline-block"></i>
              </div>
            </div>
          </label>
          <div className="accordion-content">
            <div className="bg-[#f4f6fa] p-[40px] flex gap-x-[20px]">
              <div>
                <div className="w-[55px] h-[55px] bg-black rounded-full text-white font-Pretendard font-bold items-center justify-center flex text-[24px]">
                  <span className="leading-1">A</span>
                </div>
              </div>
              <div className="prose">
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
