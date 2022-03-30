<?php
echo <<<EOD
  <img src="/public/img/$name.$ext"
      srcset="/public/img/$name@2x.$ext 2x,
              /public/img/$name@3x.$ext 3x"
              class="$className">
EOD;
