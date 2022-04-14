import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/style.scss';

const index = () => {
  return (
    <div className="container mx-auto py-[90px] min-h-screen flex flex-col justify-center items-center">
      <div className="prose">
        <h1>퍼블리싱 사이트맵</h1>
        <ul>
          <li>
            <span className="inline-block py-[3px] px-[10px] bg-red-500 rounded-full mr-[8px] text-sm font-semibold text-white">
              메인페이지
            </span>
            <Link to="/home">/home</Link>
          </li>
          <li>
            <span className="inline-block py-[3px] px-[10px] bg-blue-500 rounded-full mr-[8px] text-sm font-semibold text-white">
              커뮤니티
            </span>
            <Link to="/community">/community</Link>
            <ul>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-blue-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  공지사항
                </span>
                <Link to="/community/news">/community/news</Link>
              </li>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-blue-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  자주묻는 질문
                </span>
                <Link to="/community/qna">/community/qna</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className="inline-block py-[3px] px-[10px] bg-green-500 rounded-full mr-[8px] text-sm font-semibold text-white">
              policy
            </span>
            <ul>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-green-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  개인정보처리 방침
                </span>
                <Link to="/policy/privacy">/policy/privacy</Link>
              </li>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-green-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  운영정책
                </span>
                <Link to="/policy/operation">/policy/operation</Link>
              </li>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-green-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  이용약관
                </span>
                <Link to="/policy/service">/policy/service</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className="inline-block py-[3px] px-[10px] bg-amber-400 rounded-full mr-[8px] text-sm font-semibold text-white">
              게임소개
            </span>
            <Link to="/game/introduction">/game/introduction</Link>
          </li>
          <li>
            <span className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white">
              인더섬 개발일지
            </span>
            <Link to="/devlog">/devlog</Link>
            <ul>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  with BTS
                </span>
                <Link to="/devlog/with-bts">/devlog/with-bts</Link>
                <ul>
                  <li>
                    <span className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                      상세페이지
                    </span>
                    <Link to="/devlog/sample">/devlog/sample</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white">
                  개발 PD 노트
                </span>
                <Link to="/devlog/pd-note">/devlog/pd-note</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
