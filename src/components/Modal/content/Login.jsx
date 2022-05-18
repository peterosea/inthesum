import React from 'react';

const Login = () => {
  return (
    <div className="bg-white p-[30px] text-center rounded-[20px]">
      <div>
        <img
          className="h-[105px] mx-auto"
          src="/img/img-introduce-logo-full.png"
          srcSet="/img/img-introduce-logo-full@2x.png 2x,
                /img/img-introduce-logo-full@3x.png 3x"
        />
      </div>
      <div className="mt-[21px]">
        <div className="font-Pretendard font-bold text-[24px]">
          로그인할 계정을 <br className="sm:hidden" />
          선택해주세요
        </div>
        <div className="mt-[7px]">게임에서 연동한 계정만 가능합니다.</div>
      </div>
      <div className="mt-[40px] grid gap-y-[10px]">
        <div>
          <button className="relative py-[20px] px-[22.5px] rounded-[8px] bg-black w-full font-Pretendard font-bold text-white">
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] flex justify-center">
              <img
                src="/img/logo-apple-w.webp"
                srcSet="/img/logo-apple-w@2x.webp 2x,
                    /img/logo-apple-w@3x.webp 3x"
              />
            </div>
            <span>Apple ID 로그인</span>
          </button>
        </div>
        <div>
          <button className="relative p-[20px] rounded-[8px] bg-[#f4f6fa] w-full font-Pretendard font-bold text-[#54575d]">
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] flex justify-center">
              <img
                src="/img/logo-google-w.webp"
                srcSet="/img/logo-google-w@2x.webp 2x,
                    /img/logo-google-w@3x.webp 3x"
              />
            </div>
            <span>Google 로그인</span>
          </button>
        </div>
        <div>
          <button className="relative p-[20px] rounded-[8px] bg-[#0be6c1] w-full font-Pretendard font-bold text-white">
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] flex justify-center">
              <img
                src="/img/3707.webp"
                srcSet="/img/3707@2x.webp 2x,
                    /img/3707@3x.webp 3x"
              />
            </div>
            <span>Weverse 로그인</span>
          </button>
        </div>
        <div>
          <button className="relative p-[20px] rounded-[8px] bg-[#385898] w-full font-Pretendard font-bold text-white">
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] flex justify-center">
              <img
                src="/img/logo-facebook-w.webp"
                srcSet="/img/logo-facebook-w@2x.webp 2x,
                    /img/logo-facebook-w@3x.webp 3x"
              />
            </div>
            <span>facebook 로그인</span>
          </button>
        </div>
        <div>
          <button className="relative p-[20px] rounded-[8px] bg-[#1d9bf0] w-full font-Pretendard font-bold text-white">
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] flex justify-center">
              <img
                src="/img/logo-twitter-w.webp"
                srcSet="/img/logo-twitter-w@2x.webp 2x,
                    /img/logo-twitter-w@3x.webp 3x"
              />
            </div>
            <span>Twitter 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
