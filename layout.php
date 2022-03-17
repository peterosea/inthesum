<?php
$layout = 'main';
include 'header.php';
?>
    <header>
      <div class="m-inner">
        <div class="logo">
          <a href="/">
            <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
          </a>
        </div>
        <!-- open menu btn -->
        <a href="#" class="gnb-toggle-btn"><span></span></a>
      </div>
      <div id="menu-wrap" class="inner">
        <!-- close menu btn -->
        <a href="#" class="gnb-toggle-btn close"></a>
        <div class="logo">
          <a href="/">
            <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
          </a>
        </div>
        <nav id="gnb">
          <ul>
            <li>
              <a href="#1">개임소개</a>
            </li>
            <li>
              <a href="#2">인더섬 개발일지</a>
            </li>
            <li>
              <a href="#">made by ARMY</a>
            </li>
            <li>
              <a href="#">커뮤니티</a>
            </li>
          </ul>
        </nav>
        <!-- pc 버전 -->
        <div class="right-menu">
          <ul>
            <li>
              <a href="#">
                <img src="./public/img/icon-gnb-my@3x.png" alt="account img">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./public/img/icon-logout@3x.png" alt="logout img">
              </a>
            </li>
            <li>
              <div class="lang">
                <select>
                  <option value="KR">KR</option>
                  <option value="JP">JP</option>
                  <option value="US">US</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <!-- moblie 버전 -->
        <div class="bottom-menu" style="display: none;">
          <ul>
            <li>
              <a href="#">
                <img src="./public/img/icon-gnb-my@3x.png" alt="account img">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./public/img/icon-logout@3x.png" alt="logout img">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="main-banner">
      <img src="./public/img/img-main-top@3x.png" alt="mainbanner01">
    </div>
    <!-- content : 콘텐츠 영역 -->
    <div class="content">
        <section class="content_inner">
            <?php
                // 01. jQgrid 테이블
                include 'components/test.php';
            ?>
        </section>
        <!-- //.content_inner -->
    </div>
    <!-- //.content -->

<?php
include 'footer.php';
?>
