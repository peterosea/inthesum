import React from 'react';

const HealingLift = () => {
  return (
    <div className='bg-[#F4F6FA] p-[40px] pt-[46px] pb-[70px] text-left  border-t-[3px] border-primary relative'>
      <img
        src="/img/img-main.png"
        srcSet="/img/img-main@2x.png 2x,
                /img/img-main@3x.png 3x"
        alt="with BTS"
        className="absolute h-full w-auto max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative h-[450px] flex items-center justify-center flex-col text-white text-center"></div>
    </div>
  );
};

export default HealingLift;
