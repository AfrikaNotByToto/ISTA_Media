module.exports = {
  async up (queryInterface) {
    const setUsers = [
      {
        userName: 'admin',
        password: '11111',
      },
    ];
    const users = setUsers.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
