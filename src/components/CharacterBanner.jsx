import React from 'react';
import IconInstagram from './icon/instagram';

const CharacterBanner = () => {
  return (
    <div className="rounded-[12px] relative flex items-center justify-between px-[50px] py-[25px] bg-[#f4f6fa]">
      <div className="self-center">
        <div className="flex gap-x-[11px]">
          <span className="text-[42px] font-bold font-TmoneyRoundWind text-black">
            with RM
          </span>
          <span className="w-[39px] relative inline-block top-[6px] mr-[5px]">
            <img
              src="/public/img/new@3x.png"
              srcset="/public/img/new@2x.png 2x,
                  /public/img/new@3x.png 3x"
              alt="new"
            />
          </span>
        </div>
        <div className="text-[#9ba0a8] text-[20px] font-Pretendard mt-[15px]">
          2022년 4월 13일 오후 5시 53분
        </div>
        <div className="flex items-center gap-x-[13px] mt-[19px]">
          <div className="w-[36px]">
            <IconInstagram />
          </div>
          <span className="text-[#9ba0a8]">인스타그램에서도 확인하세요</span>
        </div>
      </div>
      <img
        className="h-[180px] w-auto"
        src="/public/img/rm2.png"
        srcset="/public/img/rm2@2x.png 2x,
                  /public/img/rm2@3x.png 3x"
        alt="RM"
      />
    </div>
  );
};

export default CharacterBanner;
