var webpack = require('webpack');

module.exports = {
    entry:{
    	mainEntry: "./src/js/main.js",
    },
    output: {
        path: "./build",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        //安装插件后， 可以require不同文件类型
        loaders: [
            // { test: /\.css$/, loader: "style-loader!css-loader"  },
            // { test: /\.html$/, loader: "html-loader" }

        ]
    },
    plugins: [
        // 提取相同的代码为 common.js 文件
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],
    resolve: {
        // 引用时可以省略 .js 后缀
        extensions: ['', '.js'],
        alias:{
            // 'jquery': __dirname + "/app/bower_components/jquery/dist/jquery.js"
        }
    }
};


if(process.env.NODE_ENV === 'production'){
    // 发布压缩
    module.exports.plugins && module.exports.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    );
}else{
    // 开发调试
    module.exports.devtool = '#source-map';
}
