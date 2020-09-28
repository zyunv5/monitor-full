// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlackScreen = require('../../../app/model/black-screen');
import ExportJsError = require('../../../app/model/js-error');
import ExportPaint = require('../../../app/model/paint');

declare module 'egg' {
  interface IModel {
    BlackScreen: ReturnType<typeof ExportBlackScreen>;
    JsError: ReturnType<typeof ExportJsError>;
    Paint: ReturnType<typeof ExportPaint>;
  }
}
