import React from 'react';

const AccountError = () => {
  return (
    <div className="bg-white p-[30px] text-center rounded-[20px]">
      <div className="font-Pretendard">
        <div className="mt-[5.7px] text-[#ff5353] text-[24px]  font-bold">
          계정 오류 알림
        </div>
        <div className="mt-[7px]">가입되지 않은 계정입니다.</div>
        <div className="mt-[30px]">
          <button className="btn bg-black text-white w-full font-bold">확인</button>
        </div>
      </div>
    </div>
  );
};

export default AccountError;
