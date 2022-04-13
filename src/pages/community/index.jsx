import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import Tab from '../../components/Tab';
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import HeaderSection from '../../components/HeaderSection';
import classnames from 'classnames';

// data
import { card } from '../data';

const Main = () => {
  return (
    <>
      <section className={classnames('xl:my-[96px]', 'mt-[44px] mb-[120px]')}>
        <div className="container mx-auto">
          <HeaderSection
            title={() => <h1>인더섬 뉴스</h1>}
            content={() => (
              <p>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</p>
            )}
            arrow
          />
          <div
            className={classnames(
              'grid mt-[42px] gap-[30px] mx-full',
              'xl:grid-cols-2 xl:gap-[99px] xl:gap-y-[60px] xl:mt-[60px]',
            )}
          >
            {card.map((e, index) => (
              <Card data={e} key={`card-index-${index}`} />
            ))}
          </div>
        </div>
      </section>
      <section className={classnames('xl:my-[96px]', 'my-[44px]')}>
        <div className="container mx-auto">
          <HeaderSection
            title={() => <h1>자주 묻는 질문</h1>}
            content={() => (
              <p>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</p>
            )}
            arrow
          />
          <div className={classnames('xl:mt-[40px]', 'mt-[31px]')}>
            <Tab
              tabList={[
                { name: '전체', isActive: true },
                { name: '게임플레이' },
                { name: '회원' },
                { name: '홈페이지' },
                { name: '결제' },
                { name: '이벤트' },
              ]}
              responsive
            />
            <Accordion />
          </div>
        </div>
      </section>
      <section
        className={classnames('xl:mt-[91px] xl:mb-[120px]', 'mt-[60px]')}
      >
        <div className="xl:container mx-auto">
          <div className="xl:rounded-[12px] h-[230px] overflow-hidden">
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
      <div className="font-Pretendard overflow-x-hidden">
        <Main />
      </div>
      <Footer />
    </>
  );
};
