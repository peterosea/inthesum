<?php
$layout = 'main';
include 'head.php';
include 'header.php';
?>
<!-- [react components] pageHeader -->
<div class="h-[720px] relative">
  <?php
  $name = 'header-community';
  $ext = 'webp';
  $className = 'object-cover w-full h-full absolute object-center';
  include './components/imgSet.php';
  ?>
  <div class="bg-black bg-opacity-30 object-cover absolute w-full h-full"></div>
  <div class="relative z-10 w-full h-full flex items-center">
    <div class="container mx-auto">
      <div class="text-center">
        <div class="font-TmoneyRoundWind text-[62px] text-white font-extrabold">커뮤니티</div>
        <div class="font-Pretendard text-[18px] text-white">인더섬의 소식과 궁금한 사항을 전해드려요</div>
      </div>
    </div>
  </div>
</div>

<div class="content">
  <?php
  $sectionHeader = <<<EOD
    <div class="flex gap-x-[30px] justify-between font-Pretendard">
      <div>
        <h1 class="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold">인더섬 뉴스</h1>
        <div class="text-[18px]">
          <p>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</p>
        </div>
      </div>
      <div>
        arrow
      </div>
    </div>
EOD;
  ?>
  <div class="container mx-auto">
    <section class="my-[96px]">
      <?php echo $sectionHeader ?>
      <div class="grid grid-cols-2 gap-[99px] mt-[60px]">
        <?php
        for ($i = 0; $i < 6; $i++) {
          // item
          echo <<<EOD
          <div class="grid grid-cols-[140px,1fr] gap-x-[30px]">
            <div class="shadow-[20px_20px_40px_rgb(0,0,0,0.1)]">
              <div class="relative w-full h-full">
                <img class="absolute object-cover object-center w-full h-full" src="https://picsum.photos/500/500.webp?grayscale?random=$i" alt="">
              </div>
            </div>
            <div class="font-Pretendard flex flex-col">
              <div>
                <div class="text-[24px] tracking-[-0.72px] line-clamp-1 whitespace-nowrap mb-[12px]">4월 14일(목) 오전 4시 업데이트 점검 안내</div>
                <div class="text-[#54575d] mb-[18px] line-clamp-3">
                  <p>
                    새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을 실시합니다.<br>
                    해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이 새로운 버전 업데이트를 위해 6월 4일(목) 오전 4시부터 9시까지 점검을 실시합니다.<br>
                    해당 시간동안은 이용이 불가능하며, 이용중 해당 시간이
                  </p>
                </div>
              </div>
              <div class="text-[14px] text-[#9ba0a8]">2022년 4월 12일 오후 6시 53분</div>
            </div>
          </div>
EOD;
        } ?>
      </div>
    </section>
    <section class="my-[96px]">

    </section>
  </div>
</div>
<?php
include 'footer.php';
?>