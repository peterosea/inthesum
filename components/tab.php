<?php
if (empty($tabList))
  return;
?>

<!-- tab components -->
<div id="tab" class="tw-font-TmoneyRoundWind tw-font-bold mb-[10px]">
  <div class="sm:tw-hidden">
    <?php
    $options = $tabList;
    include './components/select.php';
    ?>
  </div>
  <div class="tw-hidden sm:tw-block">
    <nav class="tw-relative tw-z-0 tw-grid tw-grid-flow-col tw-divide-x tw-divide-[#e6eaf2] tw-border-x tw-border-[#e6eaf2]" aria-label="Tabs">
      <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
      <?php
      foreach ($tabList as $key => $tab) {
        if ($key === 0) {
          echo <<<EOD
                <a href="#" class="tw-leading-none tw-flex tw-items-center tw-justify-center tw-min-w-0 tw-text-[18px] tw-text-primary tw-group tw-relative tw-overflow-hidden tw-bg-white tw-py-[21px] tw-px-4 tw-text-center hover:tw-bg-gray-50 focus:tw-z-10" aria-current="page">
                  <span>$tab</span>
                  <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-x-0 tw-top-0 tw-h-px"></span>
                  <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-y-0 tw-right-0 tw-w-px tw-h-full"></span>
                  <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-px"></span>
                  <span aria-hidden="true" class="tw-bg-primary tw-absolute tw-inset-y-0 tw-left-0 tw-w-px tw-h-full"></span>
                </a>
EOD;
        } else {
          echo <<<EOD
                <a href="#" class="tw-leading-none tw-flex tw-items-center tw-justify-center tw-min-w-0 tw-text-[18px] tw-text-[#c3cad5] tw-hover:text-gray-700 tw-group tw-relative tw-overflow-hidden tw-bg-white tw-py-[21px] tw-px-4 tw-text-center hover:tw-bg-gray-50 focus:tw-z-10" aria-current="page">
                  <span>$tab</span>
                  <span aria-hidden="true" class="tw-bg-[#e6eaf2] tw-absolute tw-inset-x-0 tw-top-0 tw-h-px"></span>
                  <span aria-hidden="true" class="tw-bg-[#e6eaf2] tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-px"></span>
                </a>
EOD;
        }
      } ?>
    </nav>
  </div>
</div>