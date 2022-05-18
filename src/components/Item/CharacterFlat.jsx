import React from 'react';

const Thumbnail = ({ img, type }) => {
  const ModifyThumbnail = () =>
    React.cloneElement(img(), {
      className: 'absolute object-cover',
    });

  let Cover = () => <></>;
  if (type === 'video') {
    Cover = () => (
      <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <i className="icon-right-dir text-[30px] text-white" />
      </div>
    );
  }
  return (
    <div className="w-[70px] h-[70px] rounded-[20px] overflow-hidden relative">
      <ModifyThumbnail />
      <Cover />
    </div>
  );
};
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
  return (
    <div className="grid grid-cols-[1fr,auto] bg-[#f4f6fa] rounded-[12px] px-[36px] py-[34px] gap-x-[40px] h-full">
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-[30px] font-extrabold text-left font-TmoneyRoundWind leading-none">
            {name}
            <span className="w-[39px] relative inline-block top-[6px] mr-[5px]">
              <img
                src="/img/new@3x.png"
                srcSet="/img/new@2x.png 2x,
                    /img/new@3x.png 3x"
                alt="new"
              />
            </span>
          </div>
          <div className="mt-[20px] text-[18px] line-clamp-3 leading-[1.36] font-TmoneyRoundWind font-normal">
            {content()}
          </div>
        </div>
        <span className="text-[14px] font-normal text-[#999]">{time}</span>
      </div>
      <div className="relative">{characterImg()}</div>
    </div>
  );
};

export default CharacterFlatItem;
