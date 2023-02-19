module.exports = {
  async up(queryInterface) {
    const setNews = [
      {
        img: 'https://sun9-17.userapi.com/lM9MMJ8kaFtxBh2xa4j6t9HxOz6W6ck9QwXr2w/Lkx_XDJx04E.jpg',
        title: 'Большое агентство в большом городе',
        description:
          'Ребрендинг, повышение кликабельности сайта, увеличение аудитории',
        url: 'https://teletype.in/@nadiam/becarefulwhilesellingapartments',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('News', setNews);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('News', null, {});
  },
};
