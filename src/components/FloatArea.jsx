import React from 'react';
import ScrollTop from './ScrollTop';
import GooglePlayBtn from './Btn/GooglePlayBtn';
import AppStoreBtn from './Btn/AppStoreBtn';

const FloatArea = () => {
  return (
    <div className="container mx-auto sticky bottom-0 z-40">
      <div className="absolute left-full bottom-[130px] grid gap-y-[20px] xl:translate-x-[60px]">
        <AppStoreBtn />
        <GooglePlayBtn />
        <ScrollTop />
      </div>
    </div>
  );
};

export default FloatArea;
