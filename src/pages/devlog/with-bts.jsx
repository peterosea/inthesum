import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import cx from 'classnames';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import CharacterItem from '../../components/Item/Character';
import CharacterFlatItem from '../../components/Item/CharacterFlat';
import Pagination from '../../components/Pagination';
import PaginationBar from '../../components/Pagination/Bar';
import FloatArea from '../../components/FloatArea';

// data
import { character, BtsBgImg } from '../data';

const Main = () => {
  const { width } = useWindowSize();
  return (
    <>
      <section className="mt-[80px] mb-[120px]">
        <div className="container mx-auto">
          <div
            className={cx(
              'gap-y-[60px] sm:gap-[40px] md:gap-[20px] mb-[80px] grid sm:grid-cols-2 #md:justify-center',
            )}
          >
            {character.slice(0, 12).map((props, index) => {
              switch (true) {
                case width > 1024:
                  return (
                    <div key={`index-${index}`} className="h-full">
                      <CharacterFlatItem {...props} />
                    </div>
                  );
                default:
                  return (
                    <div key={`index-${index}`}>
                      <CharacterItem {...props} />
                    </div>
                  );
              }
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
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
