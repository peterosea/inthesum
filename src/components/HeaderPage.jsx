import React from 'react';

const BgImg = () => (
  <img
    src="/public/img/header-community.webp"
    srcSet="/public/img/header-community@2x.webp 2x,
        /public/img/header-community@3x.webp 3x"
  />
);
/**
 *
 * @param {JSX.Element} bgImg
 * @param {string} title
 * @param {JSX.Element} content
 * @returns
 */
const HeaderPage = ({ bgImg = BgImg, title, content }) => {
  const ModifyBgImg = () =>
    React.cloneElement(bgImg(), {
      className: 'object-cover w-full h-full absolute object-center',
    });
  return (
    <div className="h-[720px] relative">
      <ModifyBgImg />
      <div
        style={{
          backgroundImage: 'linear-gradient(to bottom, #000, #363636 35%)',
        }}
        className="object-cover absolute w-full h-full opacity-20"
      />
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="font-TmoneyRoundWind text-[62px] text-white font-extrabold">
              {title}
            </div>
            <div className="font-Pretendard text-[18px] text-white">
              {content()}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-[35px] w-full z-20">
        <div className="max-w-[1920px] px-[50px] mx-auto">
          <div className="flex gap-x-[13px] items-center">
            <div className="text-white">
              <i className="icon-volume-off text-[24px]"></i>
              <i className="icon-volume text-[24px]"></i>
            </div>
            <div className="text-white leading-none pb-[2px]">
              <span className="font-Pretendard">방탄소년단 - DYNAMITE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
