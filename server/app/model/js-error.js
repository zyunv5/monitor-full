'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = app.Sequelize;
  const JsError = app.model.define(
    'js-error',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(20),
      currentUrl: { type: TEXT, field: 'currentUrl' },
      timestamp: TEXT,
      userAgent: { type: STRING(16), field: 'userAgent' },
      kind: STRING(20),
      type: STRING(20),
      errorType: { type: STRING(30), field: 'errorType' },
      filename: { type: TEXT, field: 'filename' },
      tagName: { type: TEXT, field: 'tagName' },
      message: TEXT,
      position: STRING(64),
      stack: TEXT,
      selector: TEXT,
      createdAt: { type: DATE, field: 'createdAt' },
      updatedAt: { type: DATE, field: 'updatedAt' },
    },
    {
      tableName: 'js-error',
    },
  );
  return JsError;
};
