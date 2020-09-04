$(document).on('ready',function(){
            var num=0;
            var currentnum=0;
            var sid, sid2;
            var imgwidth=$('.img_list li a img').outerWidth() 
            
            /*메인비주얼*/
             function animated(currentnum){
                    $('.contents_page > ul > li > a.on').removeClass('on')
                    $('.contents_page > ul > li > a').children().attr("src","images/icons/icon_country_off.png")
                    $('.contents_page > ul > li:eq('+currentnum+') > a').addClass('on')
                    $('.contents_page > ul > li:eq('+currentnum+') > a.on').children().attr("src","images/icons/icon_country_on.png")
                    $('.img_list').animate({
                        'left':(-1920*currentnum)+'px'
                    })
                }
            
            /*추천소장품*/
            function FC(Number){
                    if($('.recommended_items_list_ul').is(':animated')==false){
                        $('.event_photo_page ul li a.on').removeClass('on')
                        $('.event_photo_page ul li a img').attr('src','images/icons/icon_country_off.png')
                        $('.event_photo_page ul li:eq('+Number+') a').addClass('on')
                        $('.event_photo_page ul li:eq('+Number+') a').children().attr('src','images/icons/icon_country_on.png')
                        $('.recommended_items_list_ul').animate({
                            left:-(1280*Number)+'px'
                        })
                    }
                }
           
            
            /*GNB*/
            $('.gnb_sub > ul > li > a').on({
                mouseenter:function(){
                    $('.gnb').append("<div class='gnbbg'></div>")
                    $('.sub_munu').show()
                    $('.gnb .sub_munu').css('background','#fff')
                    $('.gnb_sub ul > li > a.on').removeClass('on')
                    $(this).addClass('on')
                    $(this).next().css('background-color','#d9d9d9')
                    
                    
                },
                mouseleave:function(){
                    $('.gnbbg').remove()
                    $('.sub_munu').hide()
                    $('.gnb_sub ul > li > a').removeClass('on')
                }
            })
            $('.sub_munu').on({
                mouseenter:function(){
                    $('.gnb').append("<div class='gnbbg'></div>")
                    $('.sub_munu').show()
                    $('.gnb_sub ul > li > a').removeClass('on')
                    $(this).prev().addClass('on')
                    $('.sub_munu').css('background-color','#fff')
                    $(this).css('background-color','#d9d9d9')
                },
                mouseleave:function(){
                    $('.gnbbg').remove()
                    $('.sub_munu').hide()
                    $('.gnb_sub ul > li > a').removeClass('on')
                }
            })
            
            /*퀵메뉴*/
            $(window).scroll(function(){
                $('.right_button').hide()
                var scroll=$(window).scrollTop()
                var page1=$('.wrap > div:eq(1)').offset().top; /*1013*/
                var page2=$('.wrap > div:eq(2)').offset().top; /*1779*/
                var page3=$('.wrap > div:eq(3)').offset().top; /*2554*/
                var page4=$('.wrap > div:eq(4)').offset().top; /*3339*/
                
                if(scroll>page1-100){
                    quickN=0
                    $('.right_button').show()
                    $('.right_button ul li a.on').removeClass('on')
                    $('.right_button ul li:eq(0) a').addClass('on')
                }
                if(scroll>page2-100){
                    quickN=1
                    $('.right_button ul li a.on').removeClass('on')
                    $('.right_button ul li:eq(1) a').addClass('on')
                }
                
                if(scroll>page3-100){
                    quickN=2
                    $('.right_button ul li a.on').removeClass('on')
                    $('.right_button ul li:eq(2) a').addClass('on')
                }
                
                if(scroll>page4-100){
                    quickN=3
                    $('.right_button ul li a.on').removeClass('on')
                    $('.right_button ul li:eq(3) a').addClass('on')
                }
                    
                $('.right_button').stop()
                $('.right_button').animate({
                    'top':$(document).scrollTop()+50+'px'
                },500)
            })
            
            var quickN=0;
            $('.right_button > ul > li > a').on('click',function(e){
                e.preventDefault()
                if($(this).parent().index()==0){
                   $('html').animate({
                       scrollTop:1003
                   })
                }
                if($(this).parent().index()==1){
                   $('html').animate({
                       scrollTop:1769
                   })
                }
                if($(this).parent().index()==2){
                   $('html').animate({
                       scrollTop:2544
                   })
                }
                if($(this).parent().index()==3){
                   $('html').animate({
                       scrollTop:3329
                   })
                }
            })
            
            $('.right_button .up').on('click',function(e){
                e.preventDefault()
                quickN--
                if(quickN<0){
                    quickN=3
                }
                test1(quickN)
            })
            $('.right_button .down').on('click',function(e){
                e.preventDefault()
                quickN++
                if(quickN>3){
                    quickN=0
                }
                test1(quickN)
            })
            
            function test1(quickN){
                $('.right_button ul li a').removeClass('on')
                $('.right_button ul li:eq('+quickN+') a').addClass('on')
                if(quickN==0){
                    $('html').animate({
                       scrollTop:1003
                   })
                }if(quickN==1){
                    $('html').animate({
                       scrollTop:1769
                   })
                }if(quickN==2){
                    $('html').animate({
                       scrollTop:2544
                   })
                }
                if(quickN==3){
                    $('html').animate({
                       scrollTop:3329
                   })
                }
            }
            
            /*비주얼 메인*/
            
            function auto(){
                $('.next_btn').trigger('click')
                $('.recommended_items_list_next_btn').trigger('click')
                
            }
            function auto2(){
                $('.banner_next_btn').trigger('click')
            }
              sid=setInterval(auto,3000)
              sid2=setInterval(auto2,3000)
            $('.contents_page > ul > li > a').on('click',function(e){
                e.preventDefault()
                if($('.img_list').is(':animated')==false){
                    var currentN=$(this).parent().index()
                    var imgwidth=$('.img_list li a img').outerWidth()
                    $('.contents_page > ul > li > a.on').removeClass('on')
                    $('.contents_page > ul > li > a').children().attr("src","images/icons/icon_country_off.png")
                    $(this).addClass('on')
                    $(this).children().attr('src','images/icons/icon_country_on.png')
                    $('.img_list').animate({
                        'left':(-imgwidth*currentN)+'px'
                    })
                currentnum=currentN
                }
            })
            
            
            $('.next_btn').on('click',function(e){
                e.preventDefault()
                if($('.img_list').is(':animated')==false){
                    currentnum++
                    if(currentnum>3){
                        currentnum=0
                    }
                    animated(currentnum)
                }
            })
             $('.prev_btn').on('click',function(e){
                e.preventDefault()
                 if($('.img_list').is(':animated')==false){
                    currentnum--
                    if(currentnum<0){
                        currentnum=3
                    }
                    animated(currentnum)
                 }
            })
            
           
            
            /*전시사항*/
            
            $('.in_exhibition_contents .deth_2').not(':first').hide()
            $('.in_exhibition_contents .deth_1 > li > a').on('click',function(e){
                e.preventDefault()
                $('.in_exhibition_contents .deth_1 > li > a.on').removeClass('on')
                $(this).addClass('on')
                $('.in_exhibition_contents .deth_2').hide()
                $(this).next().show()
            })
            
            /*알림*/
            
            $('.news_zone .deth_2').not(':first').hide()
            $('.news_notice ul > li > a').on('click',function(e){
                e.preventDefault()
                $('.news_notice ul > li > a.on').removeClass('on')
                $(this).addClass('on')
                $('.news_zone .deth_2').hide()
                $(this).next().show()
            })
            
            /*팝업존*/
            var popupZ;
            var popup_N=0;
            $('.news_list li a').not(':first').hide()
            $('.popup_news_page ul li a').on('mouseenter',function(e){
                e.preventDefault()
                clearInterval(popupZ)
                if($('.popup_news_page ul li a').is(':animated')==false){
                    var currentNum=$(this).parent().index()
                    $('.news_list ul li a.on').removeClass('on')
                    $('.popup_news_page ul li a.on').removeClass('on')
                    $('.popup_news_page ul li a img').attr('src','images/icons/icon_country_off.png')
                    $(this).addClass('on')
                    $(this).children().attr('src','images/icons/icon_country_on.png')
                    $('.news_list li a').hide()
                    $('.news_list li:eq('+currentNum+') a').show()
                    }
            })
            $('.popup_news_page ul li a').on('mouseleave',function(){
                 popupZ=setInterval(popup,3000)
            })
            $('.news_list li a').on('click',function(e){
                e.preventDefault()
            })
            
            function popup(currentNum){
                popup_N++
                if(popup_N>3){
                    popup_N=0;
                }
                $('.news_list ul li a.on').removeClass('on')
                $('.popup_news_page ul li a.on').removeClass('on')
                $('.popup_news_page ul li a img').attr('src','images/icons/icon_country_off.png')
                $('.popup_news_page ul li:eq('+popup_N+') a').addClass('on')
                $('.popup_news_page ul li:eq('+popup_N+') a').children().attr('src','images/icons/icon_country_on.png')
                $('.news_list li a').hide()
                $('.news_list li:eq('+popup_N+') a').show()
            }
            popupZ=setInterval(popup,3000)
            
        /*추천 소장품*/
            var Number=0;
            $('.event_photo_page ul li a').on('click',function(e){
                e.preventDefault();
                var currentN=$(this).parent().index()
                $('.event_photo_page ul li a.on').removeClass('on')
                $('.event_photo_page ul li a img').attr('src','images/icons/icon_country_off.png')
                $(this).addClass('on')
                $(this).children().attr('src','images/icons/icon_country_on.png')
                $('.recommended_items_list_ul').animate({
                        left:-(1280*currentN)+'px'
                    })
            })
            $('.recommended_items_list_next_btn').on('click',function(e){
                e.preventDefault()
                Number++
                if(Number>1){
                    Number=0;
                }
                FC(Number)
            })
            
            $('.recommended_items_list_prev_btn').on('click',function(e){
                e.preventDefault()
                Number--
                if(Number<0){
                    Number=1;
                }
                FC(Number)
            })
            
            
            /*배너*/
            $('.banner_prev_btn').on('click',function(e){
                e.preventDefault()
                $('.banner ul').animate({
                    left:'-195px'
                },1000,function(){
                    $('.banner ul').append($('.banner ul li:first'))
                    $('.banner ul').css('left','0px')
                })
            })
            
            $('.banner_next_btn').on('click',function(e){
                e.preventDefault()
                $('.banner ul').css('left','-195px') 
                $('.banner ul').prepend($('.banner ul li:last'))
                $('.banner ul').animate({
                    left:'0px'
                },1000,function(){
                   
                })
            })
            
            $('.banner_stop_btn').on('click',function(e){
                e.preventDefault()
                clearInterval(sid2)
                
            })
        })