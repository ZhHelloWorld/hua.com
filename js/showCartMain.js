require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie:'jquery.cookie',
        index:'index',
        showCart:'showCart'
    },
    shim: {
        //设置依赖关系
        "jqCookie": ['jquery'],
        // parabola 不遵从amd规范
        parabola: {
          exports: "_"
        }
    }
})

require(['index','showCart'],function(index,showCart){
    index.headerCode();
    index.rotate();
    showCart.addCarData();
    showCart.SUM();
    showCart.addDatas();
    showCart.carMove();
    showCart.nodeClick();
    // showCart.ballMove();
})