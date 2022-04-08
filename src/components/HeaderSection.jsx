import React from 'react';

// 임시 기본 값
const aTitle = '자주 묻는 질문';
const aContent = () => <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>;

/**
 *
 * @property {string} title
 * @property {JSX.Element} content
 */
const HeaderSection = ({
  title = aTitle,
  content = aContent,
  arrow = false,
}) => (
  <div className="flex gap-x-[30px] justify-between font-Pretendard">
    <div>
      <h1 className="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold leading-[0.69]">
        {title}
      </h1>
      <div className="text-[18px]">{content()}</div>
    </div>
    {arrow ?? (
      <div>
        <i className="icon-arrow2 text-[31px] rotate-180 inline-block"></i>
      </div>
    )}
  </div>
);

export default HeaderSection;
