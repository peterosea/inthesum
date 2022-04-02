<?php
$layout = 'community-qna';
include 'head.php';
include 'header.php';
$name = 'header-community-news';
$ext = 'webp';
include './components/header-page.php';
?>
<div class="content">
  <div class="tw-container tw-mx-auto">
    <section class="tw-mt-[80px]">
      <div>
        <?php
        $tabList = ['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'];
        include './components/tab.php';
        ?>
        <?php include './components/accordion.php'; ?>
      </div>
      <div class="tw-mt-[40px]">
        <?php include './components/pagination.php'; ?>
      </div>
    </section>
  </div>
</div>
<?php
include 'footer.php';
?>