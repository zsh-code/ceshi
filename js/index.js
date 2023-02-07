$(function () {
  // 页面滚动到某位置显示
  let rty = $(".rty").offset().top;
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 600 && $(document).scrollTop() < rty - 580) {
      $(".ycdh").fadeIn();
      $(".ks").fadeIn();
    } else {
      $(".ycdh").fadeOut();
      $(".ks").fadeOut();
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
  //   左侧快捷导航跳转
  $(".ks ul li").click(function () {
    let gund = $(".floor .w").eq($(this).index()).offset().top;
    console.log(gund);
    $("body,html").stop().animate({
      scrollTop: gund,
    });
    
  });
  //返回顶部
  $(".ycdh .back").click(function () {
    $("body,html").stop().animate({
      scrollTop: 0,
    });
  });
  
});
