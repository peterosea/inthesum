import React from 'react';
import 'keen-slider/keen-slider.min.css';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';

// data
import { BtsBgImg } from './data';

const Main = () => {
  return (
    <>
      <section className="mt-[80px] mb-[120px]"></section>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <HeaderPage
        bgImg={BtsBgImg}
        title="with BTS"
        content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
      />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
