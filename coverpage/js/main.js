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


        setTimeout(function(){
            $('.cover').removeClass('none')
            $('.name').removeClass('none')
        })
        setTimeout(function(){
            $('#coverpage').animate({
                'left':'-8000px'
            },6000)
        },5500)
        
        $('.informations > li > ul ').not(':first').hide()
        $('.informations > li  > a').on('click',function(){
            $('.informations > li > ul').hide()
            $(this).next().show()
        })
        $('.portpolios').on('click',function(){
            $('.informations').fadeOut(1000)
            $('.door_1').animate({
                'left':'-100%'
                },5000)
            $('.door_2').animate({
                'right':'-100%'
                },5000)
            setTimeout(function(){
                $('.door').hide()
            },3000)
            
        })

    
        /*화면 동적 구현*/
        /*수치가 다르면 함수 못만듦.*/
        /*$('.visual_contents div').hide()*/
        $('.Html_4_1_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-84.3%'
               },7000);
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0px'
               },1000)
          }
        })
        
        $('.Html_4_2_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-88%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'
               },1000)
          }
        })
        $('.Html_5_1_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-85%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'
               },1000)
          }
        })
        $('.Html_5_2_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-84.4%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        })
        $('.Mobile_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-95.3%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        })

        $('.RP_web_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-87.4%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        })
        $('.RP_TB_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-93.3%'
               },7000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        })
        $('.RP_MB_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-97.5%'
               },11000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        })
        /*function move(top,bottom){
            mouseenter:function(){
               $(this).stop().animate({
                   top:'-92.5%'
               },7000)
           },mouseleave:function(){
              $(this).stop().animate({
                   top:'0%'  
               },1000)
          }
        }*/
        /*currentNum=Num*/
        var View=$('.visual_contents .layout')
        var View_num;
        var Num=$('.main_full img')
        var currentNum;
        /*$('.layout').not(':first').hide()*/
        
        $(View).on('click',function(){
            var View_index=$(this).index()
            View_num=View_index;
            
        })
        $(Num).on('click',function(){
            var index = $(this).index()
            /*currentNum=index;*/
            var i=0;
            i++
            console.log(i)
        })
        View_num=currentNum;
       
       
    })  