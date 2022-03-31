<?php
$layout = 'community-news';
include 'head.php';
include 'header.php';
?>
<!-- [react components] pageHeader -->
<div class="tw-h-[720px] tw-relative">
  <?php
  $name = 'header-community-news';
  $ext = 'webp';
  $className = 'tw-object-cover tw-w-full tw-h-full tw-absolute tw-object-center';
  include './components/imgSet.php';
  ?>
  <div class="tw-bg-black tw-bg-opacity-30 tw-object-cover tw-absolute tw-w-full tw-h-full"></div>
  <div class="tw-relative tw-z-10 tw-w-full tw-h-full tw-flex tw-items-center">
    <div class="tw-container tw-mx-auto">
      <div class="tw-text-center">
        <div class="tw-font-TmoneyRoundWind tw-text-[62px] tw-text-white tw-font-extrabold">인더섬 뉴스</div>
        <div class="tw-font-Pretendard tw-text-[18px] tw-text-white">인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</div>
      </div>
    </div>
  </div>
  <div class="tw-absolute tw-bottom-0 tw-py-[35px] tw-w-full tw-z-20">
    <div class="tw-max-w-[1920px] tw-mx-auto">
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
<div>
  <div class="tw-container tw-mx-auto">
    <section class="tw-mt-[70px] tw-mb-[80px]">
      <div class="tw-grid tw-grid-cols-2 tw-gap-[9px] tw-mb-[80px]">
        <?php
        for ($i = 0; $i < 2; $i++) {
          $pin = true;
          include './components/item.php';
        } ?>
        <?php
        for ($i = 0; $i < 4; $i++) {
          $pin = false;
          include './components/item.php';
        } ?>
      </div>
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
    </section>
  </div>
  <div class="tw-h-px tw-bg-[#e6eaf2]"></div>
  <div class="tw-mt-[87px]">
    <div class="tw-container tw-mx-auto">
      <!-- [react components] content -->
      <div>
        <!-- header -->
        <div class="tw-mb-[80px]">
          <h1 class="tw-text-[42px] tw-tracking-[-2.1px] tw-font-bold tw-font-TmoneyRoundWind tw-leading-tight tw-mb-[15px]">핀 표시 있는 게시물은 고정 게시물</h1>
          <time>2022년 4월 13일 오후 5시 53분</time>
        </div>
        <!-- content -->
        <article class="tw-prose lg:tw-prose-2xl tw-max-w-none">
          <p>
            BTS와 함께 하는 힐링 섬 라이프 인더섬 with BTS입니다.<br />
            3/10(목) 업데이트 상세 내용을 안내해 드립니다.
          </p>
          <p>
            다가온 봄, 설레는 새학기를 맞아 버터 교복 코스튬이 추가됩니다.<br />
            더불어 봄맞이 출석부 및 포탈 기능 추가! 이벤트와 각종 상품을 준비했습니다.
          </p>
          <p>
            입주민 여러분의 많은 관심 부탁드리며,<br />
            자세한 내용은 아래에서 확인하시기 바랍니다.
          </p>
          <p><strong>■ 3/10(목) 업데이트 상세 내용 안내</strong></p>
          <p>
            • 신규 코스튬 추가
            - 클래스 별 신규 코스튬 ‘이세계 교복’이 추가되며, 해당 코스튬 관련 도감 및 마스터가 함께 추가됩니다.<br />
            - 이세계 교복 코스튬은 [소환 → 코스튬 소환]에서 지정된 확률로 소환하거나, 상품 구매 또는 [캐릭터 → 코스튬]에서<br />제작할 수 있습니다.
          </p>
          <p>
            * [소환 → 코스튬 소환]을 통해 이미 소유 중인 코스튬을 중복으로 획득한 경우, 마법 실타래를 획득합니다.<br />
            * 의상은 마법 실타래 등의 재료를 사용하여 제작할 수 있습니다.<br />제작에 필요한 재료의 상세 정보는 게임 내에서 확인 부탁드립니다.
          </p>
          <img src="https://picsum.photos/1200/400.webp" alt="">
          <p class="tw-text-red-500"> * 상기 참고 이미지는 안내를 위해 연출된 이미지이므로, 게임 내 실제 모습과 다를 수 있습니다.</p>
          <p>
            • 신규 코스튬 추가
            - 클래스 별 신규 코스튬 ‘이세계 교복’이 추가되며, 해당 코스튬 관련 도감 및 마스터가 함께 추가됩니다.
            - 이세계 교복 코스튬은 [소환 → 코스튬 소환]에서 지정된 확률로 소환하거나, 상품 구매 또는 [캐릭터 → 코스튬]에서
            제작할 수 있습니다.
          </p>
          <p>
            * [소환 → 코스튬 소환]을 통해 이미 소유 중인 코스튬을 중복으로 획득한 경우, 마법 실타래를 획득합니다.
            * 의상은 마법 실타래 등의 재료를 사용하여 제작할 수 있습니다.
            제작에 필요한 재료의 상세 정보는 게임 내에서 확인 부탁드립니다.
          </p>
        </article>
        <div class="tw-relative tw-h-px tw-bg-[#e6eaf2] tw-mt-[80px]">
          <a href="#" class="tw-w-[80px] tw-h-[80px] tw-bg-[#f4f6fa] tw-flex tw-items-center tw-justify-center tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2 tw-rounded-full">
            <i class="icon-arrow tw-rotate-180 tw-text-[28px] tw-text-[#c3cad5]"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
<?php
include 'footer.php';
?>