'use strict';

const Controller = require('egg').Controller;

class paintController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.Paint.findAll();
  }
  async create() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = 'hi, egg --monitor';
  }
}

module.exports = paintController;
