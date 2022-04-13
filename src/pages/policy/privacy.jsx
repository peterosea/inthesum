import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PolicyHeader } from './_components';

const Main = () => {
  return (
    <>
      <PolicyHeader />
      <section className="xl:my-[80px] mb-[61px]">
        <div className="container mx-auto">
          <article className="prose text-[12px] lg:text-[20px] max-w-none">
            <h2 className="hidden xl:block">개인정보처리방침</h2>
            <p>
              주식회사 ㅇㅇ소프트(이하 ‘회사’라 합니다.)는 고객님의 개인정보를
              중요시하며, ‘개인정보보호주식회사 ㅇㅇ소프트(이하 ‘회사’라
              합니다.)는 고객님의 개인
              <br />
              정보를 중요시하며, ‘개인정보보호법’ 등 회사가 준수하여야 할 관련
              법령상의 개인정보보호 규정을 준수하고 있습니다.
            </p>
            <p>
              회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가
              어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
              조치가 취해지
              <br />고 있는지 알려드리며 다음과 같은 내용을 담고 있습니다.
            </p>
            <ol>
              <li>
                <p>수집하는 개인정보의 항목 및 수집방법</p>
              </li>
              <li>
                <p>고유식별정보의 처리</p>
              </li>
              <li>
                <p>개인정보의 수집 및 이용목적</p>
              </li>
              <li>
                <p>개인정보의 보유 및 이용기간</p>
              </li>
              <li>
                <p>개인정보의 파기절차 및 방법</p>
              </li>
              <li>
                <p>장기 미이용 계정의 개인정보 분리 저장∙관리</p>
              </li>
              <li>
                <p>개인정보의 제공</p>
              </li>
              <li>
                <p>이용자 및 법정대리인의 권리와 그 행사방법</p>
              </li>
              <li>
                <p>개인정보 자동 수집장치의 설치∙운영 및 그 거부에 관한 사항</p>
              </li>
              <li>
                <p>개인정보의 안전성 확보 조치에 관한 사항</p>
              </li>
              <li>
                <p>개인정보처리방침의 변경</p>
              </li>
              <li>
                <p>개인정보보호책임자</p>
              </li>
            </ol>
            <ol>
              <li>
                수집하는 개인정보의 항목 및 수집방법
                <br />
                <p>(1) 수집하는 개인정보의 항목</p>
              </li>
            </ol>
            <ol>
              <li>회원 가입 시 아래와 같은 정보가 수집됩니다.</li>
            </ol>
            <ul>
              <li>웹사이트 또는 모바일 웹/앱 이용 시</li>
            </ul>
            <p>• (공통) 국가정보</p>
            <p>• 이메일 계정 이용 시: 이메일 주소(계정명), 비밀번호</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default () => {
  return (
    <>
      <Header isBlack />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
