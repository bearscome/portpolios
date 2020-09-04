$(document).ready(function(){
    var nav_width=$('nav').outerWidth()
    $('.gnb_btn').on('click',function(e){
        e.preventDefault()
        var gnb=$('.nav').outerWidth()+10
        if($(this).hasClass('gnb_on')==false){
           $('.nav').stop().animate({
                'right':'0%'
            },500)
            $(this).addClass('gnb_on')
            $('.nav_dim').css('display','block')
            $('.logo').css('z-index','10')
        }else{
            $('.nav').stop().animate({
            'right':-nav_width
                },500)
                $(this).removeClass('gnb_on')
                $('.nav_dim').css('display','none')
            }
        })

    
    $(window).scroll(function(){
        var Top=300;
        var SCTT5= 3700;
        var scrollTop=$(this).scrollTop();
        var SCT1= $('.sec_1').offset().top;
        var SCT2= $('.sec_2').offset().top;
        var SCT3= $('.sec_3').offset().top;
        var SCT4= $('.sec_4').offset().top;
        var SCT5= $('.download').offset().top;
        var SCTT1= SCT1 - Top;
        var SCTT2= SCT2 - Top;
        var SCTT3= SCT3 - Top;
        var SCTT4= SCT4 - Top;
        

        if(scrollTop>60){
            $('.logo .H_W').hide()
            $('.logo .H_B').fadeIn(0.8)
            $('.header').addClass('header_on')
            $('.gnb_btn1').css('background-color','#00B8FF')
            $('.gnb_btn2').css('background-color','#00B8FF')
        }else {
            $('.logo .H_B').hide()
            $('.logo .H_W').fadeIn(0.8)
            $('.header').removeClass('header_on')
            $('.gnb_btn1').css('background-color','#FFF')
            $('.gnb_btn2').css('background-color','#FFF')
        }
        if(scrollTop > SCTT1 ){
            $('.sec_1 .ST_1_1').addClass('mv')
            $('.sec_1 .ST_1_2').addClass('mv2')
            
        }
        if(scrollTop > SCTT2){
            $('.sec_2 .ST_2_1').addClass('mv')
            $('.sec_2 .ST_2_2').addClass('mv2')
        }
        if(scrollTop > SCTT3){
            $('.sec_3 .ST_3_1').addClass('mv')
        }
        if(scrollTop > SCTT4){
            $('.sec_4 .ST_4_1').addClass('mv')
            $('.sec_4 .ST_4_2').addClass('mv2')
        }
        if(scrollTop > SCTT5){
            $('.blue_right').addClass('mv3')
        }
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
})