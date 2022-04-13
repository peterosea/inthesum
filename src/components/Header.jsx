import React, { useState } from 'react';
import classnames from 'classnames';
import useShrink from '../hook/useShrink';
import HeaderMobile from './HeaderMobile';
import Select from '../components/Select';
import './Header.scss';

const Header = ({ isBlack = false }) => {
  const [isMenuOver, setIsMenuOver] = useState(false);
  const [isHeaderOver, setIsHeaderOver] = useState(false);
  const isShrink = useShrink(window.innerHeight * 0.8 - 110);
  return (
    <>
      <header>
        <HeaderMobile />
        {/* policy tw-bg-black */}
        <div
          id="dt-menu-wrap"
          className={classnames(
            'top-0',
            { active: isMenuOver },
            { 'bg-black': isBlack },
            { over: isShrink || isHeaderOver },
          )}
          onMouseLeave={() => {
            setIsMenuOver(false);
            setIsHeaderOver(false);
          }}
          onMouseEnter={() => {
            setIsHeaderOver(true);
          }}
        >
          <div className="dt-menu">
            <h1 className="logo">
              <a href="/">
                <img
                  src="/img/logo-inthesum-small@3x.png"
                  alt="inthesum logo"
                  className="w-auto"
                />
              </a>
            </h1>
            <nav id="gnb" onMouseEnter={() => setIsMenuOver(true)}>
              <ul>
                <li>
                  <div className="menu-wrap">
                    <a href="#1">개임소개</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">소개영상</a>
                      </div>
                      <div className="items">
                        <a href="#">주요스토리</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#2">인더섬 개발일지</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">with BTS</a>
                      </div>
                      <div className="items">
                        <a href="#">개발 PD 노트</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#">made by ARMY</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">인더섬 가이드</a>
                      </div>
                      <div className="items">
                        <a href="#">BTS 의상실</a>
                      </div>
                      <div className="items">
                        <a href="#">주간 인더섬 매거진</a>
                      </div>
                      <div className="items">
                        <a href="#">BTS 의뢰 컨텐츠</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#">커뮤니티</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">공지사항</a>
                      </div>
                      <div className="items">
                        <a href="#">설문공간</a>
                      </div>
                      <div className="items">
                        <a href="#">FAQ</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="right-menu">
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/icon-gnb-my@3x.png" alt="account img" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="logout"
                      src="/img/icon-logout@3x.png"
                      alt="logout img"
                    />
                  </a>
                </li>
                <li>
                  <Select
                    button={({ children }) => (
                      <button className="leading-none pt-[1.5px] focus:outline-none focus:shadow-none focus:ring-0 cursor-pointer flex items-center gap-x-[10px] lang">
                        {children}
                      </button>
                    )}
                    options={[
                      {
                        id: 'option-1',
                        name: 'KR',
                      },
                      {
                        id: 'option-2',
                        name: 'JP',
                      },
                      {
                        id: 'option-3',
                        name: 'US',
                      },
                    ]}
                    name="gnb"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {isBlack && <div className="h-[110px]" />}
    </>
  );
};

export default Header;
