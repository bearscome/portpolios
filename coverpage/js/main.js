$(document).ready(function(){
        var browse = navigator.userAgent.toLowerCase();
        //userAgent:브라우저 식별  toLowerCase():해당문자열 모두 소문자로 변경
        //mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/84.0.4147.89 safari/537.36
        if((navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || (browse.indexOf("msie") != -1))
        //navigator:현재 사용하고 있는 웹브라우저에 관한 정보.
        //appNAme:웹브라우저 이름,
        {
             $('#chrome').show()
             alert("포트폴리오는 크롬버전에 최적화되어있습니다.\n크롬브라우저를 이용 부탁드립니다.");
        }
        $('#coverpage').click(function(){
            $(this).hide()
        })

        setTimeout(function(){
            $('.cover').removeClass('none')
            $('.name').removeClass('none')
        })
        setTimeout(function(){
            $('#coverpage').animate({
                'left':'-8000px'
            },6000)
        },5500)
        
    
    
    $('.visual_contents > .cover').not(':first').hide()
    $('.visual_contents > .cover .RP_tablet').hide()
    $('.visual_contents > .cover .RP_Mobile').hide()
    //$('.Response_choose').show()
    $('.end').hide()
    $('.main_full li a').on('click',function(){
        var currentNum=$(this).parent().index() /*영사기 인데스*/
        var num=$('.main_full li img.on').parent().index() /*현재 보고있는 인덱스*/
         $('.visual_contents > .cover').hide()
         $('.contents_2 .visual').css({'backgroundColor':'rgba(255,255,255,0.8)'})
         $('.end').hide()
         $('.end').css({'marginTop':'500px'})
         $('.Response_choose').hide()
         $('.contents_2 .visual').css({
            'box-shadow':'0px 0px 40px rgba(255,255,255)',
            'backgroundColor':'rgba(255,255,255,0.8)'
        })
        if(num!=currentNum){
            var width=$('.contents_2 .size ul li').outerWidth()
            $('.main_full li a.on').removeClass('on')
            $('.main_full li:eq('+currentNum+') a').addClass('on')
            $('.visual_contents .cover:eq('+currentNum+')').fadeIn(1000)
            $('.contents_2 .size ul').animate({
                'left':-width*(currentNum)
            })
           if(currentNum==0){
                $('.Response_choose').fadeIn(1000)
            }
             if(currentNum==6){
                $('.contents_2 .visual').css({
                    'backgroundColor':'rgba(255,255,255,0.05)',
                    'box-shadow':'0 0 0 rgba(255,255,255,0.05)'
                })
                $('.visual_contents > .cover').hide()/*.layout*/
                $('.end').css({'marginTop':'650px'})
                $('.end').fadeIn(1000)
                $('.end').animate({
                    'marginTop':'0px'
                 },5000)
            }   
        }
        var width=window.outerWidth;
        if(width<=1024 || width<=768){
            $('.end').css({'marginTop':'750px'})
        }
        if(width<=425){
            $('.end').css({'marginTop':'550px'})
            if(currentNum==6){
                $('.end').animate({
                    'marginTop':'0px'
                 },3000)   
            }

        }
    })
    
  $('.Response_choose a').on('click',function(){
      var currentNum=$(this).index()
      var num=$('.Response_choose a.on').index()
      var web=$('.visual_contents > .cover .RP_web')
      var tablet=$('.visual_contents > .cover .RP_tablet')
      var mobile=$('.visual_contents > .cover .RP_Mobile')
      $('.Response_choose a').removeClass('on')
      $(this).addClass('on')
      if(num!=currentNum){
          $('.Response_choose a').removeClass('on')
          $('.Response_choose a:eq('+currentNum+')').addClass('on')
          if(currentNum==0){
              tablet.hide()
              mobile.hide()
              $('.RP_web').fadeIn(1000)
          }else if(currentNum==1){
               web.hide()
               mobile.hide()
              $('.RP_tablet').fadeIn(1000)
          }else if(currentNum==2){
               web.hide()
               tablet.hide()
              $('.RP_Mobile').fadeIn(1000)
          }
      }
  })
    
    
    })