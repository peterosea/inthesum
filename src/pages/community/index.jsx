import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import Tab from '../../components/Tab';
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';
import Banner from '../../components/Banner';

const SectionHeader = () => (
  <div className="flex gap-x-[30px] justify-between font-Pretendard">
    <div>
      <h1 className="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold leading-[0.69]">
        자주 묻는 질문
      </h1>
      <div className="text-[18px]">
        <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>
      </div>
    </div>
    <div>
      <i className="icon-arrow2 text-[31px] rotate-180 inline-block"></i>
    </div>
  </div>
);
const Main = () => {
  return (
    <>
      <section className="my-[96px]">
        <div className="container mx-auto">
          <SectionHeader />
          <div className="grid grid-cols-2 gap-[99px] mt-[60px]">
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Card />
            ))}
          </div>
        </div>
      </section>
      <section className="my-[96px]">
        <div className="container mx-auto">
          <SectionHeader />
          <div className="mt-[40px]">
            <Tab
              tabList={[
                { name: '전체', isActive: true },
                { name: '게임플레이' },
                { name: '회원' },
                { name: '홈페이지' },
                { name: '결제' },
                { name: '이벤트' },
              ]}
            />
            <Accordion />
          </div>
        </div>
      </section>
      <section className="mt-[91px] mb-[120px]">
        <div className="container mx-auto">
          <Banner>
            <div className="text-center">
              <div className="font-TmoneyRoundWind text-[20px] text-white font-extrabold">
                COMING SOON
              </div>
              <div className="font-TmoneyRoundWind text-[36px] text-white font-extrabold tracking-[-1.08px]">
                함께 만들어요! 인더섬
              </div>
              <div className="font-Pretendard text-[16px] text-white tracking-[-0.48px]">
                보다 좋은 서비스를 위해 준비중이에요. 빠른 시일내에 오픈할께요
              </div>
            </div>
          </Banner>
        </div>
      </section>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <HeaderPage
        title="커뮤니티"
        content={() => <>인더섬의 소식과 궁금한 사항을 전해드려요</>}
      />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};