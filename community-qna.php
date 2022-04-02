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
      <?php include './components/tab.php'; ?>
      <div class="tw-mt-[40px]">
        <?php include './components/pagination.php'; ?>
      </div>
    </section>
  </div>
</div>
<?php
include 'footer.php';
?>