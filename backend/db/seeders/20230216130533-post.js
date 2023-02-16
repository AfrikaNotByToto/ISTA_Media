module.exports = {
  async up (queryInterface) {
    const setPosts = [
      {
        img: 'https://sun9-17.userapi.com/lM9MMJ8kaFtxBh2xa4j6t9HxOz6W6ck9QwXr2w/Lkx_XDJx04E.jpg',
        title: 'Большое агентство в большом городе',
        description: 'Ребрендинг, повышение кликабельности сайта, увеличение аудитории',
        userId: 1
      },
      {
        img: 'https://cloud.esoft.digital/content/media/site/99/b6/3d/d3dc25bc4c9da5fcb3509d360126daf3668e0f35.jpg',
        title: 'Продвигаем ваши показатели',
        description: 'Создание бренда, смм-решения',
        userId: 1
      },
      {
        img: 'https://irecommend.ru/sites/default/files/product-images/541402/2oD4owlafjfruPGqk4OTvw.png',
        title: 'Продвигаем ваши показатели',
        description: 'Создание бренда, смм-решения',
        userId: 1
      },
    ];
    const posts = setPosts.map((post) => ({
      ...post,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Posts', posts);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
