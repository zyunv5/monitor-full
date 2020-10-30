import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/example1',
          component: '../pages/example1.tsx',
        },
        {
          path: '/example2',
          component: '../pages/example2.tsx',
        },
        {
          path: '/example3',
          component: '../pages/example3.tsx',
        },
        {
          path: '/example4',
          component: '../pages/example4.tsx',
        },
        {
          path: '/example5',
          component: '../pages/example5.tsx',
        },
        {
          path: '/example6',
          component: '../pages/example6.tsx',
        },
        {
          path: '/example7',
          component: '../pages/example7.tsx',
        },
        {
          path: '/example8',
          component: '../pages/example8.tsx',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        title: '监控平台',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8899/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
};

export default config;
