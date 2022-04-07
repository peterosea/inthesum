import React from 'react';
import Tab from '../../components/Tab';
import Select from '../../components/Select';

const PolicyHeader = () => {
  return (
    <section className="my-[80px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="min-w-[600px]">
            <Tab
              tabList={[
                { name: '이용약관', isActive: true },
                { name: '개인정보처리방침' },
                { name: '운영정책' },
              ]}
            />
          </div>
          <div className="flex items-center gap-x-[15px]">
            <div className="font-bold whitespace-nowrap">버전</div>
            <Select
              options={[
                '1.9 / 2022-05-31 ~ 2022-06-01',
                '1.9 / 2022-05-31 ~ 2022-06-01',
                '1.9 / 2022-05-31 ~ 2022-06-01',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PolicyHeader };
