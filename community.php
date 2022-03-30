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
  <div class="absolute bottom-0 py-[35px] w-full z-20">
    <div class="max-w-[1920px] mx-auto">
      <div class="flex gap-x-[13px]">
        <div class="text-white">
          <i class="icon-volume-off text-[24px]"></i>
          <i class="icon-volume text-[24px]"></i>
        </div>
        <div class="text-white">
          <span class="font-Pretendard">방탄소년단 - DYNAMITE</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content">
  <?php
  $sectionHeader = <<<EOD
    <div class="flex gap-x-[30px] justify-between font-Pretendard">
      <div>
        <h1 class="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold leading-[0.69]">자주 묻는 질문</h1>
        <div class="text-[18px]">
          <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>
        </div>
      </div>
      <div>
        <i class="icon-arrow2 text-[31px] rotate-180 inline-block"></i>
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
      <?php echo $sectionHeader ?>
      <!-- tab components -->
      <div class="mt-[40px]">
        <div>
          <div id="tab" class="font-TmoneyRoundWind font-bold mb-[10px]">
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                <?php foreach (['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'] as $key => $tab) {
                  echo <<<EOD
                    <option>$tab</option>
EOD;
                } ?>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="relative z-0 flex divide-x divide-gray-200 border-x" aria-label="Tabs">
                <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                <?php
                foreach (['전체', '게임플레이', '회원', '홈페이지', '결제', '이벤트'] as $key => $tab) {
                  if ($key === 0) {
                    echo <<<EOD
                    <a href="#" class="text-[18px] text-primary group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center hover:bg-gray-50 focus:z-10" aria-current="page">
                      <span>$tab</span>
                      <span aria-hidden="true" class="bg-primary absolute inset-x-0 top-0 h-px"></span>
                      <span aria-hidden="true" class="bg-primary absolute inset-y-0 right-0 w-px h-full"></span>
                      <span aria-hidden="true" class="bg-primary absolute inset-x-0 bottom-0 h-px"></span>
                      <span aria-hidden="true" class="bg-primary absolute inset-y-0 left-0 w-px h-full"></span>
                    </a>
EOD;
                  } else {
                    echo <<<EOD
                    <a href="#" class="text-[18px] text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center hover:bg-gray-50 focus:z-10">
                      <span>$tab</span>
                      <span aria-hidden="true" class="bg-gray-200 absolute inset-x-0 top-0 h-px"></span>
                      <span aria-hidden="true" class="bg-gray-200 absolute inset-x-0 bottom-0 h-px"></span>
                    </a>
EOD;
                  }
                } ?>
              </nav>
            </div>
          </div>
          <div id="tabContent">
            <ul class="tabs">
              <?php for ($i = 0; $i < 5; $i++) {
                echo <<<EOD
                <li class="border-b border-[#e6eaf2] overflow-hidden">
                  <input class="accordion hidden" type="checkbox" id="accordion-$i">
                  <label for="accordion-$i" class="tab-label cursor-pointer flex justify-between gap-x-4 py-[30px] items-center bg-white hover:bg-gray-50">
                    <div class="flex gap-x-[16px]">
                      <div class="w-[55px] h-[55px] bg-primary rounded-full text-white font-TmoneyRoundWind font-bold items-center justify-center flex text-[24px]">
                        <span class="leading-1">Q</span>
                      </div>
                      <div>
                        <div class="font-TmoneyRoundWind font-bold text-primary">게임플레이</div>
                        <div class="text-[20px] font-Pretendard font-bold tracking-[-0.07px]">서버 목록이 보이지 않거나 방화벽 오류 메시지가 떠요</div>
                      </div>
                    </div>
                    <div>
                      <div class="text-[28px]">
                        <i class="icon-arrow text-[#CECECE]"></i>
                      </div>
                    </div>
                  </label>
                  <div class="tab-content">
                    <div class="prose">
                      <p>
                        1.0.1 패치가 업데이트 되었어요.<br/>
                        1.0.1 버전에서는 칼테일바와 미니게임 3종(슬롯, 룰렛, 주사위)가 추가되었어요.<br/>
                        미니게임을 하다보면 대박의 찬스가 있을지도?
                      </p>
                    </div>
                  </div>
                </li>
EOD;
              } ?>
            </ul>
            <!-- <div class="hidden">tab contnet</div>
            <div class="hidden">tab contnet</div>
            <div class="hidden">tab contnet</div>
            <div class="hidden">tab contnet</div>
            <div class="hidden">tab contnet</div> -->
          </div>
        </div>
        <script>

        </script>
        <style>
          input:checked.accordion~.tab-content {
            max-height: 6.4em;
            padding-bottom: 30px;
          }

          .tab-content {
            max-height: 0;
            transition: .5s;
          }
        </style>
      </div>
    </section>
    <section class="mt-[91px] mb-[120px]">
      <!-- [react components] banner -->
      <div class="h-[230px] relative rounded-[12px] overflow-hidden">
        <img src="https://picsum.photos/1200/230.webp?grayscale?random=$i" class="object-cover w-full h-full absolute object-center" alt="">
        <div class="relative z-10 w-full h-full flex items-center">
          <div class="container mx-auto">
            <div class="text-center">
              <div class="font-TmoneyRoundWind text-[20px] text-white font-extrabold">COMING SOON</div>
              <div class="font-TmoneyRoundWind text-[36px] text-white font-extrabold tracking-[-1.08px]">함께 만들어요! 인더섬</div>
              <div class="font-Pretendard text-[16px] text-white tracking-[-0.48px]">보다 좋은 서비스를 위해 준비중이에요. 빠른 시일내에 오픈할께요</div>
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