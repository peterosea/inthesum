export default function MagazineSlide() {
  return (
    <div className="flex grow gap-x-[60px]">
      {[
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
      ].map(({ vol, name, date, spec, imageUrl }, index) => {
        return (
          <div key={`index-${index}`}>
            <div className="shadow-[5px_5px_40px_rgb(0,0,0,0.25)]">
              <img src={imageUrl} alt="" />
            </div>
            <div className="mt-[36px] leading-none font-TmoneyRoundWind font-extrabold">
              <div className="text-[18px] text-[#bc83ff]">{vol}</div>
              <div className="mt-[8px] text-black text-[30px]">{name}</div>
              <div className="mt-[10px] text-black text-[14px]">{date}</div>
              <div className="mt-[20px] font-Pretendard font-normal text-[#6f737a] leading-[1.4]">
                {spec()}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
