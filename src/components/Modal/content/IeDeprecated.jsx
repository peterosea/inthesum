import React from 'react';

const IeDeprecated = () => {
  return (
    <>
      <div className="text-primary font-Pretendard text-[36px] font-bold mb-[30px]">
        인터넷익스플로러
        <br />
        지원 종료 안내
      </div>
      <div>
        <p className="mb-[10px]">
          <b className="text-primary">
            2022년 6월 15일 인터넷익스플로러 지원 종료
          </b>
          로 인해 저희 웹사이트는 해당 브라우저에서 접속이 어렵습니다.
        </p>
        <p>
          아래 최신 브라우저중 하나를 다운로드 하신 후 설치하셔서 다시
          접속해주시길 바랍니다.
        </p>
      </div>
      <div className="grid divide-y mt-[40px] border-y border-[#d6d9e0] divider-[#d6d9e0]">
        <div className="flex py-[17px] items-center">
          <div className="flex items-center gap-x-[12px]">
            <img
              src="/img/chrome.png"
              srcSet="/img/chrome@2x.png 2x,
                      /img/chrome@3x.png 3x"
              className="h-[30px] w-auto"
            />
            <span className="font-bold font-Pretendard text-[#54575d]">
              Google Chrome 다운로드
            </span>
          </div>
          <a href="#" className="ml-auto">
            <i className="icon-download text-[#c3cad5] text-[20px]"></i>
          </a>
        </div>
        <div className="flex py-[17px] items-center">
          <div className="flex items-center gap-x-[12px]">
            <img
              src="/img/edge.png"
              srcSet="/img/edge@2x.png 2x,
                      /img/edge@3x.png 3x"
              className="h-[30px] w-auto"
            />
            <span className="font-bold font-Pretendard text-[#54575d]">
              Microsoft Edge 다운로드
            </span>
          </div>
          <a href="#" className="ml-auto">
            <i className="icon-download text-[#c3cad5] text-[20px]"></i>
          </a>
        </div>
        <div className="flex py-[17px] items-center">
          <div className="flex items-center gap-x-[12px]">
            <img
              src="/img/whale.png"
              srcSet="/img/whale@2x.png 2x,
                      /img/whale@3x.png 3x"
              className="h-[30px] w-auto"
            />
            <span className="font-bold font-Pretendard text-[#54575d]">
              NAVER Whale 다운로드
            </span>
          </div>
          <a href="#" className="ml-auto">
            <i className="icon-download text-[#c3cad5] text-[20px]"></i>
          </a>
        </div>
        <div className="flex py-[17px] items-center">
          <div className="flex items-center gap-x-[12px]">
            <img
              src="/img/firefox.png"
              srcSet="/img/firefox@2x.png 2x,
                      /img/firefox@3x.png 3x"
              className="h-[30px] w-auto"
            />
            <span className="font-bold font-Pretendard text-[#54575d]">
              Mozilla Firefox 다운로드
            </span>
          </div>
          <a href="#" className="ml-auto">
            <i className="icon-download text-[#c3cad5] text-[20px]"></i>
          </a>
        </div>
        <div className="flex py-[17px] items-center">
          <div className="flex items-center gap-x-[12px]">
            <img
              src="/img/opera.png"
              srcSet="/img/opera@2x.png 2x,
                      /img/opera@3x.png 3x"
              className="h-[30px] w-auto"
            />
            <span className="font-bold font-Pretendard text-[#54575d]">
              Opera 다운로드
            </span>
          </div>
          <a href="#" className="ml-auto">
            <i className="icon-download text-[#c3cad5] text-[20px]"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default IeDeprecated;
