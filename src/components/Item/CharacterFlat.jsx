import React from 'react';
import cx from 'classnames';

/**
 *
 * @param {string} name
 * @param {string} time
 * @param {string} content
 * @param {[{img: JSX.Element, type: string img | video}]} thumbnail
 * @param {JSX.Element} characterImg
 * @returns
 */
const CharacterFlatItem = ({ name, time, content, characterImg }) => {
  const ModifyCharacterImgg = () =>
    React.cloneElement(characterImg(), {
      className: 'h-full max-h-[135px] md:max-h-[180px] w-auto',
    });
  return (
    <div className="grid xs:grid-cols-[1fr,auto] bg-[#f4f6fa] md:rounded-[12px] px-[36px] py-[34px] gap-x-[40px] h-full #xs:gap-y-[20px]">
      <div className="flex flex-col justify-between">
        <div className="relative">
          <div className="text-[30px] font-extrabold text-left font-TmoneyRoundWind leading-[1.3em] align-bottom">
            <span className='break-all'>
            {name}
            </span>
            <span className="w-[39px] ring-0 inline-block">
              <img
                src="/img/new@3x.png"
                srcSet="/img/new@2x.png 2x,
                    /img/new@3x.png 3x"
                alt="new"
              />
            </span>
          </div>
          <div
            className={cx(
              'mt-[18px] text-[14px] line-clamp-3 leading-[1.36] font-TmoneyRoundWind font-normal',
              'md:text-[18px] md:mt-[20px]',
            )}
          >
            {content()}
          </div>
        </div>
        <span className="text-[14px] font-normal text-[#999]">{time}</span>
      </div>
      <div className="relative #xs:justify-self-start">
        <ModifyCharacterImgg />
      </div>
    </div>
  );
};

export default CharacterFlatItem;
