export const card = [
  {
    title: '4월 14일(목) 오전 4시 업데이트 점검 안내',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample1.png"
        srcSet="/img/img-sample1@2x.png 2x,
            /img/img-sample1@3x.png 3x"
      />
    ),
  },
  {
    title: '인더섬 스크린샷 이벤트',
    content: () => (
      <p>
        인더섬의 아름다운 풍경을 남겨보세요.
        <br />
        총 100분을 선정해 다이나마이트 코스튬을 선물로 드립니다.
        <br />
        많은 참여 부탁드립니다!
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample2.png"
        srcSet="/img/img-sample2@2x.png 2x,
            /img/img-sample2@3x.png 3x"
      />
    ),
  },
  {
    title: '푸시 알림 이벤트',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample3.png"
        srcSet="/img/img-sample3@2x.png 2x,
            /img/img-sample3@3x.png 3x"
      />
    ),
  },
  {
    title: '1.0.2 커플 베이스캠프 업데이트',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample4.png"
        srcSet="/img/img-sample4@2x.png 2x,
            /img/img-sample4@3x.png 3x"
      />
    ),
  },
  {
    title: '1.0.1 패치 업데이트 안내',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample5.png"
        srcSet="/img/img-sample5@2x.png 2x,
            /img/img-sample5@3x.png 3x"
      />
    ),
  },
  {
    title: '인더섬 with BTS 전세계 오픈',
    content: () => (
      <p>
        새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을
        실시합니다.
        <br />
        해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이..
      </p>
    ),
    thumbnailUrl: () => (
      <img
        src="/img/img-sample6.png"
        srcSet="/img/img-sample6@2x.png 2x,
            /img/img-sample6@3x.png 3x"
      />
    ),
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
        src="/img/rm.png"
        srcSet="/img/rm@2x.png 2x,
                /img/rm@3x.png 3x"
      />
    ),
    thumbnail: [
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
      },
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
        type: 'video',
      },
    ],
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
          src="/img/jung-kook.png"
          srcSet="/img/jung-kook@2x.png 2x,
                  /img/jung-kook@3x.png 3x"
          alt="JungKook"
        />
        <img
          className="h-[180px]"
          src="/img/rm2.png"
          srcSet="/img/rm2@2x.png 2x,
                  /img/rm2@3x.png 3x"
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
        src="/img/jimin.png"
        srcSet="/img/jimin@2x.png 2x,
                /img/jimin@3x.png 3x"
        alt="jimin"
      />
    ),
    thumbnail: [
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
      },
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
        type: 'video',
      },
    ],
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
        src="/img/suga.png"
        srcSet="/img/suga@2x.png 2x,
                /img/suga@3x.png 3x"
        alt="RM"
      />
    ),
    thumbnail: [
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
      },
      {
        img: () => (
          <img
            className="h-[180px] w-auto"
            src="/img/thumb.png"
            srcSet="/img/thumb@2x.png 2x,
              /img/thumb@3x.png 3x"
          />
        ),
        type: 'video',
      },
    ],
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
        src="/img/v.png"
        srcSet="/img/v@2x.png 2x,
                /img/v@3x.png 3x"
        alt="슈가"
      />
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
        src="/img/jimin.png"
        srcSet="/img/jimin@2x.png 2x,
                /img/jimin@3x.png 3x"
        alt="jimin"
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
        src="/img/suga.png"
        srcSet="/img/suga@2x.png 2x,
                /img/suga@3x.png 3x"
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
        src="/img/v.png"
        srcSet="/img/v@2x.png 2x,
                /img/v@3x.png 3x"
        alt="슈가"
      />
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
        src="/img/jimin.png"
        srcSet="/img/jimin@2x.png 2x,
                /img/jimin@3x.png 3x"
        alt="jimin"
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
        src="/img/suga.png"
        srcSet="/img/suga@2x.png 2x,
                /img/suga@3x.png 3x"
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
        src="/img/v.png"
        srcSet="/img/v@2x.png 2x,
                /img/v@3x.png 3x"
        alt="슈가"
      />
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
        src="/img/jimin.png"
        srcSet="/img/jimin@2x.png 2x,
                /img/jimin@3x.png 3x"
        alt="jimin"
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
        src="/img/suga.png"
        srcSet="/img/suga@2x.png 2x,
                /img/suga@3x.png 3x"
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
        src="/img/v.png"
        srcSet="/img/v@2x.png 2x,
                /img/v@3x.png 3x"
        alt="슈가"
      />
    ),
  },
];

export const DevlogBgImg = () => (
  <img
    src="/img/devlog-introduce-visual.png"
    srcSet="/img/devlog-introduce-visual@2x.png 2x,
        /img/devlog-introduce-visual@3x.png 3x"
  />
);

export const BtsBgImg = () => (
  <img
    src="/img/devlog-with-bts-introduce-visual.png"
    srcSet="/img/devlog-with-bts-introduce-visual@2x.png 2x,
        /img/devlog-with-bts-introduce-visual@3x.png 3x"
  />
);
