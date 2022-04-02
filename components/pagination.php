<div class="tw-text-[#c3cad5] tw-flex tw-gap-x-[20px] tw-items-center tw-justify-center">
  <a href="#"><i class="icon-paging-first tw-text-[12px]"></i></a>
  <a href="#"><i class="icon-paging-prev tw-text-[12px]"></i></a>
  <a href="#" class="tw-font-Pretendard tw-font-bold tw-inline-flex flex tw-items-center tw-justify-center tw-w-[36px] tw-h-[36px] tw-rounded-full tw-bg-[#822ce5] tw-text-white">1</a>
  <?php
  for ($i = 2; $i < 6; $i++) {
    echo <<<EOD
    <a href="#" class="tw-font-Pretendard tw-font-bold tw-inline-flex flex tw-items-center tw-justify-center tw-w-[36px] tw-h-[36px] tw-rounded-full">$i</a>
    EOD;
  } ?>
  <a href="#"><i class="icon-paging-next tw-text-[12px]"></i></a>
  <a href="#"><i class="icon-paging-last tw-text-[12px]"></i></a>
</div>