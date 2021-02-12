const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const gifsicle = require('imagemin-gifsicle')
const jpegtran = require('imagemin-jpegtran')
const optipng = require('imagemin-optipng')
const svgo = require('imagemin-svgo')
const CompressWebpackPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = (ext) =>
    isDev ? `[name].${ext}` : `[name].[fullhash:10].${ext}`

const optimization = () => {
    const configObject = {
        splitChunks: {
            chunks: 'all',
        },
    }
    if (isProd) {
        configObject.minimizer = [
            new TerserPlugin({
                parallel: true,
            }),
            new CompressWebpackPlugin({
                filename: '[path][base].br',
                algorithm: 'brotliCompress',
                test: /\.(js|css|html|svg)$/,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                threshold: 10240,
                minRatio: 0.8,
            }),
        ]
    }
    return configObject
}

const plugins = () => {
    const basePlugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            favicon: './favicon/favicon.png',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
    ]
    if (isProd) {
        basePlugins.push(
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true, arithmetic: true }],
                        ['optipng', { optimizationLevel: 7 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            }),
            new BundleAnalyzerPlugin({
                analyzerPort: 3001,
            })
        )
    }
    return basePlugins
}

module.exports = {
    mode: 'development',
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: `./js/${filename('js')}`,
        publicPath: '',
    },
    devServer: {
        hot: isDev,
        open: true,
        compress: true,
        historyApiFallback: true,
        port: 3000,
    },
    performance: {
        hints: isDev ? false : 'warning',
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:|jpg|jpeg|png|gif|svg|webp|heic|heif)$/i,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./img/${filename('[ext]')}`,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            fs: false,
            tls: false,
            net: false,
            path: false,
            zlib: false,
            http: false,
            https: false,
            stream: false,
            crypto: false,
            vm: false,
            os: false,
            buffer: false,
            assert: false,
            constants: false,
            worker_threads: false,
            child_process: false,
            pnpapi: false,
            'crypto-browserify': false,
            util: false,
        },
    },
}
