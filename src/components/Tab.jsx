import React from 'react';
import classnames from 'classnames';
import Select from './Select';

const Tab = ({ tabList }) => {
  if (!tabList) return;
  return (
    <div id="tab" className="font-TmoneyRoundWind font-bold mb-[10px]">
      <div className="sm:hidden">
        <Select options={tabList.map((e) => e.name)} />
      </div>
      <div className="hidden sm:block">
        <nav
          className="relative z-0 grid grid-flow-col divide-x divide-[#e6eaf2] border-x border-[#e6eaf2]"
          aria-label="Tabs"
        >
          {tabList.map(({ name, isActive = false }, index) => (
            <button
              key={`index-${index}`}
              aria-current="page"
              className={classnames(
                'leading-none flex items-center justify-center min-w-0 text-[18px] group relative overflow-hidden bg-white py-[21px] px-4 text-center hover:bg-gray-50 focus:z-10',
                { 'text-primary': isActive },
                { 'text-[#c3cad5]': !isActive },
              )}
            >
              <span>{name}</span>
              <span
                aria-hidden="true"
                className={classnames(
                  'absolute inset-x-0 top-0 h-px',
                  { 'bg-primary': isActive },
                  { 'bg-[#e6eaf2]': !isActive },
                )}
              />
              <span
                aria-hidden="true"
                className={classnames(
                  'absolute inset-x-0 bottom-0 h-px',
                  { 'bg-primary': isActive },
                  { 'bg-[#e6eaf2]': !isActive },
                )}
              />
              {isActive && (
                <>
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute inset-y-0 right-0 w-px h-full"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute inset-y-0 left-0 w-px h-full"
                  ></span>
                </>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tab;
