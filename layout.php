<?php
$layout = 'main';
include 'header.php';
?>
    <header>
      <!-- mobile 버전 -->
      <div id="mobile-menu-wrap">
        <div class="overlay"></div>
        <h1 class="logo">
          <a href="/">
            <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
          </a>
        </h1>
        <!-- open menu btn -->
        <a href="#" class="gnb-toggle-btn"><span></span></a>
        <div class="m-menu">
          <!-- close menu btn -->
          <a href="#" class="gnb-toggle-btn close"></a>
          <h1 class="logo">
            <a href="/">
              <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
            </a>
          </h1>
          <nav id="m-gnb">
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
          <div class="info-group">
            <a href="#">로그아웃</a>
            <div class="lang" dir="ltr">
              <label for="select-lang">언어 : </label>
              <select id="select-lang" class="select-lang">
                <option value="kor">한국어</option>
                <option value="eng">영어</option>
                <option value="jan">일본어</option>
              </select>
            </div>
          </div>
          <div class="account-info">
            <span>마이페이지</span>
            <a href="#">
              <img src="./public/img/icon-gnb-my@3x.png" alt="account img">
            </a>
          </div>
        </div>
      </div>
      <!-- desktop 버전 -->
      <div id="dt-menu-wrap">
        <div class="dt-menu">
          <h1 class="logo">
            <a href="/">
              <img src="./public/img/logo-inthesum-small@3x.png" alt="inthesum logo">
            </a>
          </h1>
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
      </div>
    </header>
    <div class="main-banner">
      <div id="main-banner-swiper" class="swiper charactor">
        <div class="swiper-wrapper">
          <div class="swiper-slide" data-slide-type="img" style="background-image: url(./public/img/img-main@3x.png)">
            <div class="slider-text">
              <img src="./public/img/bts_logo.png" alt="BTS">
              <p class="title">HEADING ISLAND LIFE</p>
              <p>3DPuzzle Game width BTS character and space decoration</p>
            </div>
          </div>
          <div class="swiper-slide" data-slide-type="video">
            <!-- chrome 정책으로 영상 자동 재생 시 muted 상태로 autoplay 재생가능 참고문서: https://developer.chrome.com/blog/autoplay/-->
            <video id="demo" class="video-js" muted controls preload="auto" poster="./public/video/poster.png" data-setup='{}'>
              <source src="./public/video/movie-sample.mp4" type="video/mp4">
              <source src="./public/video/movie-sample.ogg" type="video/ogg">
            </video>
          </div>
          <div class="swiper-slide" data-slide-type="img" style="background-image: url(./public/img/img-video-thumb@3x.png)">
            <div class="slider-text">
              <img src="./public/img/bts_logo.png" alt="BTS">
              <p class="title">HEADING ISLAND LIFE</p>
              <p>3DPuzzle Game width BTS character and space decoration</p>
            </div>
          </div>
        </div>
        <div class="mb-button-next"></div>
        <div class="mb-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
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
