import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import HeaderPage from '../../components/HeaderPage';
import Tab from '../../components/Tab';
import Accordion from '../../components/Accordion';

const Main = () => {
  return (
    <>
      <div className="container mx-auto">
        <section className="mt-[80px]">
          <div>
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
          <div className="mt-[40px]">
            <Pagination />
          </div>
        </section>
      </div>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <HeaderPage />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
