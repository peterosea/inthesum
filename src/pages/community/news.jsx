import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import HeaderPage from '../../components/HeaderPage';
import ScrollTop from '../../components/ScrollTop';

const Main = () => {
  return (
    <>
      <div className="container mx-auto">
        <section className="mt-[70px] mb-[80px]">
          <div className="grid grid-cols-2 gap-[9px] mb-[80px]">
            {[1, 2].map(() => (
              <Card isPin={true} pin={true} />
            ))}
            {[3, 4, 5, 6].map(() => (
              <Card isPin={true} pin={false} />
            ))}
          </div>
          <Pagination />
        </section>
      </div>
      <div className="h-px bg-[#e6eaf2]"></div>
      <div className="mt-[87px]">
        <div className="container mx-auto">
          <div>
            <div className="mb-[80px]">
              <h1 className="text-[42px] tracking-[-2.1px] font-bold font-TmoneyRoundWind leading-tight mb-[15px]">
                핀 표시 있는 게시물은 고정 게시물
              </h1>
              <time>2022년 4월 13일 오후 5시 53분</time>
            </div>
            <article className="prose lg:prose-2xl max-w-none">
              <p>
                BTS와 함께 하는 힐링 섬 라이프 인더섬 with BTS입니다.
                <br />
                3/10(목) 업데이트 상세 내용을 안내해 드립니다.
              </p>
              <p>
                다가온 봄, 설레는 새학기를 맞아 버터 교복 코스튬이 추가됩니다.
                <br />
                더불어 봄맞이 출석부 및 포탈 기능 추가! 이벤트와 각종 상품을
                준비했습니다.
              </p>
              <p>
                입주민 여러분의 많은 관심 부탁드리며,
                <br />
                자세한 내용은 아래에서 확인하시기 바랍니다.
              </p>
              <p>
                <strong>■ 3/10(목) 업데이트 상세 내용 안내</strong>
              </p>
              <p>
                • 신규 코스튬 추가 - 클래스 별 신규 코스튬 ‘이세계 교복’이
                추가되며, 해당 코스튬 관련 도감 및 마스터가 함께 추가됩니다.
                <br />
                - 이세계 교복 코스튬은 [소환 → 코스튬 소환]에서 지정된 확률로
                소환하거나, 상품 구매 또는 [캐릭터 → 코스튬]에서
                <br />
                제작할 수 있습니다.
              </p>
              <p>
                * [소환 → 코스튬 소환]을 통해 이미 소유 중인 코스튬을 중복으로
                획득한 경우, 마법 실타래를 획득합니다.
                <br />
                * 의상은 마법 실타래 등의 재료를 사용하여 제작할 수 있습니다.
                <br />
                제작에 필요한 재료의 상세 정보는 게임 내에서 확인 부탁드립니다.
              </p>
              <img src="https://picsum.photos/1200/400.webp" alt="" />
              <p className="text-red-500">
                {' '}
                * 상기 참고 이미지는 안내를 위해 연출된 이미지이므로, 게임 내
                실제 모습과 다를 수 있습니다.
              </p>
              <p>
                • 신규 코스튬 추가 - 클래스 별 신규 코스튬 ‘이세계 교복’이
                추가되며, 해당 코스튬 관련 도감 및 마스터가 함께 추가됩니다. -
                이세계 교복 코스튬은 [소환 → 코스튬 소환]에서 지정된 확률로
                소환하거나, 상품 구매 또는 [캐릭터 → 코스튬]에서 제작할 수
                있습니다.
              </p>
              <p>
                * [소환 → 코스튬 소환]을 통해 이미 소유 중인 코스튬을 중복으로
                획득한 경우, 마법 실타래를 획득합니다. * 의상은 마법 실타래 등의
                재료를 사용하여 제작할 수 있습니다. 제작에 필요한 재료의 상세
                정보는 게임 내에서 확인 부탁드립니다.
              </p>
            </article>
            <div className="mt-[80px]">
              <ScrollTop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <HeaderPage
        title="인더섬 뉴스"
        content={() => (
          <>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</>
        )}
        bgImg={() => (
          <img
            src="/public/img/bg-community-news.png"
            srcSet="/public/img/bg-community-news@2x.png 2x,
                    /public/img/bg-community-news@3x.png 3x"
            className="object-cover w-full h-full absolute object-center"
          />
        )}
      />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
