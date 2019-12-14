// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'js/app': ['./src/index.jsx'],
  }, // 입력
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    // publicPath: '/app.js'
  }, // 출력
  // 현재 폴더를 /dist로 연결될 수 있도록 함. 
  // 위의 입력인 [] 배열 안에 있는 것을 publicPath의 파일로 합쳐서(dist/app.js) 만들어줌.
  module: {
    rules: [
      {
        // 규칙을 적용할 파일들
        test: /\.(js|jsx)$/,
        /*
          파일들에 아래와 같이 babel을 적용시켜줌
          loader: 'babel-loader',
          options: {
            // 여기서 크롬 지원하 것인지, 또 브라우저 중 어느 버전 지원하 것인 적을 수 있음
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel']
          }
        **/
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }, //만약 entry에 index만 입력해도 이것을 통해 웹팩에서 index.js나 index.jsx를 찾게 됨.
  // plugins 실무 가면 엄청 많은데 다 빼보고 에러메시지 보면서 공부하면 좋음
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 5000,
    historyApiFallback: true,
  },
};
