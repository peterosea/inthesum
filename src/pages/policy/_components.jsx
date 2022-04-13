import React from 'react';
import Tab from '../../components/Tab';
import Select from '../../components/Select';

const PolicyHeader = () => {
  return (
    <section className="mb-[20px] mt-[30px] xl:my-[80px]">
      <div className="container mx-auto">
        <div className="flex #xl:flex-col justify-between">
          <div className="xl:min-w-[600px]">
            <Tab
              tabList={[
                { name: '이용약관', isActive: true },
                { name: '개인정보처리방침' },
                { name: '운영정책' },
              ]}
            />
          </div>
          <div className="xl:hidden prose lg:prose-xl max-w-none mt-[34px] mb-[31px]">
            <h2>운영정책</h2>
          </div>
          <div className="flex items-center gap-x-[15px]">
            <div className="font-bold whitespace-nowrap hidden xl:block">
              버전
            </div>
            <div className="w-full">
              <Select
                button={({ children }) => (
                  <div className="leading-none block w-full focus:outline-none focus:shadow-none focus:ring-0 focus:border-primary border-[#e6eaf2] font-Pretendard text-[14px] pl-[26px] py-[21px] pr-[53px] text-[#333] focus:text-black border relative">
                    {children}
                    <i className="icon-arrow absolute right-[17px] top-1/2 -translate-y-1/2" />
                  </div>
                )}
                options={[
                  { id: 'option-1', name: '1.9 / 2022-05-31 ~ 2022-06-01' },
                  { id: 'option-2', name: '1.9 / 2022-05-31 ~ 2022-06-02' },
                  { id: 'option-3', name: '1.9 / 2022-05-31 ~ 2022-06-03' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PolicyHeader };
