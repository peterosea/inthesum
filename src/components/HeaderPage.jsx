import React from 'react';
import classnames from 'classnames';

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
    <div className="h-[380px] xl:h-[720px] relative">
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
            <div
              className={classnames(
                'font-TmoneyRoundWind text-[30px] text-white font-extrabold',
                'xl:text-[62px]',
              )}
            >
              {title}
            </div>
            <div
              className={classnames(
                'font-Pretendard text-[14px] text-white mt-[9px]',
                'xl:text-[18px]',
              )}
            >
              {content()}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 pb-[28px] xl:pb-[35px] w-full z-20">
        <div className="container mx-auto">
          <div className="flex gap-x-[13px] items-center">
            <div className="text-white">
              <i
                className={classnames(
                  'icon-volume-off text-[18px]',
                  'xl:text-[24px]',
                )}
              ></i>
              <i
                className={classnames(
                  'icon-volume text-[18px]',
                  'xl:text-[24px]',
                )}
              ></i>
            </div>
            <div
              className={classnames(
                'text-white leading-none pb-[2px] text-[12px]',
                'xl:text-[16px]',
              )}
            >
              <span className="font-Pretendard">방탄소년단 - DYNAMITE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
