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
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <img src="../imgs/cake (${i + 1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                }
                $('#tab2 .type').html(str);
            },
            error: function (msg) {
                console.log(msg)
            }
        })
        $.ajax({
            url: './data/cakeCity.json',
            success: function (arr) {
                var str = `<h4>蛋糕城市</h4>`;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <p>${arr[i].city}</p>
                </div>`;
                }
                $('#tab2 .cakeCity').html(str);
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
    return {
        headerCode,
        rotate,
        addData,
        tab,
    }
})