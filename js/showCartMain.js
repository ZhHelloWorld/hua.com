require.config({
    paths: {
        jquery: 'jquery-1.10.1.min',
        JqCookie: 'jquery.cookie',
        index: 'index',
        showCart: 'showCart'
    },
    shim: {
        "JqCookie": ['jquery'],
        "showCart": ['JqCookie'],
        parabola: {
            exports: "_"
        }
    }
})

require(['index', 'showCart'], function (index, showCart) {
    index.headerCode();
    index.rotate();
    showCart.addCarData();
    showCart.SUM();
    showCart.addDatas();
    showCart.carMove();
    showCart.nodeClick();
    // showCart.ballMove();
})