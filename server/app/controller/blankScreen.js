'use strict';

const Controller = require('egg').Controller;

class blankScreenController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.BlankScreen.findAll();
  }
  async create() {
    const { ctx } = this;
    const {title,currentUrl,timestamp,userAgent,kind,type,errorType,message,filename,position,stack,selector}=ctx.query
    const result = await ctx.model.BlankScreen.create({ title,currentUrl,timestamp,userAgent,kind,type,emptyPoints,screen,viewPoint,selector});
    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = blankScreenController;
