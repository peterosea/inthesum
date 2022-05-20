import React from 'react';
import cx from 'classnames';

const CheckBtn = ({ isChecked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <circle
        cx="25"
        cy="25"
        r="25"
        className={cx('transition-all', {
          'fill-[#e6eaf2]': !isChecked,
          'fill-[#803ad3]': isChecked,
        })}
      />
      <path
        className="fill-white"
        d="M13.805 25.356a1.7 1.7 0 0 1-1.221-.515l-8.132-8.328a1.571 1.571 0 0 1 .075-2.279 1.721 1.721 0 0 1 2.367.072l6.893 7.071L27.859 6.558a1.708 1.708 0 0 1 1.625-.572A1.651 1.651 0 0 1 30.766 7.1a1.57 1.57 0 0 1-.431 1.613L15.043 24.825a1.7 1.7 0 0 1-1.221.532z"
        transform="translate(7.442 9.486)"
      />
      <path
        className="fill-white"
        d="M13.805 25.356a1.7 1.7 0 0 1-1.221-.515l-8.132-8.328a1.571 1.571 0 0 1 .075-2.279 1.721 1.721 0 0 1 2.367.072l6.893 7.071L27.859 6.558a1.708 1.708 0 0 1 1.625-.572A1.651 1.651 0 0 1 30.766 7.1a1.57 1.57 0 0 1-.431 1.613L15.043 24.825a1.7 1.7 0 0 1-1.221.532z"
        transform="translate(7.442 9.486)"
      />
    </svg>
  );
};

export default CheckBtn;
