const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: [ /node_modules/ ],
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // alias: {
        //     styles: path.join(__dirname, 'styles') 
        // },
        
        modules: ["./src", "node_modules"],
        // root: path.resolve('./src'),
        // extensions: ['', '.js'],
        // // preferRelative: true,
        // // modules: ['./src'],
        // alias: {
        //     App: path.resolve(__dirname, 'src/'),
        //     Pages: path.resolve(__dirname, 'src/pages/'),
        //     Components: path.resolve(__dirname, 'src/components/'),
        //     // App$: path.resolve(__dirname, 'src/App.js'),
        //     // components: path.resolve(__dirname, 'src/components/'),
        //     // '@components': path.resolve(__dirname, 'src/components') // Alias for components
        //     // '~': path.resolve(__dirname)

        // },
        // root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        // extensions: ['', '.js'],

        // modulesDirectories: [
        //     'src',
        //     'node_modules',
        // ],
    },
    devServer: {
        // static: './',
        static: {
            directory: path.join(__dirname, "dist")
        },
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new Dotenv()
      ]
};
