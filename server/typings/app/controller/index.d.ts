// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlankScreen = require('../../../app/controller/blankScreen');
import ExportError = require('../../../app/controller/error');
import ExportHome = require('../../../app/controller/home');
import ExportPaint = require('../../../app/controller/paint');

declare module 'egg' {
  interface IController {
    blankScreen: ExportBlankScreen;
    error: ExportError;
    home: ExportHome;
    paint: ExportPaint;
  }
}
