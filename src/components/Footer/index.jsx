import React from 'react';
import classnames from 'classnames';

const Footer = () => {
  return (
    <footer className="bg-[#000000] min-h-[212px] py-[50px] px-cpx xl:px-[50px] text-white text-opacity-50 text-[14px] leading-[1.79]">
      <div className="max-w-[1920px] mx-auto flex relative flex-col justify-center">
        <div className="footer-info">
          <div>
            <a href="#">
              <img
                className="max-w-[96px]"
                src="/img/logo-hybeim.png"
                srcSet="/img/logo-hybeim@2x.png 2x,
                        /img/logo-hybeim@3x.png 3x"
              />
            </a>
          </div>
          <ul
            className={classnames(
              'mt-[13px] mb-[20px] text-white flex items-center',
              'xl:divide-x xl:divide-gray-400 xl:mt-[20px] xl:mb-[15px]',
            )}
          >
            {['이용약관', '개인정보취급방침', '고객센터'].map((e, index) => (
              <li
                key={`index-${index}`}
                className={classnames(
                  'px-[15px] first:pl-0 last:pr-0',
                  'xl:px-[20px] xl:leading-[10px]',
                )}
              >
                <a href="#">{e}</a>
              </li>
            ))}
          </ul>
          <p>
            ⓒ HYBEIM. 2022 All Rights Reserved.
            <br className="xl:hidden" /> 서울특별시 강남구 테헤란로 518, 11층.
          </p>
          <ul
            className={classnames(
              'mt-[5px] mb-[15px] flex flex-wrap items-center',
              'xl:divide-x xl:divide-gray-500',
            )}
          >
            {[
              '상호: (주)하이브 아이엠',
              '사업자등록번호: 843-86-02224',
              '통신판매업 신고번호: 제 2022-서울강남-01792호',
              '대표: 정우용',
            ].map((e, index) => (
              <li
                key={`index-${index}`}
                className={classnames(
                  'first:pl-0 last:pr-0',
                  'xl:leading-[10px] xl:px-[20px]',
                )}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classnames(
            'flex flex-wrap #xl:flex-col gap-y-[20px]',
            'xl:absolute xl:right-0 xl:bottom-0',
          )}
        >
          <ul className="mr-[30px] flex items-center gap-x-[30px]">
            <li>
              <a href="#">
                <img
                  src="/img/logo-facebook.png"
                  srcSet="/img/logo-facebook@2x.png 2x,
                            /img/logo-facebook@3x.png 3x"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/img/logo-twitter.png"
                  srcSet="/img/logo-twitter@2x.png 2x,
                            /img/logo-twitter@3x.png 3x"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/img/logo-insta.png"
                  srcSet="/img/logo-insta@2x.png 2x,
                            /img/logo-insta@3x.png 3x"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/img/logo-youtube.png"
                  srcSet="/img/logo-youtube@2x.png 2x,
                            /img/logo-youtube@3x.png 3x"
                  alt="youtube"
                />
              </a>
            </li>
          </ul>
          <ul className="flex">
            <li className="mr-[5px] hidden xl:block">
              <a href="#">
                <img
                  className="h-[40px]"
                  src="/img/down-appstore.png"
                  srcSet="/img/down-appstore@2x.png 2x,
                            /img/down-appstore@3x.png 3x"
                  alt="app store"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="h-[40px]"
                  src="/img/down-googleplay.png"
                  srcSet="/img/down-googleplay@2x.png 2x,
                            /img/down-googleplay@3x.png 3x"
                  alt="google play"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
