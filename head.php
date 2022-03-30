<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>inthesum</title>
  <!-- peterosea CSS Style -->
  <link rel="stylesheet" href="./public/css/video_control.css">
  <link rel="stylesheet" href="./public/css/main_slider.min.css">
  <link rel="stylesheet" href="./public/css/style.min.css">
  <link rel="stylesheet" href="./public/css/main_slider.min.css">
  <link rel="stylesheet" href="./public/css/style.min.css">
  <link rel="stylesheet" href="./public/css/scss/style.css">
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  <script>
    tailwind.config = {
      theme: {
        screens: {
          '#sm': {
            max: '639px'
          },
          '#md': {
            max: '767px'
          },
          '#lg': {
            max: '1023px'
          },
          '#xl': {
            max: '1199px'
          },
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
        extend: {}
      }
    }
  </script>
</head>

<body class="<?php echo $layout; ?>">
  <!-- PageContainer -->
  <div class="page_container">