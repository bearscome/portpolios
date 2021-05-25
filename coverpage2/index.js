$(document).ready(function () {

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

  // 텍스트 애니메이션 함수
  i = 0;
  function moving() {
    $('.main_text li').removeClass('on')
    i++;
    if (i > 2) {
      i = 0;
    }
    $('.main_text li:eq(' + i + ')').addClass('on')
  }
  setInterval(moving, 2500);

  // 페이지 소개 버튼 함수
  var prev = $('.prev')
  var next = $('.next')
  var num = 0;

  var page_3 = $('.page3 .page_site .info_text .info')


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
  const test = $('.header_wrap a')
  const m_test = $('.m_header_wrap .center a')

  moveToSection = (index) => {
    const offset = $('.wrap section:eq(' + index + ') ').offset().top;
    $('html').animate({
      scrollTop: offset
    }, 600)
  }

  test.on('click', function (e) {
    const index = $(this).index()
    e.preventDefault();
    moveToSection(index)
  })

  m_test.on('click', function (e) {
    const index = $(this).index()
    e.preventDefault();
    moveToSection(index)
  })



  //scroll
  $(window).scroll(function () {
    let scroll = $(document).scrollTop()
    let mv_scroll = scroll / 4
    const vhHeight = $('.page1').outerHeight()
    const pageHeight = vhHeight * 0.8 //1064 반응형
    const page2Height = $('.page2 ').position().top - 56


    //header 애니메이션
    if (pageHeight > scroll) {
      $('.header').removeClass('on')
      $('.header').css({
        "top": (pageHeight + mv_scroll) + 'px'
      })
    } else if(scroll > page2Height){
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
    const headerGnb = $('.header').outerHeight(true)
    const aboutSection = $('.page2 ').offset().top - headerGnb;
    const portpoliosSection = $('.page3').offset().top - headerGnb;
    const sendEmail = $('.page4').offset().top;

    if (aboutSection > scroll) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(0).addClass('now')
      $('.m_header_wrap .center a').eq(0).addClass('now')
    } else if (aboutSection <= scroll && scroll < portpoliosSection) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(1).addClass('now')
      $('.m_header_wrap .center a').eq(1).addClass('now')
    } else if (portpoliosSection <= scroll && scroll < sendEmail) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(2).addClass('now')
      $('.m_header_wrap .center a').eq(2).addClass('now')
    } else if (sendEmail <= scroll) {
      $('.header_wrap a.now').removeClass('now')
      $('.m_header_wrap .center a.now').removeClass('now')

      $('.header_wrap a').eq(3).addClass('now')
      $('.m_header_wrap .center a').eq(3).addClass('now')
    }
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