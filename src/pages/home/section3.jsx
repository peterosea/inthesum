import React from 'react';
import classnames from 'classnames';
import { useWindowSize } from 'usehooks-ts';

// components
import HeaderSection from '../../components/HeaderSection';
import MagazineSlide from '../../components/home/MagazineSlide';
import Card from '../../components/Card';
import { card } from '../data';

const Section3 = () => {
  const { width } = useWindowSize();
  return 1024 > width && width > 648 ? (
    <section className="my-[64px] xl:my-[120px]">
      <div className="container mx-auto">
        <HeaderSection
          title={() => <h1>주간섬 매거진</h1>}
          content={() => <p>아미와 함께 만들어 나가는 인더섬 이야기</p>}
          arrow
        />
        <div
          className={classnames(
            'mt-[42px] mx-full',
            'xl:mt-[60px]',
            'grid grid-cols-1 gap-y-[30px]',
            'xl:grid-cols-2 xl:gap-[40px] xl:gap-y-[60px]',
          )}
        >
          {card.map((e, index) => (
            <Card data={e} key={`card-index-${index}`} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <section>
      <div className="xl:container mx-auto relative">
        <div
          className={classnames(
            'px-cpx py-[90] xl:py-[90px]',
            'xl:h-full xl:absolute xl:top-0 xl:left-0 xl:z-10',
          )}
        >
          <div className="flex xl:flex-col justify-between">
            <div className="w-[160px]">
              <img src="/img/img-madebyarmy-title@3x.png" alt="with BTS" />
              <div className="text-[22px] font-bold whitespace-nowrap text-justify mt-[20px]">
                주간 인더섬 매거진
              </div>
              <div className="my-[30px] hidden xl:block">
                <p>아미와 함께 만드어 나가는 인더섬 이야기</p>
              </div>
            </div>
            <a href="#">
              <img
                src="/img/icon-more-arrow@3x.png"
                alt="more view"
                className="w-[31px]"
              />
            </a>
          </div>
          <div className="absolute w-[110px] h-px bottom-[-1px] right-0 bg-white hidden xl:block"></div>
        </div>
        <div className="xl:pl-[270px]">
          <MagazineSlide />
        </div>
      </div>
    </section>
  );
};

export default Section3;
