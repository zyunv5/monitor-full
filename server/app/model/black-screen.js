'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, TEXT } = app.Sequelize;

  const BlankScreen = app.model.define('blank-screen', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(20),
    currentUrl: TEXT,
    timestamp: TEXT,
    userAgent: STRING(16),
    kind: STRING(20),
    type: STRING(20),
    emptyPoints: TEXT,
    screen: STRING(64),
    viewPoint: STRING(64),
    selector: TEXT,
    createdAt: DATE,
    updatedAt: DATE,
  });

  return BlankScreen;
};
