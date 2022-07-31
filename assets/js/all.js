"use strict";

$(document).ready(function () {
  $("span.mdi-menu").click(function () {
    $(this).toggleClass("mdi-menu");
    $(this).toggleClass("mdi-close");
    $("nav.top-nav-sm").toggleClass("active");
  });
  $("span.mdi-checkbox-blank-outline").click(function () {
    $(this).toggleClass("mdi-checkbox-blank-outline");
    $(this).toggleClass("mdi-checkbox-marked-outline");
  });
  $("ul.product-category-list>li").click(function () {
    if (!$(this).hasClass("current-item")) {
      $("li.product-category-item").removeClass("current-item");
      $(this).addClass("current-item");

      if ($("li.optical").hasClass("current-item")) {
        $("div.product-content-banner-image.image-3").addClass("image-1");
        $("div.product-content-banner-image.image-3").removeClass("image-3");
        $("div.product-content-banner-image.image-4").addClass("image-2");
        $("div.product-content-banner-image.image-4").removeClass("image-4");

        if (!$("div.optical").hasClass("active")) {
          $("div.optical").toggleClass("active");
          $("div.sunglasses").toggleClass("active");
        }
      }

      if ($("li.sunglasses").hasClass("current-item")) {
        $("div.product-content-banner-image.image-1").addClass("image-3");
        $("div.product-content-banner-image.image-1").removeClass("image-1");
        $("div.product-content-banner-image.image-2").addClass("image-4");
        $("div.product-content-banner-image.image-2").removeClass("image-2");

        if (!$("div.sunglasses").hasClass("active")) {
          $("div.optical").toggleClass("active");
          $("div.sunglasses").toggleClass("active");
        }
      }
    }
  });
});
//# sourceMappingURL=all.js.map
