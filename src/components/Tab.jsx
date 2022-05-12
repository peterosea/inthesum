import React from 'react';
import classnames from 'classnames';
import './Tab.scss';

/**
 *
 * @property {[
 * name: string
 * isActive: boolean
 * ]} tabList
 */
const Tab = ({ tabList, responsive }) => {
  if (!tabList) return;
  return (
    <div id="tab" className="mb-[10px]">
      <div>
        <nav
          className={classnames(
            'relative z-0 grid grid-flow-col divide-x divide-[#e6eaf2] border-x border-[#e6eaf2]',
            { [`tab-size tab-${tabList.length}`]: responsive },
          )}
          aria-label="Tabs"
        >
          {tabList.map(({ name, isActive = false }, index) => (
            <button
              key={`index-${index}`}
              aria-current="page"
              className={classnames(
                'leading-none flex items-center justify-center min-w-0 group relative overflow-hidden bg-white py-[14px] px-4 text-center hover:bg-gray-50 focus:z-10',
                'xl:py-[21px]',
                { 'text-primary': isActive },
                { 'text-[#c3cad5]': !isActive },
              )}
            >
              <span className="text-[12px] xl:text-[18px] font-bold font-Pretendard">
                {name}
              </span>
              {isActive ? (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px sell_border_top bg-primary !block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px sell_border_bottom bg-primary"
                  />
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute inset-y-0 right-0 w-px h-full"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute inset-y-0 left-0 w-px h-full"
                  ></span>
                </>
              ) : (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px sell_border_top bg-[#e6eaf2]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px sell_border_bottom bg-[#e6eaf2]"
                  />
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
