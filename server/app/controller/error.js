'use strict';

const Controller = require('egg').Controller;

class ErrorController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.JsError.findAll();
  }
  async create() {
    const { ctx } = this;
    const {title,currentUrl,timestamp,userAgent,kind,type,errorType,message,filename,position,stack,selector}=ctx.query
    const result = await ctx.model.JsError.create({ title,currentUrl,timestamp,userAgent,kind,type,errorType,message,filename,position,stack,selector });
    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = ErrorController;
