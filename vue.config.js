const fs = require('fs');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
const join = path.join
function getEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const entries = files.reduce((ret, item) => {
        const itemPath = join(path, item)
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            ret[item] = resolve(join(itemPath, 'index.js'))
        } else {
            const [name] = item.split('.')
            ret[name] = resolve(`${itemPath}`)
        }
        return ret
    }, {})
    return entries
}

//开发环境配置
const devConfig = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
                'styles': resolve('styles')
                // 'views': resolve('examples/views'),
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
            
    },
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss', // 可以改成对应的sass 或者less
            'patterns': [
                path.resolve(__dirname, 'styles/index.scss'),
            ]
        }
    },
    devServer: {
        port: 8091,
        hot: true,
        open: 'Google Chrome'
    }
}
let VUE_APP = process.env.VUE_APP_SECRET
let entryAll = VUE_APP === 'index' || VUE_APP === 'common' ? getEntries('src') : getEntries('packages')
let libraryTarget = ''
if (VUE_APP === 'common' || VUE_APP === 'comp') {
    libraryTarget = 'commonjs2'
} else {
    libraryTarget = 'umd'
}

//生成环境配置
const buildConfig = {
    css: {
        sourceMap: true,
        extract: {
            filename: 'style/[name].css'
        }
    },
    configureWebpack: {
        entry: {
            ...entryAll,
        },
        output: {
            filename: VUE_APP === 'common' ? 'dz-ui.common.js' : '[name].js',
            library: 'dzUi',
            libraryExport: 'default',
            libraryTarget: libraryTarget,
        },
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
              '@': resolve('packages'),
              'styles': resolve('styles')
              // 'assets': resolve('examples/assets'),
              // 'views': resolve('examples/views'),
          }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
    },
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss', // 可以改成对应的sass 或者less
            'patterns': [
                path.resolve(__dirname, 'styles/base.scss'),
            ]
        }
    },
    outputDir: 'lib',
    productionSourceMap: false,
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;