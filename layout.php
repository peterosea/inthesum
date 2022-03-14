<?php
$layout = 'main';
include 'header.php';
?>
    <header>
      <div class="inner">gnb area</div>
    </header>
    <!-- content : 콘텐츠 영역 -->
    <div class="content">
        <section class="content_inner">
            <?php
                // 01. jQgrid 테이블
                include 'components/content.php';
            ?>
        </section>
        <!-- //.content_inner -->
    </div>
    <!-- //.content -->

<?php
include 'footer.php';
?>
