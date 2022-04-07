import React from 'react';

const HeaderPage = () => {
  return (
    <div className="h-[720px] relative">
      <img
        src="/public/img/header-community.webp"
        srcSet="/public/img/header-community@2x.webp 2x,
              /public/img/header-community@3x.webp 3x"
        className="object-cover w-full h-full absolute object-center"
      />
      <div className="bg-black bg-opacity-30 object-cover absolute w-full h-full"></div>
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="font-TmoneyRoundWind text-[62px] text-white font-extrabold">
              커뮤니티
            </div>
            <div className="font-Pretendard text-[18px] text-white">
              인더섬의 소식과 궁금한 사항을 전해드려요
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-[35px] w-full z-20">
        <div className="max-w-[1920px] px-[50px] mx-auto">
          <div className="flex gap-x-[13px]">
            <div className="text-white">
              <i className="icon-volume-off text-[24px]"></i>
              <i className="icon-volume text-[24px]"></i>
            </div>
            <div className="text-white">
              <span className="font-Pretendard">방탄소년단 - DYNAMITE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
