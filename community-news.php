<?php
$layout = 'community-news';
include 'head.php';
include 'header.php';
?>
<!-- [react components] pageHeader -->
<div class="h-[720px] relative">
  <?php
  $name = 'header-community-news';
  $ext = 'webp';
  $className = 'object-cover w-full h-full absolute object-center';
  include './components/imgSet.php';
  ?>
  <div class="bg-black bg-opacity-30 object-cover absolute w-full h-full"></div>
  <div class="relative z-10 w-full h-full flex items-center">
    <div class="container mx-auto">
      <div class="text-center">
        <div class="font-TmoneyRoundWind text-[62px] text-white font-extrabold">인더섬 뉴스</div>
        <div class="font-Pretendard text-[18px] text-white">인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-0 py-[35px] w-full z-20">
    <div class="max-w-[1920px] mx-auto">
      <div class="flex gap-x-[13px]">
        <div class="text-white">
          <i class="icon-volume-off text-[24px]"></i>
          <i class="icon-volume text-[24px]"></i>
        </div>
        <div class="text-white">
          <span class="font-Pretendard">방탄소년단 - DYNAMITE</span>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
include 'footer.php';
?>