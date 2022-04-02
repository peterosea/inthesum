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
  <?php if (empty($isHeaderPage)) $isHeaderPage = false; ?>
  <div id="dt-menu-wrap" class="tw-top-0 <?php if ($isHeaderPage) echo 'tw-bg-black' ?>">
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
              <span id="lang-txt">KR</span>
              <ul class="lang-menu">
                <li>KR</li>
                <li>JP</li>
                <li>US</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<?php if ($isHeaderPage) { ?>
  <div class="tw-pt-[110px]"></div>
<?php } ?>