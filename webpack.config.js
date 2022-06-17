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
    //服务器
    devServer:{
        open:true,
        port:8085
    },
    //打包CSS Less 
    module:{
        rules:[
            //打包CSS
            {
                test:/\.css/i,
                //解析规则 从后向前  先用css-loader，再用style-loader
                use:["style-loader","css-loader"]
            },
            //less
            {
                test:/\.less$/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                //解析规则 从后向前  先用css-loader，再用style-loader
                type:"asset/resource",
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                }
            }


        ]
    }
}


