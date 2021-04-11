$(document).ready(function () {
  var mv_ul = $('.main_text')
  var mv_li = $('.main_text  li')
  var mv_li_1 = $('.main_text .main_text_li_1')
  var mv_li_2 = $('.main_text .main_text_li_2')
  var mv_li_3 = $('.main_text .main_text_li_3')
  var page3_img = $('.page3 .page_site .info_img')
  var page_3 = $('.page3 .page_site .info_text .info')
  var sid;
  i = 0;



  //날씨
  let weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '04': 'fas fa-cloud',
    '03': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'fas fa-snowflake',
    '50': 'fas fa-smog',
  }
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=87daf96918fe95de1b0a4ca2cdc418fb&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $icon = (data.weather[0].icon).substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + '°C';
      var $city = data.name;

      $('.Icon').append('<i class="' + weatherIcon[$icon] + '"></i>');
      $('.Temp').prepend($Temp);
      $('.city').append($city);
    }
  })
  //눈 
  var sf = new Snowflakes({
    color: "#ffffff",
    speed: 1.5,
    maxSize: 30
  });

  // header
  $('.m_header').on('click', function (e) {
    e.preventDefault();
    $('.dim').css('display', 'block')
    $('.m_header_wrap').animate({
      'left': '0px'
    }, 300)
  })

  $('.dim').on('click', function (e) {
    console.log('a')
    $('.m_header_wrap').animate({
      'left': '-50%'
    }, 300)
    $(this).css('display', 'none')
  })

  // main
  function moving() {
    $('.main_text li').removeClass('on')
    i++;
    if (i > 2) {
      i = 0;
    }
    $('.main_text li:eq(' + i + ')').addClass('on')
  }
  setInterval(moving, 2500);

  // page_3
  var prev = $('.prev')
  var next = $('.next')
  var num = 0;

  prev.on('click', function (e) {
    e.preventDefault();
    $('.page_site').removeClass('active')
    page_3.removeClass('block')
    num--
    if (num < 0) {
      num = 5
    }
    $('.page_site').eq(num).addClass('active')
    page_3.eq(num).addClass('block')
  })

  next.on('click', function (e) {
    e.preventDefault();
    $('.page_site').removeClass('active')
    page_3.removeClass('block')
    num++
    if (num > 5) {
      num = 0
    }
    $('.page_site').eq(num).addClass('active')
    page_3.eq(num).addClass('block')
  })

  //header click
  const test = $('.header_wrap a').not(':last')
  const m_test = $('.m_header_wrap .center a').not(':last')
  const Contect_Me = $('.header_wrap a').eq(3)
  const m_Contect_Me = $('.m_header_wrap .center a').eq(3)

  test.on('click', function (e) {
    e.preventDefault();
    const index = $(this).index()
    const offset = $('.wrap section:eq(' + index + ') ').offset().top;
    $('html').animate({
      scrollTop: offset - 30
    }, 600)
  })

  m_test.on('click', function (e) {
    e.preventDefault();
    const index = $(this).index()
    const offset = $('.wrap section:eq(' + index + ') ').offset().top;
    $('html').animate({
      scrollTop: offset - 30
    }, 600)
  })

  Contect_Me.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: 2829
    }, 600)
  })

  m_Contect_Me.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: 2829
    }, 600)
  })

  //scroll

  $(window).scroll(function () {
    var scroll = $(document).scrollTop()
    var mv_scroll = scroll / 7
    var scrollSP = $('.stop')
    const page_3_active = $($('.active') === true)

    //header 애니메이션
    if (900 > scroll > 0) {
      $('.header').removeClass('on')
      $('.header').css({
        "top": (800 + mv_scroll) + 'px'
      })
    } else {
      $('.header').addClass('on')
      $('.header').css({
        "top": '0'
      })
    }

    //page_3에니메이션
    if (1300 < scroll) {
      page_3.eq(num).addClass('block')
    } else {
      page_3.removeClass('block')
    }

    //scroll header_mv
    if (900 > scroll) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(0).addClass('now')
      $('.m_header_wrap .center a').eq(0).addClass('now')
    } else if (900 <= scroll && scroll < 1858) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(1).addClass('now')
      $('.m_header_wrap .center a').eq(1).addClass('now')
    } else if (1858 <= scroll && scroll < 2824) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(2).addClass('now')
      $('.m_header_wrap .center a').eq(2).addClass('now')
    } else if (2824 <= scroll) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(3).addClass('now')
      $('.m_header_wrap .center a').eq(3).addClass('now')
    }

    // page3이동
    // scrollSP.on('click', function (e) {
    //   e.preventDefault()
    //   e.stopPropagation();
    //   $('html, body').animate({ scrollTop: 1880 });
    //   return false;
    // })
    // // page_3스크롤 막음
    // var f = true;
    // if (1800 < scroll && scroll < 2400) {
    //   if ($('.page3').is(':animated') === false) {
    //     //scrollSP.trigger('click')
    //     //if ($('.page3').is(':hover') === true) {
    //     $('.page3').on('scroll touchmove mousewheel', function (e) {
    //       $('.page3').on('mousewheel DOMMouseScroll', function (e) {
    //         var E = e.originalEvent;
    //         delta = 0;
    //         if (E.detail) {
    //           delta = E.detail * -40;
    //         } else {
    //           delta = E.wheelDelta;
    //         };
    //         if (delta === 120 && page_3_active) {
    //           if ($(this).is(':animated') === false) {
    //             setTimeout(() => {
    //               next.trigger('click')
    //             }, 1000);
    //           }
    //         } else if (delta === -120 && page_3_active) {
    //           if ($(this).is(':animated') === false) {
    //             setTimeout(() => {
    //               prev.trigger('click')
    //             }, 1000);
    //           }
    //         }
    //         console.log(this)
    //         //scroll 빠짐
    //         e.preventDefault();
    //         e.stopPropagation();
    //         return false;
    //       })
    //     })
    //   } else {
    //     $('.page3').off('scroll touchmove mousewheel');
    //   }
    //   //}
    // }


    // $('.submit').on('click', function (e) {
    //   e.preventDefault()
    // var value = ""
    // var input = $('.input').val()
    // if (input === value) {
    //   alert('빈칸이 있습니다.')
    // } else if (input !== value) {
    //   alert('메일이 전송되었습니다.')
    //   input.val("")
    // }
    // })
  })



  //email
  function email() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gytjddlsla@gmail.com', 'template_m3ibllz', this);
      // alert("메일이 발송되었습니다.")
      var value = ""
      var input = $('.input').val()
      if (input === value) {
        alert('빈칸이 있습니다.')
      } else if (input !== value) {
        alert('메일이 전송되었습니다.')
        input.val("")
      }
    });
  }
  (function () {
    emailjs.init("user_6fdD4HgXNV1C2AXxQlcN8");
  })();

  email()



})