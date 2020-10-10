require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie:'jquery.cookie',
        index:'index',
        showCart:'showCart'
    },
    shim:{
        "JqCookie": ['jquery'],
        "showCart":['JqCookie'],
    }
})

require(['index','showCart'],function(index,showCart){
    index.headerCode();
    index.rotate();
    index.addData();
    index.tab();
    index.cityChoose();
    index.slide();
    index.backTop();
    showCart.SUM();
})