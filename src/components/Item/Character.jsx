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
const CharacterItem = ({ name, time, content, characterImg }) => {
  const ModifyCharacterImgg = () =>
    React.cloneElement(characterImg(), {
      className: 'h-full max-h-[180px] w-auto',
    });
  return (
    <div
      className={cx(
        'relative max-w-[320px] xl:max-w-[270px] min-h-[390px] md:min-h-[320px]',
      )}
    >
      <div className="relative z-10 p-[28px] sm:p-[34px] bg-[#f4f6fa] rounded-[30px] min-h-[230px]">
        <div className="text-[30px] font-extrabold text-left font-TmoneyRoundWind leading-none flex flex-wrap items-end">
          <div className="break-all line-clamp-2">{name}</div>
          <div className="flex items-end">
            <div className="w-[39px] mr-[5px]">
              <img
                src="/img/new@3x.png"
                srcSet="/img/new@2x.png 2x,
                    /img/new@3x.png 3x"
                alt="new"
              />
            </div>
            <div className="text-[14px] font-normal text-[#999]">{time}</div>
          </div>
        </div>
        <div className="mt-[20px] line-clamp-2 text-[14px] leading-[1.36] font-TmoneyRoundWind font-normal">
          {content()}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <ModifyCharacterImgg />
      </div>
    </div>
  );
};

export default CharacterItem;
