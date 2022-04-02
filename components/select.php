<label for="tabs" class="tw-sr-only">Select a tab</label>
<select id="tabs" name="tabs" class="tw-leading-none tw-block tw-w-full focus:tw-outline-none focus:tw-shadow-none focus:tw-ring-0 focus:tw-border-primary tw-border-[#e6eaf2] tw-font-Pretendard tw-text-[14px] tw-pl-[26px] tw-py-[21px] tw-text-[#333] focus:tw-text-black">
  <?php foreach ($options as $key => $option) {
    echo <<<EOD
    <option>$option</option>
EOD;
  } ?>
</select>