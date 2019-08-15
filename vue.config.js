// vue.config.js
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    baseUrl: './', //vueConf.baseUrl, // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    lintOnSave: true,
    css: {
        extract: true
    },
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // configureWebpack: {
    //     module: {
    //         rules: [{
    //                 test: /\.md$/,
    //                 use: [
    //                     {
    //                         loader: "html-loader"
    //                     },
    //                     {
    //                         loader: "markdown-loader",
    //                         options: {
    //                             pedantic: true,
    //                             renderer
    //                         }
    //                     }
    //                 ]
    //             }]
    //     }
    // },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            debugger;
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },

    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
        port: 8080
    }
    //其他配置....
}