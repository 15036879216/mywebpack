const {join} =require('path')
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    //development 设为开发者模式
    mode: 'development',
    // 要求从src/main.js  打包到 lib/index.js
    //入口
    entry:'./src/main.js',
    //出口
    output:{
        path:join(__dirname,'lib'),
        filename:'index.js',
        //清除之前的打包
        clean:true
    },
    //自动生成html
    plugins: [
        new HtmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        })
    ],
    devServer:{
        open:true
    }
}


