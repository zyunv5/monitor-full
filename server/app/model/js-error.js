'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = Sequelize;

  const JsError = app.model.define('js-error', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(20),
    currentUrl: TEXT,
    timestamp: TEXT,
    userAgent: STRING(16),
    kind: STRING(20),
    type: STRING(20),
    errorType: STRING(30),
    filename: TEXT,
    tagName: TEXT,
    selector: TEXT,
    message: TEXT,
    filename: TEXT,
    position: STRING(64),
    stack: TEXT,
    createdAt: DATE,
    updatedAt: DATE,
  });

  return JsError;
};
