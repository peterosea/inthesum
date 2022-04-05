import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer-info">
          <div className="logo-group">
            <h1>
              <a href="#">
                <img src="/public/img/logo-hybe.png" alt="hybe" />
              </a>
              <a href="#">
                <img src="/public/img/logo-netmarble.png" alt="netmarble" />
              </a>
            </h1>
          </div>
          <ul className="sitemenu">
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보취급방침</a>
            </li>
            <li>
              <a href="#">운영정책</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#">앱다운로드</a>
            </li>
          </ul>
          <p>COPYRIGHT &copy; HYBE IM. ALL RIGHTS RESERVED.</p>
          <ul className="info">
            <li>상호: 하이브 아이엠</li>
            <li>사업자등록번호: 143-01-09821</li>
            <li>대표: 김선일</li>
            <li>통신판매업 신고번호 제2015-경기성남-0971</li>
          </ul>
        </div>
        <div className="sns">
          <ul>
            <li>
              <a href="#">
                <img src="/public/img/logo-facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/public/img/logo-twitter.png" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/public/img/logo-insta.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/public/img/logo-youtube.png" alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
