<!-- [react components] pageHeader -->
<div class="tw-h-[720px] tw-relative">
  <?php
  if (empty($name)) {
    $name = 'header-community';
    $ext = 'webp';
  }
  $className = 'tw-object-cover tw-w-full tw-h-full tw-absolute tw-object-center';
  include './components/imgSet.php';
  ?>
  <div class="tw-bg-black tw-bg-opacity-30 tw-object-cover tw-absolute tw-w-full tw-h-full"></div>
  <div class="tw-relative tw-z-10 tw-w-full tw-h-full tw-flex tw-items-center">
    <div class="tw-container tw-mx-auto">
      <div class="tw-text-center">
        <div class="tw-font-TmoneyRoundWind tw-text-[62px] tw-text-white tw-font-extrabold">커뮤니티</div>
        <div class="tw-font-Pretendard tw-text-[18px] tw-text-white">인더섬의 소식과 궁금한 사항을 전해드려요</div>
      </div>
    </div>
  </div>
  <div class="tw-absolute tw-bottom-0 tw-py-[35px] tw-w-full tw-z-20">
    <div class="tw-max-w-[1920px] tw-px-[50px] tw-mx-auto">
      <div class="tw-flex tw-gap-x-[13px]">
        <div class="tw-text-white">
          <i class="icon-volume-off tw-text-[24px]"></i>
          <i class="icon-volume tw-text-[24px]"></i>
        </div>
        <div class="tw-text-white">
          <span class="tw-font-Pretendard">방탄소년단 - DYNAMITE</span>
        </div>
      </div>
    </div>
  </div>
</div>