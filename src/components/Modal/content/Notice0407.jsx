import React from 'react';

const Notice0407 = () => {
  return (
    <div className='bg-[#F4F6FA] p-[40px] pt-[46px] pb-[70px] text-left  border-t-[3px] border-primary'>
      <div className="text-[#803ad3] font-Pretendard text-[36px] font-bold mb-[30px]">
        2022.04.07(목)
        <br />
        서비스 점검 안내
      </div>
      <div className="font-Pretendard">
        <p>
          BTS와 함께하는 힐링 섬라이프
          <br />
          “인더섬 with BTS”입니다.
          <br />
        </p>
        <br />
        <p>
          4/7(목) 업데이트 상세 내용을 안내해 드립니다.
          <br />
          이번 업데이트를 통해 ‘봄맞이 요리대회’ 에피소드의 신규 명성 퀘스트와
          에피소드 던전에 신규 난이도가 오픈됩니다.
          <br />
          그리고 이마젠 탐험에 거대 이마젠이 등장하는 이벤트가 진행되니,거대
          이마젠을 처치하고 관련 이벤트에도 꼭 참여하세요!
        </p>
        <p>
          소환 상점에서 희귀 ★4 리무 픽업 소환 이벤트가 진행되며, 각종 신규
          상품도 상점에 추가되므로 많은 관심 부탁드립니다.
        </p>
        <br />
        <p>자세한 내용은 공지사항에서 확인하시기 바랍니다.</p>
      </div>
      <div className="mt-[23px] mb-[25px]">
        <img
          src="https://picsum.photos/1200/230.webp?grayscale?random=$i"
          alt=""
        />
      </div>
      <div className="mt-[30px]">
        <button className="bg-[#803ad3] py-[17px] px-[20px] pr-[17px] text-white flex items-center gap-x-[8px] font-Pretendard font-bold text-[14px]">
          <span>자세히 보기</span>
          <i className="icon-arrow-right-w text-[11px] inline-block"></i>
        </button>
      </div>
    </div>
  );
};

export default Notice0407;
