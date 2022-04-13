import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import useShrink from '../hook/useShrink';
import {
  useEventListener,
  useOnClickOutside,
  useLockedBody,
} from 'usehooks-ts';
import Select from '../components/Select';

const MobileMenu = () => {
  const [select, setSelect] = useState('');

  const onMenuClick = (menu) => {
    setSelect(menu);
  };

  return (
    <ul>
      <li
        onClick={() => onMenuClick('game')}
        className={classnames({ active: select === 'game' })}
      >
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
      <li
        onClick={() => onMenuClick('devlog')}
        className={classnames({ active: select === 'devlog' })}
      >
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
      <li
        onClick={() => onMenuClick('inthesum')}
        className={classnames({ active: select === 'inthesum' })}
      >
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
      <li
        onClick={() => onMenuClick('community')}
        className={classnames({ active: select === 'community' })}
      >
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
  );
};

const HeaderMobile = () => {
  const ref = useRef(null);
  const isShrink = useShrink(4);
  const [show, setShow] = useState(false);
  const [locked, setLocked] = useState(false);

  useEventListener('resize', () => {
    setShow(false);
  });

  const handleOpen = (e) => {
    e.preventDefault();
    setShow(true);
    setLocked(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    setLocked(false);
  };

  useOnClickOutside(ref, handleClose);
  useLockedBody(locked);

  return (
    <div
      id="mobile-menu-wrap"
      className={classnames('z-30', { active: isShrink })}
    >
      <div className={classnames('overlay', { on: show })}></div>
      <h1 className="logo">
        <a href="/">
          <img
            src="/img/logo-inthesum-small@3x.png"
            alt="inthesum logo"
            className="w-auto"
          />
        </a>
      </h1>
      {/* <!-- open menu btn --> */}
      <button className="gnb-toggle-btn" onClick={handleOpen}>
        <span></span>
      </button>
      <div ref={ref} className={classnames('m-menu', { on: show })}>
        {/* <!-- close menu btn --> */}
        <button className="gnb-toggle-btn close" onClick={handleClose}></button>
        <h1 className="logo">
          <a href="/">
            <img src="/img/logo-inthesum-small@3x.png" alt="inthesum logo" />
          </a>
        </h1>
        <nav id="m-gnb">
          <MobileMenu />
        </nav>
        <div className="info-group">
          <a href="#">로그아웃</a>
          <div className="lang" dir="ltr">
            <Select
              button={({ children }) => (
                <button className="leading-none pt-[4px] focus:outline-none focus:shadow-none focus:ring-0 cursor-pointer flex items-center gap-x-[10px]">
                  언어 : {children}
                  <svg width="8.182" height="6" viewBox="0 0 8.182 6">
                    <path
                      d="m4.091 0 4.091 6H0z"
                      transform="rotate(180 4.091 3)"
                      style={{ fill: '#fff' }}
                    />
                  </svg>
                </button>
              )}
              options={[
                {
                  id: 'option-1',
                  name: '한국어',
                },
                {
                  id: 'option-2',
                  name: '영어',
                },
                {
                  id: 'option-3',
                  name: '일본어',
                },
              ]}
              name="mnb"
            />
          </div>
        </div>
        <div className="account-info">
          <span>마이페이지</span>
          <a href="#">
            <img src="/img/icon-gnb-my@3x.png" alt="account img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
