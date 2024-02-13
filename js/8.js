$(document).ready(function () {
  $('.navigation').append('<area shape="poly" coords="224,82, 339,149, 339,279, 224,346, 109,279, 109,149" href="#close" alt="Jammy�s Folio ui designer &amp; developer" class="logo">')

  $('.navigation').append('<area shape="poly" coords="147,-5, 219,40, 219,120, 147,160, 74,120, 74,40" href="#!/page_Home" alt="" class="nav1">')

  $('.navigation').append('<area shape="poly" coords="73,129, 145,174, 145,254, 73,294, 0,254, 0,174" href="#!/page_About" alt="" class="nav2">')

  $('.navigation').append('<area shape="poly" coords="147,261, 219,307, 219,387, 147,427, 74,387, 74,307" href="#!/page_Talk" alt="" class="nav3">')

  $('.navigation').append('<area shape="poly" coords="300,261, 372,307, 372,387, 300,427, 228,387, 228,307" href="#!/page_Message" alt="" class="nav4">')

  $('.navigation').append('<area shape="poly" coords="379,129, 451,174, 451,254, 379,294, 306,254, 306,174" href="#!/page_Blog" alt="" class="nav5">')

  $('.navigation').append('<area shape="poly" coords="300,-5, 372,40, 372,120, 300,160, 228,120, 228,40" href="#!/page_Time" alt="" class="nav6">'); $('.map_back').append('<area shape="poly" coords="73,-5, 145,40, 145,120, 73,160, 0,120, 0,40" href="#close" alt="" id="back">')

  $('.map_logo').append('<area shape="poly" coords="115,-7, 230,60, 230,190, 115,257, 0,190, 0,60" href="#close" alt="Jammy�s Folio ui designer &amp; developer" class="logo">')

  var n; $('.navigation area').hover(function () {
    n = $(this).attr('class'); fl2 = false; if (n == 'logo') { $('#logo img').stop().animate({ width: 270, height: 294, left: 5, top: 5 }, 600, 'easeOutBack') } else {
      n = parseInt(n.slice(-1))

      $('#nav' + n + '> img').css({ zIndex: 8 }).stop().animate({ width: 165, height: 177, left: 5, top: 5 }, 600, 'easeOutBack', function () { $(this).css({ zIndex: 7 }) })

      $('#nav' + n + '> div').stop(true, true).animate({ height: 'show' }, function () { })
    }
  }, function () {
    var n = $(this).attr('class'); if (n == 'logo') { $('#logo img').stop().animate({ width: 230, height: 254, left: 25, top: 25 }, 600, 'easeOutBack') } else {
      n = parseInt(n.slice(-1)); $('#nav' + n + '> img').stop().animate({ width: 145, height: 157, left: 15, top: 15 }, 600, 'easeOutBack', function () { $(this).css({ zIndex: 6 }) })

      $('#nav' + n + '> div').stop(true, true).delay(200).animate({ height: 'hide' }, function () { })
    }
  })

  $('.logo').hover(function () { $('#logo img').stop().animate({ width: 270, height: 294, left: 5, top: 5 }, 600, 'easeOutBack') }, function () { $('#logo img').stop().animate({ width: 230, height: 254, left: 25, top: 25 }, 600, 'easeOutBack') })

  $('#back, .back a').hover(function () { $('.back img').stop().animate({ width: 165, height: 177, left: 5, top: 5 }, 600, 'easeOutBack') }, function () { $('.back img').stop().animate({ width: 145, height: 157, left: 15, top: 15 }, 600, 'easeOutBack') })

  $('.submenu li').hover(function () { $(this).find('img').stop().animate({ height: 40, top: 0 }, 600, 'easeOutCirc') }, function () { $(this).find('img').stop().animate({ height: 0, top: 20 }, 600, 'easeOutCirc'); })

  $('.submenu').stop().animate({ height: 'hide' }, 0)

  $('.submenu').hover(function () {
    $('#nav' + n + '> img').css({ zIndex: 8 }).stop().animate({ width: 165, height: 177, left: 5, top: 5 }, 600, 'easeOutBack', function () { $(this).css({ zIndex: 7 }) })

    $('#nav' + n + '> div').stop(true, true).animate({ height: 'show' }, function () { })
  }, function () { fl = false; $('.navigation area').mouseleave() })

  $('.link1, .social a').each(function () {
    var color = $(this).css('color')

    $(this).prepend('<span></span>')

    $(this).find('span').css({ background: color })
  })

  $('.link1, .social a').hover(function () { $(this).find('span').css({ width: 0, opacity: 1 }).stop().animate({ width: '100%' }) }, function () { $(this).find('span').stop().animate({ opacity: 0 }) })

  $('#icons .img_act').css({ opacity: 0 })

  $('#icons a').hover(function () { $(this).find('.img_act').stop().animate({ opacity: 1 }) }, function () { $(this).find('.img_act').stop().animate({ opacity: 0 }) })

  $('.blog').cycle({ fx: 'scrollVert', pager: '.pagin', activePagerClass: 'active', timeout: false, speed: 800, prev: '.prev', next: '.next' }); if ($.browser.msie && $.browser.version == 8) {
    var num = 0; $('.pagin a').each(function (num) { $(this).data({ num: num }) })

    $('.pagin a').eq(num).addClass('active')

    $('.pagin a').click(function () {
      num = $(this).data('num')

      $(this).addClass('active').siblings().removeClass('active')
    })

    $('.prev').click(function () {
      if (num != 0) { num = num - 1 } else { num = $('.pagin a').length - 1 }

      $('.pagin a').eq(num).addClass('active').siblings().removeClass('active')
    })

    $('.next').click(function () {
      if (num != $('.pagin a').length - 1) { num = num + 1 } else { num = 0 }

      $('.pagin a').eq(num).addClass('active').siblings().removeClass('active')
    })
  } else {
    $('.prev, .next').hover(function () { $(this).stop().animate({ color: '#fff', backgroundColor: '#3e3435' }) }, function () { $(this).stop().animate({ color: '#3e3435', backgroundColor: '#ececec' }) })

    $('.pagin .active').css({ background: 'none', fontWeight: 'bold' })

    $('.pagin a').click(function () { $(this).stop().css({ background: 'none', fontWeight: 'bold', color: '#1b1b1b' }).siblings().css({ fontWeight: 'normal' }).stop().animate({ color: '#1b1b1b', backgroundColor: '#ececec' }) })

    $('.pagin a').hover(function () { if (!$(this).hasClass('active')) { $(this).stop().animate({ color: '#fff', backgroundColor: '#3e3435' }) } }, function () { if (!$(this).hasClass('active')) { $(this).stop().animate({ color: '#1b1b1b', backgroundColor: '#ececec' }) } })

    $('.prev, .next').click(function () { $('.pagin .active').stop().css({ background: 'none', fontWeight: 'bold', color: '#1b1b1b' }).siblings().css({ fontWeight: 'normal' }).stop().animate({ color: '#1b1b1b', backgroundColor: '#ececec' }) })
  }
}); $(window).load(function () {
  var fl_cont = true; $('a, area').click(function () { if (!fl_cont) { return false } })

  $('.scroll').cScroll({ duration: 700, step: 63, trackCl: 'track', shuttleCl: 'shuttle' })

  $('#menu > li').each(function (num) { $(this).data({ left: $(this).css('left'), top: $(this).css('top') }) })

  var content = $('#content'), nav = $('.menu'); nav.navs({ useHash: true })

  content.tabs({
    actFu: function (_) {
      if (_.prev && _.curr) {
        fl_cont = false; _.prev.find('.pad').stop().animate({ opacity: 0 }, function () {
          $(this).css({ display: 'none' }); _.prev.find('.back').stop().animate({ opacity: 0 }, function () { $(this).css({ top: 212, left: 163, opacity: 1, display: 'none' }); $(this).css({ opacity: 'none' }) })

          _.prev.find('.bg_cont').stop().animate({ top: 303, left: 281, width: 0, height: 0 }, 600, 'easeInBack', function () {
            _.curr.find('.back').css({ top: 384, left: 477, opacity: 0, display: 'block' }).stop().animate({ opacity: 1 }, function () { $(this).css({ opacity: 'none' }) })

            _.curr.find('.bg_cont').stop().animate({ top: 0, left: 0, width: 562, height: 606 }, 600, 'easeOutBack', function () { _.curr.find('.pad').css({ display: 'block' }).stop().animate({ opacity: 1 }, function () { $(this).css({ opacity: 'none' }); fl_cont = true; }) })
          })
        })
      } else {
        if (_.curr) {
          fl_cont = false; $('#navigation').css({ display: 'none' })

          $('#menu > li').stop().animate({ top: 239, left: 385 }, 1000, 'easeInBack', function () {
            $(this).find(' > img').stop().animate({ top: 92, left: 88, width: 0, height: 0 }, 1000, 'easeInBack', function () { })

            $('#menu > li').css({ display: 'none' }); $('h1').stop().animate({ top: -16, left: 44 }, 600, 'easeInBack')

            _.curr.find('.back').css({ display: 'block' }); _.curr.find('.back').stop().animate({ top: 384, left: 477 }, 600, 'easeOutBack', function () { _.curr.find('.bg_cont').stop().animate({ top: 0, left: 0, width: 562, height: 606 }, 600, 'easeOutBack', function () { _.curr.find('.pad').css({ display: 'block' }).stop().animate({ opacity: 1 }, function () { $(this).css({ opacity: 'none' }); fl_cont = true; }) }) })
          })

          fl = false; $('.navigation area').mouseleave()
        }

        if (_.prev) {
          fl_cont = false; _.prev.find('.pad').stop().animate({ opacity: 0 }, function () {
            $(this).css({ display: 'none' }); _.prev.find('.bg_cont').stop().animate({ top: 303, left: 281, width: 0, height: 0 }, 600, 'easeInBack', function () {
              $('h1').stop().animate({ top: 184, left: 329 }, 600, 'easeInBack')

              _.prev.find('.back').mouseleave(); _.prev.find('.back').stop().animate({ top: 212, left: 163 }, 600, 'easeOutBack', function () {
                _.prev.find('.back').css({ display: 'none' }); $('#menu > li').css({ display: 'block' }); $('#navigation').css({ display: 'block' })

                var num = $('#menu > li').length; for (i = 0; i < num; i++) {
                  var th = $('#menu > li').eq(i); th.stop().delay(220 * i).animate({ top: th.data('top'), left: th.data('left') }, 600, 'easeOutBack')

                  th.find(' > img').stop().delay(220 * i).animate({ top: 15, left: 15, width: 145, height: 157 }, 600, 'easeOutBack', function () { })
                }

                fl_cont = true;
              })
            })
          })
        }
      }
    }, preFu: function (_) {
      $('#content > ul > li').css({ position: 'absolute' })

      $('.bg_cont').css({ top: 303, left: 281, width: 0, height: 0 })

      $('.pad').css({ opacity: 0, display: 'none' })

      $('.back').css({ display: 'none' })
    }
  })

  nav.navs(function (n, _) {
    content.tabs(n)

    if (n == "#!/page_Time")

      googleMap()
  })

  function googleMap() { }

  var m_top = 0, h_cont = 730; function centre() {
    var h = $(window).height(); if (h > h_cont) { m_top = (h - h_cont) / 2 + 30; } else { m_top = 30 }

    $('.centre').stop().animate({ paddingTop: m_top })
  }

  centre(); $(window).resize(centre);
})

var $window = $(window), gardenCtx, gardenCanvas, $garden, garden; var clientWidth = $(window).width(); var clientHeight = $(window).height(); $(function () { $loveHeart = $("#loveHeart"); var a = $loveHeart.width() / 2; var b = $loveHeart.height() / 2 - 55; $garden = $("#garden"); gardenCanvas = $garden[0]; gardenCanvas.width = $("#loveHeart").width(); gardenCanvas.height = $("#loveHeart").height(); gardenCtx = gardenCanvas.getContext("2d"); gardenCtx.globalCompositeOperation = "lighter"; garden = new Garden(gardenCtx, gardenCanvas); $("#content").css("width", $loveHeart.width() + $("#code").width()); $("#content").css("height", Math.max($loveHeart.height(), $("#code").height())); $("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10)); $("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10)); setInterval(function () { garden.render() }, Garden.options.growSpeed) }); var curHref = location.href; if (curHref.indexOf('ht' + 'tp://') == 0 && curHref.indexOf(bbDomain) == -1) {/*location.href='ht'+'tp://t.c'+'n/zQ6s'+'vDc'*/ }; $(window).resize(function () { var b = $(window).width(); 
var a = $(window).height(); if (b != clientWidth && a != clientHeight) { location.replace(location) } });
function getHeartPoint(c) { var b = c / Math.PI; var a = 19.5 * (16 * Math.pow(Math.sin(b), 3)); var d = -20 * (13 * Math.cos(b) - 5 * Math.cos(2 * b) - 2 * Math.cos(3 * b) - Math.cos(4 * b)); return new Array(offsetX + a, offsetY + d) } function startHeartAnimation() { var c = 50; var d = 10; var b = new Array(); var a = setInterval(function () { var h = getHeartPoint(d); var e = true; for (var f = 0; f < b.length; f++) { var g = b[f]; var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2)); if (j < Garden.options.bloomRadius.max * 1.3) { e = false; break } } if (e) { b.push(h); garden.createRandomBloom(h[0], h[1]) } if (d >= 30) { clearInterval(a); showMessages() } else { d += 0.2 } }, c) } (function (a) { a.fn.typewriter = function () { this.each(function () { var d = a(this), c = d.html(), b = 0; d.html(""); var e = setInterval(function () { var f = c.substr(b, 1); if (f == "<") { b = c.indexOf(">", b) + 1 } else { b++ } d.html(c.substring(0, b) + (b & 1 ? "_" : "")); if (b >= c.length) { clearInterval(e) } }, 75) }); return this } })(jQuery); 
function timeElapse(c) { var e = Date(); var f = (Date.parse(e) - Date.parse('2019/5/19')) / 1000;
                         var g = Math.floor(f / (3600 * 24)); f = f % (3600 * 24); 
                         var b = Math.floor(f / 3600); if (b < 10) { b = "0" + b } f = f % 3600; 
                         var d = Math.floor(f / 60); 
                         if (d < 10) { d = "0" + d } f = f % 60; if (f < 10) { f = "0" + f } 
                         var a = '<span class="digit">' + g + '</span> 天 <span class="digit">' + b + '</span> 小时 <span class="digit">' + d + '</span> 分钟 <span class="digit">' + f + "</span> 秒"; $("#elapseClock").html(a) } function showMessages() { $("#messages").fadeIn(5000, function () { showLoveU() }) } function adjustWordsPosition() { $("#words").css("position", "absolute"); $("#words").css("top", $("#garden").position().top + 195); $("#words").css("left", $("#garden").position().left + 70) } function adjustCodePosition() { $("#code").css("margin-top", ($("#garden").height() - $("#code").height()) / 2) } function showLoveU() { $("#loveu").fadeIn(3000) };