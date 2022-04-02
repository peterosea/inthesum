<?php
$layout = 'main';
include 'head.php';
include 'header.php';
include './components/header-page.php';
?>
<div class="content">
  <?php
  $sectionHeader = <<<EOD
    <div class="tw-flex tw-gap-x-[30px] tw-justify-between tw-font-Pretendard">
      <div>
        <h1 class="tw-text-[36px] tw-mb-[15px] tw-font-TmoneyRoundWind tw-font-bold tw-leading-[0.69]">자주 묻는 질문</h1>
        <div class="tw-text-[18px]">
          <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>
        </div>
      </div>
      <div>
        <i class="icon-arrow2 tw-text-[31px] tw-rotate-180 tw-inline-block"></i>
      </div>
    </div>
EOD;
  ?>
  <div class="tw-container tw-mx-auto">
    <section class="tw-my-[96px]">
      <?php echo $sectionHeader ?>
      <div class="tw-grid tw-grid-cols-2 tw-gap-[99px] tw-mt-[60px]">
        <?php
        for ($i = 0; $i < 6; $i++) {
          include './components/item.php';
        } ?>
      </div>
    </section>
    <section class="tw-my-[96px]">
      <?php echo $sectionHeader ?>
      <div class="tw-mt-[40px]">
        <?php
        $tabList = ['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'];
        include './components/tab.php';
        ?>
        <?php include './components/accordion.php'; ?>
      </div>
    </section>
    <section class="tw-mt-[91px] tw-mb-[120px]">
      <!-- [react components] banner -->
      <div class="tw-h-[230px] tw-relative tw-rounded-[12px] tw-overflow-hidden">
        <img src="https://picsum.photos/1200/230.webp?grayscale?random=$i" class="tw-object-cover tw-w-full tw-h-full tw-absolute tw-object-center" alt="">
        <div class="tw-relative tw-z-10 tw-w-full tw-h-full tw-flex tw-items-center">
          <div class="tw-container tw-mx-auto">
            <div class="tw-text-center">
              <div class="tw-font-TmoneyRoundWind tw-text-[20px] tw-text-white tw-font-extrabold">COMING SOON</div>
              <div class="tw-font-TmoneyRoundWind tw-text-[36px] tw-text-white tw-font-extrabold tw-tracking-[-1.08px]">함께 만들어요! 인더섬</div>
              <div class="tw-font-Pretendard tw-text-[16px] tw-text-white tw-tracking-[-0.48px]">보다 좋은 서비스를 위해 준비중이에요. 빠른 시일내에 오픈할께요</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<?php
include 'footer.php';
?>