import React from 'react';
import ScrollTop from './ScrollTop';
import GooglePlayBtn from './Btn/GooglePlayBtn';
import AppStoreBtn from './Btn/AppStoreBtn';

const FlotArea = () => {
  return (
    <div className="container mx-auto sticky bottom-0 z-40 h-[3px] bg-blue-500">
      <div className="absolute left-full bottom-[130px] grid gap-y-[20px] translate-x-[60px]">
        <AppStoreBtn />
        <GooglePlayBtn />
        <ScrollTop />
      </div>
    </div>
  );
};

export default FlotArea;
