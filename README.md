# 监控平台
```tree
├── README.md
├── mock
├── monitor-sdk //监控SDK
│   ├── dist
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   ├── webpack.config.js
│   └── yarn.lock
├── package.json
├── server //后端服务
│   ├── app
│   ├── config
│   ├── database
│   ├── jsconfig.json
│   ├── logs
│   ├── package-lock.json
│   ├── package.json
│   ├── run
│   ├── test
│   ├── typings
│   └── yarn.lock
├── src
│   ├── app.ts
│   ├── assets
│   ├── global.css
│   ├── layouts
│   ├── models
│   └── pages
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```
## sdk制作
[前端监控系统实战（4）](https://www.bilibili.com/video/BV1zQ4y1P75b)
blbl视频
居然没弄完，还有后半部找不到了

## 后台管理界面

## 服务端


## bug
### mysql -uroot -p (Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2))
mysql 没启动 Orz
### antd4 中不到ant-design/icons
1. 先安装yarn add umi-plugin-antd-icon-config -D
2. plugin:[ ['umi-plugin-antd-icon-config', {}]]
