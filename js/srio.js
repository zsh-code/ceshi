$(function () {
    // 页面滚动到某位置显示
    let rty = $(".rty").offset().top;
    $(window).scroll(function () {
      if ($(document).scrollTop() >= 200 && $(document).scrollTop() < rty - 600) {
        $(".ycdh").fadeIn();

      } else {
        $(".ycdh").fadeOut();
      }
    });
    //鼠标放上变图片
    $(".ycdh ul li").hover(
      function () {
        // over
        $(this).find(".bv").css("zIndex", "1");
      },
      function () {
        // out
        $(this).find(".bv").css("zIndex", "-1");
      }
    );
    //返回顶部
    $(".ycdh .back").click(function () {
      $("body,html").stop().animate({
        scrollTop: 0,
      });
    });
  });
  