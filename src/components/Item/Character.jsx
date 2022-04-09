import React from 'react';

/**
 *
 * @param {string} name
 * @param {string} time
 * @param {string} content
 * @param {[{img, link}]} thumbnail
 * @param {JSX.Element} characterImg
 * @returns
 */
const Character = ({ name, time, content, thumbnail, characterImg }) => {
  return (
    <div className="relative min-w-[270px] h-full min-h-[380px]">
      <div className="relative z-10">
        <div className="text-[30px] font-extrabold text-left">
          {name}
          <span className="w-[39px] relative inline-block top-[6px] mr-[5px]">
            <img src="./public/img/new@3x.png" alt="new" />
          </span>
          <span className="text-[14px] font-normal text-[#999]">{time}</span>
        </div>
        <div className="px-[20px] mt-[21px] line-clamp-2">{content()}</div>
        <div className="flex gap-x-[10px] mt-[27px] ml-[20px] items-center">
          <div className="w-[50px] h-[50px] rounded-[20px] overflow-hidden relative">
            <img
              src="https://via.placeholder.com/300"
              className="absolute object-cover"
            />
            {/* <!--가로 세로 동일 정사각형 이미지 50px 등록 무관 -- /> */}
          </div>
          <div className="w-[50px] h-[50px] rounded-[20px] overflow-hidden relative">
            <img
              src="https://via.placeholder.com/300"
              className="absolute object-cover"
            />
            {/* <!--가로 세로 동일 정사각형 이미지 50px 등록 무관 -- /> */}
          </div>
          <span className="opacity-20 font-black text-[32px] top-[5px] font-Pretendard">
            ...
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10">{characterImg()}</div>
      <div className="absolute left-1/2 -translate-x-1/2 w-[calc(100%-40px)] top-0">
        <img
          src="/public/img/img-baloon-full@3x.png"
          alt="ballon"
          className="absolute top-0 !w-auto !h-auto left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Character;
