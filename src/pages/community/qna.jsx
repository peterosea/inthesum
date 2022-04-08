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
      <HeaderPage
        title="자주 묻는 질문"
        content={() => <>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</>}
        bgImg={() => (
          <img
            src="/public/img/bg-community-news.png"
            srcSet="/public/img/bg-community-news@2x.png 2x,
                    /public/img/bg-community-news@3x.png 3x"
            className="object-cover w-full h-full absolute object-center"
          />
        )}
      />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
