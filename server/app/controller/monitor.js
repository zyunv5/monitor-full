'use strict';

const Controller = require('egg').Controller;

class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg --monitor';
    // const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    // ctx.body = await ctx.model.JsError.findAll(query);
  }
}

module.exports = MonitorController;
