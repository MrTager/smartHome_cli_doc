const path=require('path'); //调用node.js中的路径
var webpack = require('webpack');

module.exports={
    entry:{
        //index:'E:/smartHome_cli_doc/server.js' //需要打包的文件
        index:path.resolve(__dirname,'../server.js')
    },
    output:{
        filename:'[name].js',    //输入的文件名是什么，生成的文件名也是什么
        path:path.resolve(__dirname,'../out') //指定生成的文件目录
    },

    mode:"development"    //开发模式，没有对js等文件压缩，默认生成的是压缩文件
}