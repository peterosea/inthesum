import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import PaginationBar from '../../components/Pagination/Bar';
import HeaderPage from '../../components/HeaderPage';
import Tab from '../../components/Tab';
import Accordion from '../../components/Accordion';
import FloatArea from '../../components/FloatArea';

const Main = () => {
  return (
    <>
      <section className="mt-[30px] xl:mt-[80px]">
        <div className="container mx-auto">
          <Tab
            tabList={[
              { id: 'option-1', name: '전체', isActive: true },
              { id: 'option-2', name: '게임플레이' },
              { id: 'option-3', name: '회원' },
              { id: 'option-4', name: '홈페이지' },
              { id: 'option-5', name: '결제' },
              { id: 'option-6', name: '이벤트' },
              { id: 'option-7', name: '이벤트', isActive: true },
            ]}
            responsive
          />
        </div>
        <div className="container mx-auto overflow-x-hidden">
          <Accordion />
        </div>
        <div className="mt-[30px] xl:mt-[40px]">
          <div className="hidden xl:block">
            <Pagination />
          </div>
          <div className="block xl:hidden pl-cpx">
            <PaginationBar current={1} all={9} />
          </div>
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
        title="자주 묻는 질문"
        content={() => <>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</>}
        bgImg={() => (
          <img
            src="/img/bg-community-news.png"
            srcSet="/img/bg-community-news@2x.png 2x,
                    /img/bg-community-news@3x.png 3x"
            className="object-cover w-full h-full absolute object-center"
          />
        )}
      />
      <div className="font-Pretendard mb-[25px] xl:mb-[120px] relative">
        <Main />
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
