'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
/**
 * @param {Egg.Application} app - 监控平台 js报错
 * 获取数据
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/jsError', controller.jsError.index);
};
/**
 * @param {Egg.Application} app - 监控平台 js报错
 * 添加数据
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/jsError/item', controller.jsError.create);
};
/**
 * @param {Egg.Application} app - 监控平台 性能监控
 * 获取数据
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/paint', controller.Paint.index);
};
/**
 * @param {Egg.Application} app - 监控平台 性能监控
 * 添加数据
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/paint/item', controller.Paint.create);
};

module.exports = (app) => {
  const { router, controller } = app;
  router.post('/monitor/blankScreen', controller.monitor.blankScreen);
};

module.exports = (app) => {
  const { router, controller } = app;
  router.get('/monitor', controller.monitor.index);
};
