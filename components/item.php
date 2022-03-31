<div class="tw-p-[30px] tw-relative tw-group">
  <div class="tw-grid tw-grid-cols-[140px,auto] tw-gap-x-[30px] tw-relative tw-z-10">
    <div class="tw-shadow-[20px_20px_40px_rgb(0,0,0,0.1)]">
      <div class="tw-relative tw-w-full tw-h-full">
        <img class="tw-absolute tw-object-cover tw-object-center tw-w-full tw-h-full" src="https://picsum.photos/500/500.webp?grayscale?random=<?php echo rand(0, 100); ?>" alt="">
        <?php if ($pin) {
          echo <<<EOD
          <div class="tw-absolute tw-flex tw-items-center tw-justify-center tw-text-[19.2px] tw-top-0 tw-left-0 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-w-[40px] tw-h-[40px] tw-rounded-full pin tw-bg-gradient-to-r tw-from-[#7833DC] tw-to-[#CF52E8] to-blue-500">
            <i class="icon-pin tw-text-white"></i>
          </div>
EOD;
        } ?>
      </div>
    </div>
    <div class="tw-font-Pretendard tw-flex tw-flex-col">
      <div class="w-full">
        <div class="tw-text-[24px] tw-tracking-[-0.72px] tw-line-clamp-1 tw-mb-[12px]">4월 14일(목) 오전 4시 업데이트 점검 안내</div>
        <div class="tw-text-[#54575d] tw-mb-[18px] tw-line-clamp-3">
          <p>
            새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을 실시합니다.<br>
            해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이 새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을 실시합니다.<br>
            해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이
          </p>
        </div>
      </div>
      <div class="tw-text-[14px] tw-text-[#9ba0a8]">2022년 4월 12일 오후 6시 53분</div>
    </div>
  </div>
  <div class="tw-absolute tw-w-full tw-h-full tw-rounded-[10px] tw-bg-[#f4f6fa] tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 <?php if (!$pin) echo 'tw-hidden' ?> tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity"></div>
</div>
<style>
  .pin {
    filter: drop-shadow(6px 6px 12px rgba(188, 131, 255, 0.322));
  }
</style>