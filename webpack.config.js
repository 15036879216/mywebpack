const {join} =require('path')

module.exports={
    // 要求从src/main.js  打包到 lib/index.js
    //入口
    entry:'./src/main.js',
    //出口
    output:{
        path:join(__dirname,'lib'),
        filename:'index.js',
        //清除之前的打包
        clean:true
    }
}