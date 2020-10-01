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

    function addData(){
        $.ajax({
            url:'./data/cake.json',
            success:function(arr){
                var str = ` <h4>蛋糕品牌</h4>`;
                for(var i = 0;i<arr.length;i++){
                    str += `<div class="cake-content fl">
                    <img src="../imgs/cake (${i+1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                }
                $('#tab2 .type').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
        // $.ajax({
        //     url:'./data/cakeCity.json',
        //     success:function(arr){
        //         var str = ` <h4>蛋糕品牌</h4>`;
        //         for(var i = 0;i<arr.length;i++){
        //             str += `<div class="cake-content fl">
        //             <img src="../imgs/cake (${i+1}).png" alt="">
        //             <p>${arr[i].name}</p>
        //         </div>`;
        //         }
        //         $('#tab2 .type').html(str);
        //     },
        //     error:function(msg){    
        //         console.log(msg)
        //     }
        // })
    }

    return{
        headerCode,
        rotate,
        addData,
    }
})