import { useWindowSize } from 'usehooks-ts';

const magazline = [
  {
    vol: 'Vol.3',
    imageUrl: '/img/img-magazine1@3x.png',
    name: 'Fishing Life',
    date: '2022.03.02',
    spec: () => (
      <>
        <p>커버스토리: 인더섬에서 바다낚시하기</p>
        <p>주요기사: 칵테일 만들기</p>
      </>
    ),
  },
  {
    vol: 'Vol.2',
    imageUrl: '/img/img-magazine2@3x.png',
    name: 'Healing Camp',
    date: '2022.02.23',
    spec: () => (
      <>
        <p>커버스토리: 베이스캠프 건설</p>
        <p>주요기사: 요리 레시피</p>
      </>
    ),
  },
  {
    vol: 'Vol.1',
    imageUrl: '/img/img-magazine3@3x.png',
    name: 'Grand Open',
    date: '2022.02.16',
    spec: () => (
      <>
        <p>커버스토리: 전세계 전격 오픈</p>
        <p>주요기사: 튜토리얼</p>
      </>
    ),
  },
  {
    vol: 'Vol.1',
    imageUrl: '/img/img-magazine3@3x.png',
    name: 'Grand Open',
    date: '2022.02.16',
    spec: () => (
      <>
        <p>커버스토리: 전세계 전격 오픈</p>
        <p>주요기사: 튜토리얼</p>
      </>
    ),
  },
];

export default function MagazineSlide() {
  const { width } = useWindowSize();

  // 두줄처리
  const gap = width >= 1280 ? 60 : 30;
  const itemWidth = width >= 1280 ? 270 : 160;
  const itemCount = width >= 1280 ? magazline.length : magazline.length / 2;

  return (
    <div className="overflow-x-scroll snap-mandatory pl-cpx pt-[33px] pb-[60px] xl:py-[90px] xl:px-0">
      <div
        className="grid grid-flow-col auto-cols-max xl:grid- gap-y-[50px]"
        style={{
          width: itemCount * itemWidth + gap * (itemCount - 1) + 'px',
          columnGap: `${gap}px`,
        }}
      >
        {magazline.map(({ vol, name, date, spec, imageUrl }, index) => {
          return (
            <div
              key={`index-${index}`}
              className="snap-start w-[160px] xl:w-[270px]"
            >
              <div className="shadow-[5px_5px_40px_rgb(0,0,0,0.25)]">
                <img src={imageUrl} alt="" />
              </div>
              <div className="mt-[36px] leading-none font-TmoneyRoundWind font-extrabold">
                <div className="text-[16p] xl:text-[18px] text-[#bc83ff]">
                  {vol}
                </div>
                <div className="mt-[8px] text-black text-[20px] xl:text-[30px]">
                  {name}
                </div>
                <div className="mt-[10px] text-black text-[14px]">{date}</div>
                <div className="hidden xl:block mt-[20px] font-Pretendard font-normal text-[#6f737a] leading-[1.4]">
                  {spec()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
