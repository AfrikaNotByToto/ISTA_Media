module.exports = {
  async up(queryInterface) {
    const setPosts = [
      {
        img: 'https://img.staticmb.com/mbcontent//images/uploads/2023/1/real-estate.jpg',
        title: 'Риэлторское агентсво - создание очереди заявок',
        description:
          'Создали профиль агентства в Instagram *(принадлежит экстремисткой организации Meta, запрещенной в РФ). Через связку Instagram* - креатив - посадочная страница - форма для обратной связи получен 301 лид из которых 70% - целевые. Медианная цена заявки - 143 рубля. ',
        userId: 1,
      },
      {
        img: 'https://cloud.esoft.digital/content/media/site/99/b6/3d/d3dc25bc4c9da5fcb3509d360126daf3668e0f35.jpg',
        title: 'Продвигаем ваши показатели',
        description: 'Создание бренда, смм-решения',
        userId: 1,
      },
      {
        img: 'https://irecommend.ru/sites/default/files/product-images/541402/2oD4owlafjfruPGqk4OTvw.png',
        title: 'Продвигаем ваши показатели',
        description: 'Создание бренда, смм-решения',
        userId: 1,
      },
    ];
    const posts = setPosts.map((post) => ({
      ...post,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Posts', posts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
