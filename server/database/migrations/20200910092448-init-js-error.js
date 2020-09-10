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
    await queryInterface.createTable('js-error', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(20),
      currentUrl: TEXT,
      timestamp: TEXT,
      userAgent: STRING(16),
      kind:STRING(20),
      type:STRING(20),
      errorType:STRING(30),
      filename:TEXT,
      tagName:TEXT,
      selector:TEXT,
      message:TEXT,
      filename:TEXT,
      position:STRING(64),
      stack:TEXT,
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
  },
};
