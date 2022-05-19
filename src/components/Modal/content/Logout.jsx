import React from 'react';

const Logout = () => {
  return (
    <div className="bg-white p-[30px] text-center rounded-[20px]">
      <div className="font-Pretendard">
        <div className="mt-[5.7px] text-black text-[24px]  font-bold">
        로그아웃 하시겠습니까?
        </div>
        <div className="mt-[7px]">저장하지 않은 정보는 삭제됩니다.</div>
        <div className="mt-[30px] flex gap-x-[10px]">
          <button className="btn bg-black text-white w-full font-bold flex-1">확인</button>
          <button className="btn bg-[#9ba0a8] text-white w-full font-bold flex-1">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
