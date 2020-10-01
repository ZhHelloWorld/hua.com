require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        index:'index',
    }
})

require(['index'],function(index){
    index.headerCode();
    index.rotate();
    index.addData();
})