export const card = [
  {
    time: '4월 14일(목) 오전 4시 업데이트 점검 안내',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample1@3x.png',
  },
  {
    time: '인더섬 스크린샷 이벤트',
    content: () => (
      <p>
        인더섬의 아름다운 풍경을 남겨보세요.
        <br />
        총 100분을 선정해 다이나마이트 코스튬을 선물로 드립니다.
        <br />
        많은 참여 부탁드립니다!
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample2@3x.png',
  },
  {
    time: '푸시 알림 이벤트',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample3@3x.png',
  },
  {
    time: '1.0.2 커플 베이스캠프 업데이트',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample4@3x.png',
  },
  {
    time: '1.0.1 패치 업데이트 안내',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample5@3x.png',
  },
  {
    time: '인더섬 with BTS 전세계 오픈',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: '/public/img/img-sample6@3x.png',
  },
];

export const character = [
  {
    name: 'BTS',
    time: '10분전',
    content: () => (
      <p>
        인더섬 with BTS 오픈!!
        <br />
        제목은 두줄까지 표시를 기본으로…
      </p>
    ),
    characterImg: () => (
      <img
        className="h-[180px] w-auto"
        src="/public/img/rm.png"
        srcSet="/public/img/rm@2x.png 2x,
                /public/img/rm@3x.png 3x"
      />
    ),
  },
  {
    name: 'RM,정국',
    time: '10분전',
    content: () => (
      <p>
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는 칵테일바를
        오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      </p>
    ),
    characterImg: () => (
      <>
        <img
          className="h-[180px] absolute z-10 top-0 right-[76px]"
          src="/public/img/jung-kook.png"
          srcset="/public/img/jung-kook@2x.png 2x,
                  /public/img/jung-kook@3x.png 3x"
          alt="JungKook"
        />
        <img
          className="h-[180px]"
          src="/public/img/rm2.png"
          srcset="/public/img/rm2@2x.png 2x,
                  /public/img/rm2@3x.png 3x"
          alt="RM"
        />
      </>
    ),
  },
  {
    name: '지민',
    time: '10분전',
    content: () => (
      <p>
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는 칵테일바를
        오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      </p>
    ),
    characterImg: () => (
      <img
        className="h-[180px]"
        src="/public/img/rm2.png"
        srcset="/public/img/rm2@2x.png 2x,
                /public/img/rm2@3x.png 3x"
        alt="RM"
      />
    ),
  },
  {
    name: '슈가',
    time: '1시간',
    content: () => (
      <p>
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는 칵테일바를
        오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      </p>
    ),
    characterImg: () => (
      <img
        className="h-[180px]"
        src="/public/img/suga.png"
        srcset="/public/img/suga@2x.png 2x,
                /public/img/suga@3x.png 3x"
        alt="RM"
      />
    ),
  },
  {
    name: '뷔',
    time: '10분전',
    content: () => (
      <p>
        훗~ 이번에는 인더섬의 과일로 카테일을 만들 수 있는 칵테일바를
        오픈했어요, 무알콜 칵테일도 있으니 걱정은 놉!
      </p>
    ),
    characterImg: () => (
      <img
        className="h-[180px] w-auto"
        src="/public/img/img-bts-v@3x.png"
        alt="슈가 캐릭터"
      />
    ),
  },
];

export const BgImg = () => (
  <img
    src="/public/img/devlog-introduce-visual.png"
    srcSet="/public/img/devlog-introduce-visual@2x.png 2x,
        /public/img/devlog-introduce-visual@3x.png 3x"
    className="object-cover w-full h-full absolute object-center"
  />
);
