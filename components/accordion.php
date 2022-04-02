<ul class="tabs">
  <?php for ($i = 0; $i < 5; $i++) {
    echo <<<EOD
          <li class="tw-border-b tw-border-[#e6eaf2] tw-overflow-hidden">
            <input class="accordion-input tw-hidden" type="checkbox" id="accordion-$i">
            <label for="accordion-$i" class="tw-tab-label tw-cursor-pointer tw-flex tw-justify-between tw-gap-x-4 tw-py-[30px] tw-items-center tw-bg-white hover:tw-bg-gray-50">
              <div class="tw-flex tw-gap-x-[16px]">
                <div class="tw-w-[55px] tw-h-[55px] tw-bg-primary tw-rounded-full tw-text-white tw-font-TmoneyRoundWind tw-font-bold tw-items-center tw-justify-center tw-flex tw-text-[24px]">
                  <span class="tw-leading-1">Q</span>
                </div>
                <div>
                  <div class="tw-font-TmoneyRoundWind tw-font-bold tw-text-primary">게임플레이</div>
                  <div class="tw-text-[20px] tw-font-Pretendard tw-font-bold tw-tracking-[-0.07px]">서버 목록이 보이지 않거나 방화벽 오류 메시지가 떠요</div>
                </div>
              </div>
              <div>
                <div class="tw-text-[28px]">
                  <i class="icon-arrow tw-text-[#CECECE] tw-inline-block"></i>
                </div>
              </div>
            </label>
            <div class="accordion-content">
              <div class="tw-bg-[#f4f6fa] tw-p-[40px] tw-flex tw-gap-x-[20px]">
                <div>
                  <div class="tw-w-[55px] tw-h-[55px] tw-bg-black tw-rounded-full tw-text-white tw-font-Pretendard tw-font-bold tw-items-center tw-justify-center tw-flex tw-text-[24px]">
                    <span class="tw-leading-1">A</span>
                  </div>
                </div>
                <div class="tw-prose">
                  <p>
                    1.0.1 패치가 업데이트 되었어요.<br/>
                    1.0.1 버전에서는 칼테일바와 미니게임 3종(슬롯, 룰렛, 주사위)가 추가되었어요.<br/>
                    미니게임을 하다보면 대박의 찬스가 있을지도?
                  </p>
                </div>
              </div>
            </div>
          </li>
EOD;
  } ?>
</ul>
<style>
  input:checked.accordion-input~.accordion-content {
    max-height: calc(6.4em + (40px * 2));
  }

  input:checked.accordion-input~label .icon-arrow {
    opacity: 1;
    transform: rotate(180deg);
    color: black;
  }

  .accordion-content {
    max-height: 0;
    transition: .5s;
    overflow: hidden
  }
</style>