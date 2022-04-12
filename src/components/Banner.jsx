import React from 'react';

const BgImg = () => (
  <img
    src="https://picsum.photos/1200/230.webp"
    className="object-cover w-full h-full absolute object-center"
    alt=""
  />
);

/**
 *
 * @param {JSX.Element} bgImg <img ...>
 * @param {React.ReactNode} children
 * @returns
 */
const Banner = ({ bgImg = BgImg, children }) => {
  const ModifyBgImg = () => React.cloneElement(bgImg(), {
    className: 'object-cover w-full h-full absolute object-center',
  })
  return (
    <div className="relative overflow-hidden h-full">
      <ModifyBgImg />
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
