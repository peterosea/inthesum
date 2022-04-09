import React from 'react';
import classnames from 'classnames';
import './HeaderSection.scss';

// 임시 기본 값
const aTitle = () => (
  <h1 className="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold leading-[0.69]">
    자주 묻는 질문
  </h1>
);
const aContent = () => <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>;

/**
 *
 * @property {JSX.Element} title
 * @property {JSX.Element} content
 */
const HeaderSection = ({
  title = aTitle,
  content = aContent,
  arrow = false,
  className,
}) => {
  return (
    <div className={classnames('headerSection font-Pretendard', className)}>
      <div className="headerSection-title">{title()}</div>
      <div className="headerSection-content text-[18px]">{content()}</div>
      {arrow && (
        <div className="headerSection-arrow">
          <i className="icon-arrow2 text-[31px] rotate-180 inline-block leading-none"></i>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
