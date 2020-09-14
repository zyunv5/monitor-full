'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/error', controller.error.index);
  router.get('/error/item', controller.error.create);
  router.get('/paint', controller.paint.index);
  router.get('/paint/item', controller.paint.create);
  router.get('/blankscreen', controller.blankScreen.index);
  router.get('/blankscreen/item', controller.blankScreen.create);
};
