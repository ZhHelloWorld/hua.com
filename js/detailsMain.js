require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie:'jquery.cookie',
        index:'index',
        details:'details'
    },
    shim:{
        "JqCookie": ['jquery'],
        "details":['JqCookie'],
    }
})

require(['index','details'],function(index,details){
    index.headerCode();
    index.rotate();
    index.cityChoose();
    index.addData();
    details.magnifier();
    details.differentPro();
})