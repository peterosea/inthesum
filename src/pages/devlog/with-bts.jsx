import React from 'react';
import 'keen-slider/keen-slider.min.css';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import CharacterItem from '../../components/Item/Character';
import Pagination from '../../components/Pagination';
import PaginationBar from '../../components/Pagination/Bar';
import FlotArea from '../../components/FlotArea';

// data
import { character, BtsBgImg } from '../data';

const Main = () => {
  return (
    <>
      <section className="mt-[80px] mb-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-x-[40px] gap-y-[120px] mb-[80px] justify-center">
            {character.slice(0, 12).map((props, index) => {
              return (
                <div key={`index-${index}`} class="w-[270px]">
                  <CharacterItem {...props} />
                </div>
              );
            })}
          </div>
          <div className="hidden xl:block">
            <Pagination />
          </div>
          <div className="block xl:hidden pl-cpx">
            <PaginationBar current={1} all={9} />
          </div>
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
      <div className="font-Pretendard mb-[120px] relative">
        <Main />
        <FlotArea />
      </div>
      <Footer />
    </>
  );
};
