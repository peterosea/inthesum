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
        <!-- pc 버전 -->
        <div class="wrap-box">
          <div class="logo">
            <a href="/">
              <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
            </a>
          </div>
          <nav id="gnb">
            <ul>
              <li>
                <div class="menu-wrap">
                  <a href="#1">개임소개</a>
                  <div class="submenu">
                    <div class="items">
                      <a href="#">소개영상</a>
                    </div>
                    <div class="items">
                      <a href="#">주요스토리</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-wrap">
                  <a href="#2">인더섬 개발일지</a>
                  <div class="submenu">
                    <div class="items">
                      <a href="#">with BTS</a>
                    </div>
                    <div class="items">
                      <a href="#">개발 PD 노트</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-wrap">
                  <a href="#">made by ARMY</a>
                  <div class="submenu">
                    <div class="items">
                      <a href="#">인더섬 가이드</a>
                    </div>
                    <div class="items">
                      <a href="#">BTS 의상실</a>
                    </div>
                    <div class="items">
                      <a href="#">주간 인더섬 매거진</a>
                    </div>
                    <div class="items">
                      <a href="#">BTS 의뢰 컨텐츠</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="menu-wrap">
                  <a href="#">커뮤니티</a>
                  <div class="submenu">
                    <div class="items">
                      <a href="#">공지사항</a>
                    </div>
                    <div class="items">
                      <a href="#">설문공간</a>
                    </div>
                    <div class="items">
                      <a href="#">FAQ</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div class="right-menu">
            <ul>
              <li>
                <a href="#">
                  <img src="./public/img/icon-gnb-my@3x.png" alt="account img">
                </a>
              </li>
              <li>
                <a href="#">
                  <img class="logout" src="./public/img/icon-logout@3x.png" alt="logout img">
                </a>
              </li>
              <li>
                <div class="lang">
                  <select>
                    <option value="KR">KR</option>
                    <option value="JP" class="on">JP</option>
                    <option value="US">US</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- moblie 버전 -->
        <div class="bottom-menu">
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
    <div class="main-banner"></div>
    <!-- content : 콘텐츠 영역 -->
    <div class="content">
        <section class="content_inner">
            <?php
                // 01. jQgrid 테이블
                //include 'components/test.php';
                // main contents
                include 'components/main.php';
            ?>
        </section>
        <!-- //.content_inner -->
    </div>
    <!-- //.content -->

<?php
include 'footer.php';
?>
