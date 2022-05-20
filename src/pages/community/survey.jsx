import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import FloatArea from '../../components/FloatArea';
import CheckBtn from '../../components/Btn/CheckBtn';

const LabelInput = ({ children }) => {
  const [active, setActive] = useState(false);

  console.log(active);
  return (
    <label className="flex gap-x-[16px] items-center p-[20px] rounded-full bg-[#f4f6fa]">
      <input
        type="checkbox"
        className="hidden"
        onChange={(e) => setActive(e.currentTarget.checked)}
      />
      <CheckBtn isChecked={active} />
      <div className="text-[24px] leading-[32px]">{children}</div>
    </label>
  );
};
const Main = () => {
  return (
    <>
      <section className="py-[30px] xl:py-[80px] bg-[#f4f6fa]">
        <div className="container mx-auto">
          {/* header */}
          <div className="grid grid-cols-[1fr,auto] grid-rows-2 grid-flow-col">
            <div className="flex items-center">
              <div>진행중</div>
              <div>RM의 S/S 신상 의상 투표 여러분의 PICK은?</div>
            </div>
            <div>2022.06.01 ~ 2022.06.30</div>
            <div className="row-span-2">
              <div>링크</div>
            </div>
          </div>
          <div>
            <div>
              게임 내 BTS 캐릭터 중 멤버 중 실물과 가장 비슷하다고 생각하는
              멤버는 누구인가요?
              <br />
              설문에 참여한 분들 중 추첨을 통해 빵빵한 선물을 드립니다.
            </div>
            <div className="overflow-hidden rounded-[12px]">
              <img src="https://picsum.photos/1920/1080.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[30px] xl:mt-[70px]">
        <div className="container mx-auto">
          <div className="text-primary">
            아래 질문 2가지는 게임 내 BTS 캐릭터에 관한 질문입니다.
            <br />
            실물과 가장 비슷하다고 생각되는 멤버를 선택하되, 없으면 체크하지
            않으셔도 됩니다.
          </div>
          <div className="mt-[50px]">
            <div>복수선택 가능</div>
            <div>인더섬에 추가되었으면 하는 컨텐츠를 골라주세요.</div>
            <form>
              <div className="flex flex-col gap-y-[20px]">
                <LabelInput>
                  섬안에서도 콘서트를 보고싶다! BTS 캐릭터 콘서트
                </LabelInput>
                <LabelInput>바다로 나가고 싶어요. 항해 기능</LabelInput>
                <LabelInput>함께 건물을 만들고 싶어요. 협동 기능</LabelInput>
                <LabelInput>친구와 대화하고 싶어요. 커뮤니티 기능</LabelInput>
              </div>
              <div className="w-full h-px bg-[#e6eaf2] my-[60px]"></div>
              <div>답변을 적어주세요.</div>
              <div>인더섬의 발전을 위해 건의사항을 적어주세요.(선택)</div>
              <textarea
                className="w-full px-[41px] py-[31px] rounded-[12px]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="답변을 간단하게 작성해주세요.\nTextarea 여러줄 표시"
              ></textarea>
            </form>
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
        title="설문공간"
        content={() => (
          <>함께 만들어나가는 인더섬 with BTS, 소중한 의견을 들려주세요.</>
        )}
        bgImg={() => (
          <img
            src="/img/bg-community.webp"
            srcSet="/img/bg-community@2x.webp 2x,
                    /img/bg-community@3x.webp 3x"
            className="object-cover w-full h-full absolute object-center"
          />
        )}
      />
      <div className="font-Pretendard mb-[25px] xl:mb-[120px] relative">
        <Main />
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
