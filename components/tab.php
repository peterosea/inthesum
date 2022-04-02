<!-- tab components -->
<div class="tw-mt-[40px]">
  <div>
    <div id="tab" class="tw-font-TmoneyRoundWind tw-font-bold mb-[10px]">
      <div class="sm:tw-hidden">
        <label for="tabs" class="tw-sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="tw-block tw-w-full focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-border-gray-300 tw-rounded-md">
          <?php foreach (['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'] as $key => $tab) {
            echo <<<EOD
                    <option>$tab</option>
EOD;
          } ?>
        </select>
      </div>
      <div class="tw-hidden sm:tw-block">
        <nav class="tw-relative tw-z-0 tw-flex tw-divide-x tw-divide-gray-200 tw-border-x" aria-label="Tabs">
          <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
          <?php
          foreach (['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'] as $key => $tab) {
            if ($key === 0) {
              echo <<<EOD
                    <a href="#" class="tw-text-[18px] tw-text-primary tw-group tw-relative tw-min-w-0 tw-flex-1 tw-overflow-hidden tw-bg-white tw-py-4 tw-px-4 tw-text-center hover:tw-bg-gray-50 focus:tw-z-10" aria-current="page">
                      <span>$tab</span>
                      <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-x-0 tw-top-0 tw-h-px"></span>
                      <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-y-0 tw-right-0 tw-w-px tw-h-full"></span>
                      <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-px"></span>
                      <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-y-0 tw-left-0 tw-w-px tw-h-full"></span>
                    </a>
EOD;
            } else {
              echo <<<EOD
                    <a href="#" class="tw-text-[18px] tw-text-gray-500 tw-hover:text-gray-700 tw-group tw-relative tw-min-w-0 tw-flex-1 tw-overflow-hidden tw-bg-white tw-py-4 tw-px-4 tw-text-center hover:tw-bg-gray-50 focus:tw-z-10">
                      <span>$tab</span>
                      <span aria-hidden="true" class="tw-bg-gray-200 tw-absolute tw-inset-x-0 tw-top-0 tw-h-px"></span>
                      <span aria-hidden="true" class="tw-bg-gray-200 tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-px"></span>
                    </a>
EOD;
            }
          } ?>
        </nav>
      </div>
    </div>
    <div id="tabContent">
      <ul class="tabs">
        <?php for ($i = 0; $i < 5; $i++) {
          echo <<<EOD
                <li class="tw-border-b tw-border-[#e6eaf2] tw-overflow-hidden">
                  <input class="accordion tw-hidden" type="checkbox" id="accordion-$i">
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
                        <i class="icon-arrow text-[#CECECE]"></i>
                      </div>
                    </div>
                  </label>
                  <div class="tab-content">
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
    </div>
  </div>
  <script>

  </script>
  <style>
    input:checked.accordion~.tab-content {
      max-height: calc(6.4em + (40px * 2));
    }

    .tab-content {
      max-height: 0;
      transition: .5s;
      overflow: hidden
    }
  </style>
</div>