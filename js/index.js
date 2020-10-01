define(['jquery'],function(jquery){
    function headerCode(){
        $('.focusWechat').mouseenter(function(){
            $('#wechat-code').css('display','block');
        }).mouseleave(function(){
            $('#wechat-code').css('display','none');
        })

        $('.app').mouseenter(function(){
            $('#app-code').css('display','block');
        }).mouseleave(function(){
            $('#app-code').css('display','none');
        })
    }

    function rotate(){
        $('#service').mouseenter(function(){
            $('#customer-list').css('display','block')
            $('#rotate').css('transform','rotate(180deg)')
        }).mouseleave(function(){
            $('#customer-list').css('display','none');
            $('#rotate').css('transform','rotate(0deg)')
        })
    }

    return{
        headerCode,
        rotate,
    }
})