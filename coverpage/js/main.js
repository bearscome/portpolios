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
                $('.contents_1').hide()
            },3000)
            
        })
    /*마우스 스크롤 시 Faid In, Faid Out*/
    
    
    /*$('.main_full img').on('click',function(){
        var num=$(this).index()
        console.log(num)
    })   */ 
    
        /*화면 동적 구현*/
        /*수치가 다르면 함수 못만듦.*/
        /*$('.visual_contents div').hide()*/
        /*web*/
 /*       $('.Html_4_1_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-84.3%'
               },7000);
           },
           mouseleave:function(top){
              $(this).stop().animate({
                    top:'0%'
                },1000)
          }
        },1000);

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
                   top:'-83.3%'
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
                   top:'-92%'
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
                   top:'-92.5%'
               },11000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                    top:'0%'
                },1000)
          }
        })*/
    
    /*window resize*/
    /*tablet 1024*/
       /*$('.Html_4_1_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-54.3%'
               },7000);
           },
           mouseleave:function(top){
             $(this).stop().animate({
                top:'0%'
            },1000)
          }
        },1000);

        $('.Html_4_2_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-66%'
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
                   top:'-56%'
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
                   top:'-54.4%'
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
                   top:'-87.3%'
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
                   top:'-63.4%'
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
                   top:'-75.3%'
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
                   top:'-93%'
               },11000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                    top:'0%'
                },1000)
          }
        }) 
    }
    모바일 425px
    if(width<=425){
       $('.Html_4_1_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-10%'
               },1000);
           },
           mouseleave:function(){
             $(this).stop().animate({
                    top:'0%'
                },1000)
          }
        },1000);

        $('.Html_4_2_img img').on({
           mouseenter:function(){
               $(this).stop().animate({
                   top:'-46%'
               },3000)
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
                   top:'-16%'
               },1000)
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
                   top:'-12.4%'
               },1000)
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
                   top:'-285.3%'
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
                   top:'-36.4%'
               },1000)
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
                   top:'-155.3%'
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
                   top:'-605%'
               },11000)
           },
           mouseleave:function(){
              $(this).stop().animate({
                    top:'0%'
                },1000)
          }
        }) 
    }  */  
    
    
/*    $(document).mousewheel(function(e, delta){
		var count=0;
        var offset=0;
        var total=7;
        var check=$('.visual_contents .layout').eq(count)*/
        
       /*$(window).on('mousewheel',function(e){
            if(e.originalEvent.wheelDelta < 0){
                e.preventDefault();
                //마우스휠 아래로
                $('.main_full').stop().animate({
                    left:'-=129'
                },500);
                    if(count>total){
                        count++;
                        console.log(count)
                    }
            } else {
                //마우스휠 위로
                
                $('.main_full').stop().animate({
                    left:'+=129'
                },500);
            }
            return false;
        });
	});*/
    

    
    
    $('.visual_contents > .layout').not(':first').hide()
    $('.Response_choose').hide()
    $('.end').hide()
    $('.main_full li a').on('click',function(){
        var currentNum=$(this).parent().index()
        var num=$('.main_full li img.on').parent().index()
         $('.visual_contents > .layout').hide()
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
            $('.visual_contents > .layout:eq('+currentNum+')').fadeIn(1000)
            $('.contents_2 .size ul').animate({
                'left':-width*(currentNum)
            })
           if(currentNum==5){
                $('.Response_choose').fadeIn(1000)
            }
             if(currentNum==6){
                $('.contents_2 .visual').css({
                    'backgroundColor':'rgba(255,255,255,0.05)',
                    'box-shadow':'0 0 0 rgba(255,255,255,0.05)'
                })
                $('.visual_contents > .layout').hide()
                $('.end').css({'marginTop':'500px'})
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
      $('.Response_choose a').removeClass('on')
      $(this).addClass('on')
      if(num!=currentNum){
          $('.Response_choose a').removeClass('on')
          $('.Response_choose a:eq('+currentNum+')').addClass('on')
          if(currentNum==0){
              $('.visual_contents > .layout').hide()
              $('.RP_web').fadeIn(1000)
          }else if(currentNum==1){
              $('.visual_contents > .layout').hide()
              $('.RP_tablet').fadeIn(1000)
          }else if(currentNum==2){
              $('.visual_contents > .layout').hide()
              $('.RP_Mobile').fadeIn(1000)
          }
      }
  })
    
    
    })