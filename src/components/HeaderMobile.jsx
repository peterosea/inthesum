import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import useShrink from '../hook/useShrink';
import {
  useEventListener,
  useOnClickOutside,
  useLockedBody,
} from 'usehooks-ts';

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
            src="/public/img/logo-inthesum-small@3x.png"
            alt="inthesum logo"
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
            <img
              src="/public/img/logo-inthesum-small@3x.png"
              alt="inthesum logo"
            />
          </a>
        </h1>
        <nav id="m-gnb">
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
        <div className="info-group">
          <a href="#">로그아웃</a>
          <div className="lang" dir="ltr">
            <label htmlFor="select-lang">언어 : </label>
            <select id="select-lang" className="select-lang">
              <option value="kor">한국어</option>
              <option value="eng">영어</option>
              <option value="jan">일본어</option>
            </select>
          </div>
        </div>
        <div className="account-info">
          <span>마이페이지</span>
          <a href="#">
            <img src="/public/img/icon-gnb-my@3x.png" alt="account img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
