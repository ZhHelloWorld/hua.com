define(['jquery'], function (jquery) {
    function headerCode() {
        $('.focusWechat').mouseenter(function () {
            $('#wechat-code').css('display', 'block');
        }).mouseleave(function () {
            $('#wechat-code').css('display', 'none');
        })

        $('.app').mouseenter(function () {
            $('#app-code').css('display', 'block');
        }).mouseleave(function () {
            $('#app-code').css('display', 'none');
        })
    }

    function rotate() {
        $('#service').mouseenter(function () {
            $('#customer-list').css('display', 'block')
            $('#rotate').css('transform', 'rotate(180deg)')
        }).mouseleave(function () {
            $('#customer-list').css('display', 'none');
            $('#rotate').css('transform', 'rotate(0deg)')
        })
    }

    function addData() {
        $.ajax({
            url: './data/cake.json',
            success: function (arr) {
                var str = ` <h4>蛋糕品牌</h4>`;
                var str2 = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <img src="../imgs/cake (${i + 1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                str2 += `<div class="cake-con fl">
                <img src="../imgs/cake (${i + 1}).png" alt="">
                <p>${arr[i].name}</p>
            </div>`;
                }
                $('#tab2 .type').html(str);
                $('#cakes-top').html(str2);
            },
            error: function (msg) {
                console.log(msg)
            }
        })
        $.ajax({
            url: './data/cakeCity.json',
            success: function (arr) {
                var str = `<h4>蛋糕城市</h4>`;
                var str2 = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <p>${arr[i].city}</p>
                </div>`;
                }
                for (var i = 0; i < arr.length-1; i++){
                    str2 += `<span>${arr[i].city}</span>`
                }
                $('#tab2 .cakeCity').html(str);
                $('#city-list').html(str2);
            },
            error: function (msg) {
                console.log(msg)
            }
        })

        $.ajax({
            url: './data/giftType.json',
            success: function (arr) {
                var str = `<h4>礼品类别</h4>`;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <img src="../imgs/giftType (${i + 1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                }
                $('#tab3 .type2').html(str);
            },
            error: function (msg) {
                console.log(msg)
            }
        })
        $.ajax({
            url:'./data/showProducts.json',
            success: function (arr){
                var str = ``;
                for (var i = 0; i < arr.length; i++){
                    str += `<div class="box fl">
            <div class="img">
                <img src="./imgs/giftShow (${i+1}).jpg" alt="">
            </div>
            <p>${arr[i].name}</p>
            <div class="price">${arr[i].price}</div>
            <span>${arr[i].sell}</span>
        </div>`;
                }
                $('#gift-show').html(str);
            },
            error:function(msg){
                console.log(msg);
            }
            
        })
    }

    function tab() {
        var aUses = document.querySelectorAll('.tab-use');
        var aTabs = $('.tab');
        aUses.forEach(function (item, index, arr) {
            item.onmouseenter = function () {
                aTabs[index].className = '';
                for (var i = 0; i < aTabs.length; i++) {
                    aTabs[i].className = '';
                }
                aTabs[index].className = 'active';
                item.onmouseleave = function(){
                    aTabs[index].className = '';
                    aTabs[index].onmouseenter = function(){
                        this.className = 'active';
                    }
                }
                aTabs[index].onmouseleave = function(){
                    this.className = '';
                }
            }
        })
    }

    function cityChoose(){
        $('#choose').mouseenter(function(){
            $('#city-none').css('display','block')
        }).mouseleave(function(){
            $('#city-none').mouseenter(function(){
                $('#city-none').css('display','block');
            })
            $('#city-none').css('display','none');
        })
        $('#city-none').mouseleave(function(){
            $('#city-none').css('display','none');

        })
    }
    return {
        headerCode,
        rotate,
        addData,
        tab,
        cityChoose,
    }
})