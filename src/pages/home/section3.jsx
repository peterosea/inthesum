import React from 'react';
import classnames from 'classnames';

// components
import HeaderSection from '../../components/HeaderSection';
import Card from '../../components/Card';
import { card } from '../data';

const Section3 = () => {
  return (
    <section className="my-[64px] md:my-[120px]">
      <div className="xl:container #sm:container #xl:px-[60px] #sm:px-cpx mx-auto">
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
            'xl:grid-cols-2 xl:gap-[40px] md:gap-y-[60px]',
          )}
        >
          {card.map((e, index) => (
            <Card data={e} key={`card-index-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
};

export default Section3;
