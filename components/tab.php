<!-- tab components -->
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