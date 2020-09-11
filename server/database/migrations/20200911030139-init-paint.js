'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('paint', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(20),
      currentUrl: TEXT,
      timestamp: TEXT,
      userAgent: STRING(16),
      kind: STRING(20),
      type: STRING(20),
      inputDelay: STRING(64),
      duration: STRING(64),
      startTime: STRING(64),
      connectTime: STRING(64),
      ttfbTime: STRING(64),
      responseTime: STRING(64),
      parseDOMTime: STRING(64),
      domContentLoadedTime: STRING(64),
      timeToInteractive: STRING(64),
      loadTime: STRING(64),
      firstPaint: STRING(64),
      firstContentfulPaint: STRING(64),
      firstMeaningfulPaint: STRING(64),
      largestContentfulPaint: STRING(64),
      selector: TEXT,
      createdAt: DATE,
      updatedAt: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
