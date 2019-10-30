export default {
  plugins: [
    [
      'umi-plugin-react', {
        dva: {
          immer: true,
        },
        antd: true,
        dll: {
          exclude: [],
        },
        local: {},
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        fastclick: false
      }
    ],
  ],
  targets: {
    ie: 10,
  },
  publicPath: "",
  treeShaking: true,
  alias: {
    src: `${__dirname}/src`
  },
  devtool: 'cheap-source-map',
  devServer: {
    hot: true
  },
  "proxy": {
    "/student": {
      "target": "https://dev2.data4truth.com",
      "changeOrigin": true,
      "secure": false,
      "pathRewrite": { "^/student": "/student" }
    }
  }
};
