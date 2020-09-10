'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
/**
 * @param {Egg.Application} app - 监控平台
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/jsError', controller.jsError.index);
};





module.exports = app => {
  const { router, controller } = app;
  router.get('/monitor', controller.monitor.index);
};
module.exports = app => {
  const { router, controller } = app;
  router.post('/monitor/blankScreen', controller.monitor.blankScreen);
};

module.exports = app => {
  const { router, controller } = app;
  router.post('/monitor/paint', controller.monitor.paint);
};
