import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const CharacterSlide = () => (
  <Swiper
    className="characterSlide"
    modules={[Pagination]}
    speed={2500}
    slidesPerView={1}
    mousewheel={true}
    spaceBetween={50}
    threshold={100}
    pagination={{ type: 'progressbar' }}
    breakpoints={{
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}
  >
    {[
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
      {
        title: '뷔',
        time: '10분전',
        content: `
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는\n
        칵테일바를 오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      `,
        characterImg: 'v',
      },
    ].map((c, index) => (
      <SwiperSlide>
        <div className="relative px-[20px] h-full" key={`key-${index}`}>
          <div className="relative z-10">
            <div className="text-[30px] font-extrabold leading-[1.4em] text-left">
              뷔
              <span className="w-[39px] relative inline-block top-[6px]">
                <img src="./public/img/new@3x.png" alt="new" />
              </span>
              <span className="text-[14px] font-normal text-[#999]">
                10분전
              </span>
            </div>
            <div className="px-[20px] mt-[21px]">
              <p>
                훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는 칵테일바를
                오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
              </p>
            </div>
            <div className="flex gap-x-[10px] mt-[27px] ml-[20px]">
              <div className="w-[50px] h-[50px] rounded-[20px] overflow-hidden relative">
                <img
                  src="https://via.placeholder.com/300"
                  className="absolute object-cover"
                />
                {/* <!--가로 세로 동일 정사각형 이미지 50px 등록 무관 -- /> */}
              </div>
              <div className="w-[50px] h-[50px] rounded-[20px] overflow-hidden relative">
                <img
                  src="https://via.placeholder.com/300"
                  className="absolute object-cover"
                />
                {/* <!--가로 세로 동일 정사각형 이미지 50px 등록 무관 -- /> */}
              </div>
              <span className="opacity-20 font-black text-[32px] top-[5px] font-Pretendard">
                ...
              </span>
            </div>
            <img
              className="!h-[180px] !w-auto absolute right-0"
              src="./public/img/img-bts-v@3x.png"
              alt="슈가 캐릭터"
            />
          </div>
          <img
            src="/public/img/img-baloon-full@3x.png"
            alt="ballon"
            className="absolute top-0 !w-auto !h-auto left-1/2 -translate-x-1/2"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default CharacterSlide;
