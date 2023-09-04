const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env) => {
    const mode = env.mode || 'production'
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.[hash].js',
            clean: true
        },
        mode,
        devServer: {
            open: true,
            port: 3000
        },
        resolve: {
            extensions: ['.jsx','.js' ,'.ts', '.tsx',]
        },
        module: {
            rules: [
                {
                    test: /.(jsx?|tsx?)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },

            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: "./src/index.html"
        })]
    }
}