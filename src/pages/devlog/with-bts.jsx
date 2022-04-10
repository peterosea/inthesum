import React from 'react';
import 'keen-slider/keen-slider.min.css';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import CharacterItem from '../../components/Item/Character';
import Pagination from '../../components/Pagination';

// data
import { character, BtsBgImg } from '../data';

const Main = () => {
  return (
    <>
      <section className="mt-[80px] mb-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-x-[40px] gap-y-[120px] mb-[80px]">
            {character.slice(0, 12).map((props, index) => {
              return (
                <div key={`index-${index}`}>
                  <CharacterItem {...props} />
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </section>
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
